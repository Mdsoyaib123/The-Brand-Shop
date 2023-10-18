import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainRoot = () => {
    return (
        <div className="mt-5 max-w-7xl mx-auto">
           <Navbar></Navbar>
            <div className="">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainRoot;