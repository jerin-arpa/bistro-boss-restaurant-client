import PropTypes from 'prop-types';
import MenuItemCard from '../../../Component/MenuItemCard/MenuItemCard';

const MenuCategory = ({ items }) => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItemCard
                        key={item._id}
                        item={item}
                    ></MenuItemCard>)
                }
            </div>

            <div className='mt-14 flex justify-center'>
                <button className='btn bg-transparent border-0 border-b-8 border-[#BB8506] text-bold text-2xl'>
                    ORDER YOUR FAVOURITE FOOD
                </button>
            </div>
        </div>
    );
};

MenuCategory.propTypes = {
    items: PropTypes.array,
};

export default MenuCategory;