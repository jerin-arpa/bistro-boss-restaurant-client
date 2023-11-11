import { useEffect, useState } from "react";
import SectionsTitle from "../../../Component/SectionsTitle/SectionsTitle";
import MenuItemCard from "../../../Component/MenuItemCard/MenuItemCard";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';


const Menu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems);
            })
    }, []);

    return (
        <div className="container mx-auto px-5 mb-20">
            <div className='flex justify-center text-center'>
                <SectionsTitle
                    subHeading="Check it out"
                    heading="FROM OUR MENU"
                ></SectionsTitle>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItemCard
                        key={item._id}
                        item={item}
                    ></MenuItemCard>)
                }
            </div>

            <div className="mt-10 flex justify-center">
                <AwesomeButton type="secondary">View All</AwesomeButton>
            </div>
        </div>
    );
};

export default Menu;