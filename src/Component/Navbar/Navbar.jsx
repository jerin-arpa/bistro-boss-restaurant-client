import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/assets/logo/logo.png';
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navLink = <>
        <li>
            <NavLink to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#EEFF25] underline font-bold" : ""
                }>Home</NavLink>
        </li>
        <li>
            <NavLink to="/ourMenu"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#EEFF25] underline font-bold" : ""
                }>Our Menu</NavLink>
        </li>
        <li>
            <NavLink to="/ourShop/salad"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#EEFF25] underline font-bold" : ""
                }>Our Shop</NavLink>
        </li>
        <li>
            <NavLink to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#EEFF25] underline font-bold" : ""
                }>Contact Us</NavLink>
        </li>
    </>

    return (
        <div className="flex justify-center">
            <div className="navbar bg-black text-white opacity-80 fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="flex flex-col gap-3 dropdown-content mt-3 z-[2] p-5 shadow bg-neutral text-neutral-content rounded-box w-52 font-bold">
                            {navLink}
                        </ul>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex items-center">
                            <img className="w-16" src={logo} alt="" />
                        </div>
                        <div className="flex items-center">
                            <div>
                                <h2 className="text-2xl font-bold">Bistro Boss</h2>
                                <p className="text-sm tracking-[0.5em]"><span >Restaurant</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5 font-bold px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <img className="w-8 rounded-full" src={user?.photoURL} alt="" />
                    <h2 className="px-3">{user?.displayName}</h2>
                    <div>
                        {
                            user ? <>
                                <button onClick={handleLogout} className="btn bg-[#D1A054] border-0 font-bold">Log out</button>
                            </> : <>
                                <Link to='/login'>
                                    <button className="btn bg-[#D1A054] border-0 font-bold">Login</button>
                                </Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;