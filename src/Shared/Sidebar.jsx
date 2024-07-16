
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { HiOutlineServer } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { MdLogout, MdManageHistory, MdOutlineAddchart, MdOutlineRateReview, MdOutlineUpcoming } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";


const Sidebar = () => {

    const navigate = useNavigate();
    const [isMenuTrue, setIsMenuTrue] = useState(false);

    const handleSignOut = () => {
        navigate('/signIn');
    };

    const iconStyle = ({ isActive }) =>
        isActive
            ? `text-[19px] flex items-center gap-2.5 py-2 px-4 rounded-md bg-gradient-to-tl from-[#121e2d] to-[#34d1bc] text-white transition-all duration-300`
            : `text-[19px] flex items-center gap-2.5 py-2 px-4 rounded-md hover:shadow-md hover:shadow-accent text-white transition-all duration-300`;

    return (
        <div className="flex">
            <div className={`fixed h-screen w-[280px] bg-[#050c3c] border-r shadow-2xl px-3 pt-4 top-0 lg:left-0 z-50 transition-all duration-300 ${isMenuTrue ? "left-0" : "-left-[300px]"
                } flex flex-col justify-between`} >
                <div className="flex flex-col">
                    <div className="flex justify-between items-center shadow-lg shadow-primary">

                        <IoMdClose
                            className="text-3xl text-white cursor-pointer block lg:hidden"
                            onClick={() => setIsMenuTrue(false)}
                        />
                    </div>
                    <ul className="space-y-4 dashboard-route mt-10 flex-grow">
                        <NavLink to="/" className={iconStyle}>
                            <FaHome />
                            <li> Home</li>
                        </NavLink>

                        
                        <>

                            {/* Admin Role */}
                            <>
                                <NavLink to="/dashboard/manage-user" className={iconStyle}>
                                    <MdManageHistory className="text-2xl" />
                                    <li>Login</li>
                                </NavLink>
                                <NavLink to="/dashboard/add-meals" className={iconStyle}>
                                    <MdOutlineAddchart className="text-2xl" />
                                    <li>User Management</li>
                                </NavLink>
                                <NavLink to="/dashboard/all-meals" className={iconStyle}>
                                    <FaCodePullRequest />
                                    <li>Cash out</li>
                                </NavLink>
                                <NavLink to="/dashboard/all-review" className={iconStyle}>
                                    <MdOutlineRateReview className="text-2xl" />
                                    <li>System Monitoring</li>
                                </NavLink>
                            </>
                            {/* User Role */}
                            <>
                                <NavLink to="/dashboard/admin-profile" className={iconStyle} navLinkStyles>
                                    <FaUserAlt />
                                    <li>Registration</li>
                                </NavLink>
                                <NavLink to="/dashboard/manage-user" className={iconStyle}>
                                    <MdManageHistory className="text-2xl" />
                                    <li>Login</li>
                                </NavLink>
                                <NavLink to="/dashboard/all-review" className={iconStyle}>
                                    <MdOutlineRateReview className="text-2xl" />
                                    <li>Transaction Management</li>
                                </NavLink>
                                <NavLink to="/dashboard/serve-meals" className={iconStyle}>
                                    <HiOutlineServer className="text-2xl" />
                                    <li>Balance Inquiry</li>
                                </NavLink>
                                <NavLink to="/dashboard/upcoming-meals" className={iconStyle}>
                                    <MdOutlineUpcoming className="text-2xl" />
                                    <li>Transactions History</li>
                                </NavLink>
                            </>

                            {/* User Role */}
                            <>
                                <NavLink to="/dashboard/admin-profile" className={iconStyle} navLinkStyles>
                                    <FaUserAlt />
                                    <li>Registration</li>
                                </NavLink>
                                <NavLink to="/dashboard/manage-user" className={iconStyle}>
                                    <MdManageHistory className="text-2xl" />
                                    <li>Login</li>
                                </NavLink>
                                <NavLink to="/dashboard/add-meals" className={iconStyle}>
                                    <MdOutlineAddchart className="text-2xl" />
                                    <li>Send Money</li>
                                </NavLink>
                                <NavLink to="/dashboard/all-meals" className={iconStyle}>
                                    <FaCodePullRequest />
                                    <li>Cash out</li>
                                </NavLink>
                                <NavLink to="/dashboard/all-review" className={iconStyle}>
                                    <MdOutlineRateReview className="text-2xl" />
                                    <li>Cash in </li>
                                </NavLink>
                                <NavLink to="/dashboard/serve-meals" className={iconStyle}>
                                    <HiOutlineServer className="text-2xl" />
                                    <li>Balance Inquiry</li>
                                </NavLink>
                                <NavLink to="/dashboard/upcoming-meals" className={iconStyle}>
                                    <MdOutlineUpcoming className="text-2xl" />
                                    <li>Transactions History</li>
                                </NavLink>
                            </>
                        </>

                    </ul>
                </div>
                <div className="pb-28 md:pb-12 lg:pb-10">
                    <button
                        onClick={handleSignOut}
                        className="text-[19px] w-full flex items-center gap-2.5 py-2 px-4 rounded shadow-sm shadow-secondary hover:bg-gradient-to-tl from-[#121e2d] to-[#06bea6] text-white transition-all duration-300">
                        <MdLogout className="text-xl mr-2" />
                        Sign Out
                    </button>
                </div>
            </div>
            <div className="w-[343px] hidden lg:block"></div>
            <div className="bg-[#F8F7FA] w-full h-28 rounded col-span-10">
                <div className="overflow-y-auto w-[94%] mx-auto h-16 shadow-2xl bg-white my-5 rounded-lg flex justify-between items-center px-10">
                    <AiOutlineMenu
                        onClick={() => setIsMenuTrue(true)}
                        className="text-2xl cursor-pointer block lg:hidden"
                    />
                    <div className="hidden lg:flex">
                        <h4 className="text-xl font-semibold">Welcome
                            <span className=" bg-gradient-to-r from-primary via-fuchsia-600 to-secondary bg-300% text-transparent bg-clip-text animate-gradient">    </span>
                        </h4>
                    </div>
                    <div>
                        <img
                            src=''
                            alt="photo not upload"
                            className="w-12 h-12 rounded-lg border border-red-500 object-cover"

                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
