import Footer from "./elements/footer"

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-full flex flex-col justify-between">
      {/* Aligned to the top */}
      <div className="w-full min-h-[80%] sm:min-h-[90%] flex justify-center items-center  overflow-y-auto">
          {children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout
