import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/Sidebar";



const DashboardLayout = () => {
    return (
        <div>
            <div className='relative min-h-screen'>
                <Sidebar />

                <div className='max-w-7xl  mx-auto'>
                    <div className='p-5'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;