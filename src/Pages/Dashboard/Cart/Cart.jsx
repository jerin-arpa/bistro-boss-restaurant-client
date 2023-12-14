import { MdDeleteForever } from "react-icons/md";
import UseCart from "../../../hooks/UseCart";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import SectionsTitle from "../../../Component/SectionsTitle/SectionsTitle";
import { Link } from "react-router-dom";

const Cart = () => {

    const [cart, refetch] = UseCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = UseAxiosSecure();


    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }



    return (
        <div>
            <div className="flex justify-center text-center">
                <SectionsTitle
                    subHeading="My Cart"
                    heading="WANNA ADD MORE?"
                ></SectionsTitle>
            </div>


            <div className=" bg-white p-10 mx-10 mb-10 rounded-xl">
                <div className="flex flex-col lg:flex-row gap-2 justify-between mb-10">
                    <div className="flex items-center">
                        <h2 className="text-2xl font-bold">Total Orders: {cart.length}</h2>
                    </div>

                    <div className="flex items-center">
                        <h2 className="text-2xl font-bold">Total Price: {totalPrice}</h2>
                    </div>

                    {
                        cart.length ? <Link to='/dashboard/payment'>
                            <button className="btn bg-[#D1A054] border-0 font-bold text-white">PAY</button>
                        </Link> :
                            <button disabled className="btn bg-[#D1A054] border-0 font-bold">PAY</button>
                    }
                </div>



                <div className="overflow-x-auto rounded-xl">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] font-extrabold text-white">
                            <tr>
                                <th></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </td>

                                    <td className="font-bold">$ {item.price}</td>

                                    <th>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn btn-ghost">
                                            <MdDeleteForever className="text-2xl text-red-600"></MdDeleteForever>
                                        </button>
                                    </th>
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;