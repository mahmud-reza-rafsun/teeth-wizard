import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handleSignOut = () => {
        signOutUser();
    }
    return (
        <div className="navbar bg-indigo-500 sticky top-0 z-50 min-h-16 px-6 lg:px-16">
            <div className="navbar-start">

                <Link className="text-white font-bold text-2xl" to="/">Teeth Wizard</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    <li><NavLink to="/" className="">Home</NavLink></li>
                    <li><NavLink to="allTreatment">All Treatment</NavLink></li>
                    <li><NavLink to="myAppoinment">My Appoinments</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="lg:block hidden">
                    {
                        user
                            ?
                            <div className="flex items-center gap-3">
                                <p className="text-white">{user?.image}</p>
                                <button onClick={handleSignOut} className="btn text-center bg-[#9b9cf0] hover:bg-[#9b9cf0] hover:border-[#9b9cf0] border-[#9b9cf0] text-white">Logout</button>
                            </div>

                            :
                            <Link to="/login" className="btn text-center bg-[#9b9cf0] hover:bg-[#9b9cf0] hover:border-[#9b9cf0] border-[#9b9cf0] text-white">Login</Link>
                    }
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn text-white btn-ghost lg:hidden">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 absolute -left-36 w-52 p-2 shadow">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="allTreatment">All Treatment</NavLink></li>
                        <li><NavLink to="myAppoinment">My Appoinments</NavLink></li>
                        <li><NavLink to="login">Login</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;