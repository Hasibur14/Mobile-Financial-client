import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { HiOutlineServer } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { MdLogout, MdManageHistory, MdOutlineAddchart, MdOutlineRateReview, MdPayments } from 'react-icons/md';
import { VscRequestChanges } from 'react-icons/vsc';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const [isMenuTrue, setIsMenuTrue] = useState("user");
    const [role, setRole] = useState("user");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/${role}`);
                setRole(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, [role]);

    const handleSignOut = () => {
        // Clear token from local storage
        localStorage.removeItem('token');
        navigate('/signIn'); // Redirect to login page
    };

    const iconStyle = ({ isActive }) =>
        isActive
            ? `text-[19px] flex items-center gap-2.5 py-2 px-4 rounded-md bg-black text-white transition-all duration-300`
            : `text-[19px] flex items-center gap-2.5 py-2 px-4 rounded-md hover:shadow-md hover:shadow-accent text-white transition-all duration-300`;

    return (
        <div className="flex">
            <div className={`fixed h-screen w-[280px] bg-[#cf821d] border-r shadow-2xl px-3 pt-4 top-0 lg:left-0 z-50 transition-all duration-300 ${isMenuTrue ? "left-0" : "-left-[300px]"
                } flex flex-col justify-between`} >
                <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                        <h2 className='text-xl font-bold'>BANKIT</h2>
                        <IoMdClose
                            className="text-3xl text-white cursor-pointer block lg:hidden"
                            onClick={() => setIsMenuTrue(false)}
                        />
                    </div>
                    <ul className="space-y-4 dashboard-route mt-10 flex-grow">
                        <NavLink to="/dashboard/dash" className={iconStyle}>
                            <FaUserAlt />
                            <li>Dashboard</li>
                        </NavLink>

                        {role === "admin" ? (
                            <>
                                <NavLink to="/dashboard/admin-profile" className={iconStyle}>
                                    <FaUserAlt />
                                    <li>Admin Profile</li>
                                </NavLink>
                                <NavLink to="/dashboard/manage-user" className={iconStyle}>
                                    <MdManageHistory className="text-2xl" />
                                    <li>Manage User</li>
                                </NavLink>
                                <NavLink to="/dashboard/system-monitoring" className={iconStyle}>
                                    <MdOutlineAddchart className="text-2xl" />
                                    <li>System Monitoring</li>
                                </NavLink>
                            </>
                        ) : role === "agent" ? (
                            <>
                                <NavLink to="/dashboard/manage-transactions" className={iconStyle}>
                                    <HiOutlineServer className="text-2xl" />
                                    <li>Manage Transactions</li>
                                </NavLink>
                                <NavLink to="/dashboard/transaction-history" className={iconStyle}>
                                    <MdOutlineRateReview className="text-2xl" />
                                    <li>Transaction History</li>
                                </NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink to="/dashboard/send-money" className={iconStyle}>
                                    <VscRequestChanges className="text-2xl" />
                                    <li>Send Money</li>
                                </NavLink>
                                <NavLink to="/dashboard/cash-out" className={iconStyle}>
                                    <MdOutlineAddchart className="text-2xl" />
                                    <li>Cash Out</li>
                                </NavLink>
                                <NavLink to="/dashboard/balance-inquiry" className={iconStyle}>
                                    <MdPayments />
                                    <li>Balance Inquiry</li>
                                </NavLink>
                                <NavLink to="/dashboard/transaction-history" className={iconStyle}>
                                    <MdOutlineRateReview className="text-2xl" />
                                    <li>Transaction History</li>
                                </NavLink>
                            </>
                        )}
                    </ul>
                </div>
                <div className="mt-2">
                    <NavLink to="/" className={iconStyle} onClick={handleSignOut}>
                        <MdLogout />
                        <li>Logout</li>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
