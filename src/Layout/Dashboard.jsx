import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../hooks/UseCart";

const Dashboard = () => {

    const [cart] = UseCart();

    return (
        <div className="bg-slate-50">
            <div>
                <div className="flex">
                    <div className="w-64 min-h-screen bg-[#D1A054] font-extrabold pt-14">
                        <ul className="menu">
                            <li>
                                <NavLink to="/dashboard/userHome">
                                    <FaHome></FaHome> User Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reservation">
                                    <FaCalendar></FaCalendar> Reservation</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart">
                                    <FaShoppingCart></FaShoppingCart>My Cart ({cart.length})</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/review">
                                    <FaAd></FaAd>  Add a Review</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaList></FaList>  My Bookings</NavLink>
                            </li>

                            <div className="divider"></div>


                            <li>
                                <NavLink to="/">
                                    <FaHome></FaHome>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ourShop/salad">
                                    <FaListCheck></FaListCheck> Menu</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 pt-16 ml-5">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;