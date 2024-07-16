import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";



const MainLayout = () => {
    return (
        <div>
            <Navbar />

            <div className="min-h-[calc(100vh-130px)] container mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;