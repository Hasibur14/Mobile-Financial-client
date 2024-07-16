import { NavLink } from "react-router-dom";


const Navbar = () => {

    const links = (
        <>
            <li>
                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-white  px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-600 border-purple-600" : "hover:text-purple-600"} > <span>Home</span> </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-white  px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-600 border-purple-600" : "hover:text-purple-600"} > <span>Dashboard</span> </NavLink>
            </li>
        </>
    );
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">BankIt</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Registration</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;