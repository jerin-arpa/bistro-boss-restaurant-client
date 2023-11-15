import PropTypes from 'prop-types';
import { AwesomeButton } from 'react-awesome-button';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;

    return (
        <div className='shadow-2xl pb-8 rounded-2xl'>
            <div className=' relative'>
                <img className='w-full h-72' src={image} alt="" />
                <p className='bg-black p-3 text-white text-center font-bold text-xl w-1/3 rounded-xl absolute top-3 right-3'>$ {price}</p>
            </div>
            <div className='p-3'>
                <h2 className='text-3xl font-bold text-center my-3  mt-5'>{name}</h2>
                <div className='flex justify-center'>
                    <p className='w-4/5 text-center'>{recipe}</p>
                </div>
            </div>
            <div className="mt-5 flex justify-center">
                <AwesomeButton className='text-[#D99904]' type="secondary">Add to Cart</AwesomeButton>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    item: PropTypes.object,
};

export default FoodCard;