import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainRoot = () => {
    return (
        <div className="mt-5 ">
           <div className="min-h-screen max-w-7xl mx-auto">
           <Navbar></Navbar>
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
            
        </div>
    );
};

export default MainRoot;