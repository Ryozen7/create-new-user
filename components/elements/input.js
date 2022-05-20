const Input = ({
    name,
    value,
    type,
    placeholder,
    className,
    onChange,
    required
}) => {
    if (type === "file") {
        return (
            <div className="absolute -mt-40 sm:-mt-52  left-16 sm:left-20 ">
                <div className="w-[150px] h-[150px] z-10 rounded-full bg-lightGray">
                    <div className="w-full z-10 h-full rounded-full">
                        {value.length > 0 && 
                            <img 
                                className="w-full z-10 h-full rounded-full" 
                                src={`${value}`} 
                                alt="profile"
                            />
                        }
                    </div>
                </div>
                <input
                    className="w-full h-full flex -ml-4 sm:ml-2 z-50 -mt-8 sm:mt-0"
                    name={name}
                    type={type}
                    onChange={onChange}
                    placeholder="valid png jpeg file"
                    accept="image/png, image/jpeg"
                    required={required}
                />
            </div>
        )
    }
    return (
      <input 
        className={className}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    );
  };
  
  export default Input;
  