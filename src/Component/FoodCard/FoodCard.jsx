import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import UseAxiosSecure from '../../hooks/UseAxiosSecure';
import UseCart from '../../hooks/UseCart';


const FoodCard = ({ item }) => {
    const { _id, name, image, price, recipe } = item;
    const { user } = useContext(AuthContext);
    console.log(user)
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = UseAxiosSecure();
    const [, refetch] = UseCart();


    const handleAddToCart = () => {
        if (user && user.email) {
            // Send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);

                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch the cart
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Logged in",
                text: "Please Login first to add items into your cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Send the user to login page
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }


    return (
        <div className='shadow-2xl pb-8 rounded-2xl'>
            <div className=' relative'>
                <img className='w-full h-72' src={image} alt="" />
                <p className='bg-black p-3 text-white text-center font-bold text-xl w-1/3 rounded-xl absolute top-3 right-3'>$ {price}</p>
            </div>
            <div className='p-3 h-52'>
                <h2 className='text-3xl font-bold text-center my-3  mt-5'>{name}</h2>
                <div className='flex justify-center'>
                    <p className='w-4/5 text-center'>{recipe}</p>
                </div>
            </div>
            <div className="mt-5 flex justify-center">
                <button onClick={handleAddToCart} className='btn border-0 border-b-[#D1A054] border-b-4'>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    item: PropTypes.object,
};

export default FoodCard;