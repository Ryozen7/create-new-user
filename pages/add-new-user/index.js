import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Input from "../../components/elements/input";
import fields from "../../constants/add-user-form-fields";
import { toast } from 'react-toastify';

export default function AddUser() {
  const router = useRouter();
  const [form, setForm] = useState({});
  const [error, setError] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  const onHandleChange = (e)=> {
    const { name, value } = e.target;
    if (name ==="profilePic") {
      const [ file ] = e.target.files;
      return setForm(form => (
          {...form, [name]: URL.createObjectURL(file)}
      ))
    }
    setForm(form => (
      {...form, [name]: value}
    ))
  } 

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const tempForm = {...form};
    if (tempForm.confirmPassword !== tempForm.password) {
      return setError(error => ({...error, confirmPassword: "Password is not the same."}))
    }
    if(Object.keys(error).length > 0) {
      return
    }
    setIsSaving(true);
    const data = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(tempForm)
    }
    const response = await fetch("/api/upload", data);
    if(response.ok) {
      toast.success("Successfully addded user!");
      setIsSaving(false);
      setForm({});
    }
  }

  useEffect(()=> {
    const tempForm = {...form};
    if(tempForm.password?.length > 0 && tempForm.confirmPassword?.length > 0 ) {
      if (tempForm.confirmPassword !== tempForm.password && tempForm.password?.length <= tempForm.confirmPassword?.length) {
        setError(error => ({...error, confirmPassword: "Password is not the same."}))
      } else setError({})
    }
  }, [form.confirmPassword])

  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-20 sm:mt-10">
      <form 
        onSubmit={onFormSubmit} 
        className="relative text-lg font-crimsonTextSemiBold sm:w-[70%] lg:w-1/2 
                  h-[auto] py-5 min-w-[300px] flex flex-col 
                  justify-center items-center bg-primary rounded-lg shadow-xl pt-16 sm:pt-24"
      >
          { fields.map( (field, i) => (
            <div key={`${field.name}-${i}`} className="relative w-full h-auto mb-3 flex flex-col sm:flex-row justify-center items-center">
              <label className={ `${field.type ==="file"? "hidden":"sm:w-[20%]" } `}>{field.label}{field.required && "*"}</label>
              <Input
                  name={field.name}
                  type={field.type}
                  value={form[field.name] || ""}
                  onChange={onHandleChange}
                  required={field.required}
                  className={"pl-4 text-md font-crimsonText rounded-md w-[60%] p-1 mb-4"}
              />
              { error[field.name] && (
                <div className="w-[60%] text-right text-sm text-red-700 absolute mt-20 sm:mt-14"> {error[field.name]}</div>
              )}
            </div>
          ))}

          <button type="submit" className="w-[70%] sm:w-1/4 p-3 m-5 rounded-lg bg-bgColor hover:bg-lightGray">
              {isSaving? "Saving...": "Save"}
          </button>
      </form>
      <div className="mt-10"> You can check the users link on this 
        <button 
        className="px-4 py-2 mx-2 rounded-full text-lg font-bold bg-primary"
        onClick={()=> router.push('/saved-users')}>
          Page
        </button> 
      </div>
    </div>
  )
}
  

