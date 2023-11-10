import { NavLink } from "react-router-dom"

const Navbar = () => {

    const navLink = <>
        <li>
            <NavLink to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#EEFF25] underline font-bold" : ""
                }>Home</NavLink>
        </li>
        <li>
            <NavLink to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#EEFF25] underline font-bold" : ""
                }>Contact Us</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#EEFF25] underline font-bold" : ""
                }>Dashboard</NavLink>
        </li>
        <li>
            <NavLink to="/ourMenu"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#EEFF25] underline font-bold" : ""
                }>Our Menu</NavLink>
        </li>
        <li>
            <NavLink to="/ourShop"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#EEFF25] underline font-bold" : ""
                }>Our Shop</NavLink>
        </li>
    </>

    return (
        <div className="bg-neutral text-neutral-content">
            <div className="navbar container mx-auto px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="flex flex-col gap-3 dropdown-content mt-3 z-[2] p-5 shadow bg-base-100 rounded-box w-52 font-bold">
                            {navLink}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Bistro Boss</h2>
                        <p className="text-sm tracking-[0.5em]"><span >Restaurant</span></p>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="flex gap-10 font-bold px-1">
                        {navLink}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;