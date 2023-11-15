import { Helmet } from 'react-helmet-async';
import Cover from '../../Component/Cover/Cover';
import image from '../../assets/assets/menu/banner3.jpg';
import dessertImg from '../../assets/assets/menu/dessert-bg.jpeg';
import soupImg from '../../assets/assets/menu/soup-bg.jpg';
import saladImg from '../../assets/assets/menu/salad-bg.jpg';
import pizzaImg from '../../assets/assets/menu/pizza-bg.jpg';
import useMenu from '../../hooks/UseMenu';
import SectionsTitle from '../../Component/SectionsTitle/SectionsTitle';
import MenuCategory from './MenuCategory/MenuCategory';


const OurMenu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>

            <div>
                <Cover
                    img={image}
                    title={"Our Menu"}
                    description={"Would you like to try a dish?"}
                ></Cover>

                <div className='my-20 container mx-auto px-5'>
                    <div className='flex justify-center text-center mb-10'>
                        <SectionsTitle
                            subHeading={"Don't Miss"}
                            heading={"TODAY'S OFFER"}
                        ></SectionsTitle>
                    </div>

                    <MenuCategory
                        items={offered}
                    ></MenuCategory>
                </div>
            </div>

            <div>
                <Cover
                    img={dessertImg}
                    title={"Dessert"}
                    description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></Cover>

                <div className='my-20 container mx-auto px-5'>
                    <MenuCategory
                        items={dessert}
                    ></MenuCategory>
                </div>
            </div>


            <div>
                <Cover
                    img={soupImg}
                    title={"SOUPS"}
                    description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></Cover>

                <div className='my-20 container mx-auto px-5'>
                    <MenuCategory
                        items={soup}
                    ></MenuCategory>
                </div>
            </div>

            <div>
                <Cover
                    img={saladImg}
                    title={"SALADS"}
                    description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></Cover>

                <div className='my-20 container mx-auto px-5'>
                    <MenuCategory
                        items={salad}
                    ></MenuCategory>
                </div>
            </div>

            <div>
                <Cover
                    img={pizzaImg}
                    title={"PIZZAS"}
                    description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></Cover>

                <div className='my-20 container mx-auto px-5'>
                    <MenuCategory
                        items={pizza}
                    ></MenuCategory>
                </div>
            </div>
        </div>
    );
};

export default OurMenu;