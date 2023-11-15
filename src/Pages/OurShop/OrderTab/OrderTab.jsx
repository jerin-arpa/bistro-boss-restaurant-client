import PropTypes from 'prop-types';
import FoodCard from '../../../Component/FoodCard/FoodCard';

const OrderTab = ({ items }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-10'>
            {
                items.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

OrderTab.propTypes = {
    items: PropTypes.array,
};

export default OrderTab;