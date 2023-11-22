import { useForm } from "react-hook-form";
import SectionsTitle from "../../../Component/SectionsTitle/SectionsTitle";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;



const UpdateItem = () => {

    const { name, category, recipe, price, _id } = useLoaderData();

    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = UseAxiosPublic();
    const axiosSecure = UseAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);

        // Image upload to imagebb and get  an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} is Updated to the menu successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('With Image url', res.data);
    };


    return (
        <div>
            <div className="flex justify-center text-center">
                <SectionsTitle
                    subHeading="Refresh Info"
                    heading="UPDATE AN ITEM"
                ></SectionsTitle>
            </div>


            <div className="mx-20 mb-20 mt-5">
                <div className="bg-base-200 rounded-xl p-20">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full mb-5">
                            <label className="label">
                                <span className="label-text">Recipe Name*</span>
                            </label>
                            <input {...register("name", { required: true })}
                                defaultValue={name} type="text" placeholder="Recipe Name" className="input input-bordered w-full" />
                        </div>


                        <div className="flex flex-col lg:flex-row gap-5">
                            {/* category */}
                            <div className="form-control w-full mb-5">
                                <label className="label">
                                    <span className="label-text">Category*</span>
                                </label>
                                <select {...register('category', { required: true })} className="select select-bordered w-full" defaultValue={category}>
                                    <option disabled value='default'>Select a Category?</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="Drinks">Drinks</option>
                                </select>
                            </div>

                            {/* price */}
                            <div className="form-control w-full mb-5">
                                <label className="label">
                                    <span className="label-text">Price*</span>
                                </label>
                                <input {...register("price", { required: true })} defaultValue={price} type="number" placeholder="Price" className="input input-bordered w-full" />
                            </div>
                        </div>

                        {/* Recipe Details */}
                        <div className="form-control w-full mb-5">
                            <label className="label">
                                <span className="label-text">Recipe Details*</span>
                            </label>
                            <textarea {...register("recipe", { required: true })} defaultValue={recipe} placeholder="Recipe Details" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                        </div>

                        <div className="form-control w-full mb-5">
                            <label className="label">
                                <span className="label-text">Recipe Image*</span>
                            </label>
                            <input {...register("image", { required: true })} type="file" className="file-input w-full" />
                        </div>

                        <div className="mt-14">
                            <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] border-0 text-white w-full">
                                Update Recipe Details
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default UpdateItem;