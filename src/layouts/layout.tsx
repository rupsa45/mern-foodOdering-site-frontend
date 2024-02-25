import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Home from "@/components/HomePage/Home";

type Props={
    children:React.ReactNode;
    showHero?:boolean
}


const Layout = ({children,showHero=false}:Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      {showHero &&  <Home/> }
     
      
      <div className='container mx-auto flex-1 py-10'>{children}</div>
      <Footer/>
    </div>
  )
}


export default Layout
