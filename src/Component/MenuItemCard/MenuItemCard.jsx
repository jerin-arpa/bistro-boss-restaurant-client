import PropTypes from 'prop-types';


const MenuItemCard = ({ item }) => {
    const { image, price, recipe, name } = item;

    return (
        <div className='flex gap-5'>
            <img className='w-28 h-28 rounded-r-full rounded-b-full' src={image} alt="" />
            <div className='flex items-center'>
                <div>
                    <h3 className='uppercase text-xl font-bold mb-3'>{name}---------------</h3>
                    <p>{recipe}</p>
                </div>
            </div>
            <p className='text-[#D99904] font-bold'>${price}</p>
        </div>
    );
};

MenuItemCard.propTypes = {
    item: PropTypes.object,
};

export default MenuItemCard;