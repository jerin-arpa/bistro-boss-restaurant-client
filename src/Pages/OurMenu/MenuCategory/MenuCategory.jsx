import PropTypes from 'prop-types';
import MenuItemCard from '../../../Component/MenuItemCard/MenuItemCard';
import { Link } from 'react-router-dom';
import Cover from '../../../Component/Cover/Cover';

const MenuCategory = ({ items, title, description, img }) => {
    return (
        <div>
            <div>
                {
                    title && <Cover img={img} title={title} description={description}></Cover>
                }
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20 container mx-auto px-5">
                {
                    items.map(item => <MenuItemCard
                        key={item._id}
                        item={item}
                    ></MenuItemCard>)
                }
            </div>

            <div className='mt-14 flex justify-center'>
                <Link to={`/ourShop/${title}`}>
                    <button className='btn bg-transparent border-0 border-b-8 border-[#BB8506] text-bold bg-gray-100 px-14'>
                        ORDER YOUR FAVOURITE FOOD
                    </button>
                </Link>
            </div>
        </div>
    );
};

MenuCategory.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
};

export default MenuCategory;