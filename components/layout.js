import Footer from "./elements/footer"

const Layout = ({ children }) => {
  return (
    <div className="h-screen relative overflow-y-auto w-full flex flex-col justify-between">
      {/* Aligned to the top */}
      <div className="w-full h-[95%] overflow-y-auto">
          {children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout
