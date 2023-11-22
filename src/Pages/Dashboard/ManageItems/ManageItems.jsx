import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import SectionsTitle from "../../../Component/SectionsTitle/SectionsTitle";
import useMenu from "../../../hooks/UseMenu";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { Link } from "react-router-dom";



const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = UseAxiosSecure();

    const handleDeleteItem = item => {
        console.log(item);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted`,
                        icon: "success"
                    });
                }
            }
        });
    }


    return (
        <div>
            <div className="flex justify-center text-center">
                <SectionsTitle
                    subHeading="Hurry Up!!"
                    heading="MANAGE ALL ITEMS"
                ></SectionsTitle>
            </div>


            <div className=" bg-white p-10 mx-10 mb-10 rounded-xl">
                <div className="flex flex-col lg:flex-row gap-2 justify-between mb-10">
                    <div className="flex items-center">
                        <h2 className="text-2xl font-bold">Total Items: {menu.length}</h2>
                    </div>
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
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="font-bold">{item.name}</td>
                                    <td className="font-bold">{item.price}</td>

                                    <td>
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button
                                                className="btn  bg-[#D1A054]">
                                                <FiEdit className="text-2xl text-white"></FiEdit>
                                            </button>
                                        </Link>
                                    </td>

                                    <td>
                                        <button onClick={() => handleDeleteItem(item)}
                                            className="btn bg-red-600">
                                            <MdDeleteForever className="text-2xl text-white"></MdDeleteForever>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;