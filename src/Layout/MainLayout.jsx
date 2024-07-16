import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Navbar />
                <div className="min-h-[calc(100vh-130px)]">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;