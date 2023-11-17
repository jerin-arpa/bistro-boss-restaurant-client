import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from "../../Component/Cover/Cover";
import shopImg from '../../assets/assets/shop/banner2.jpg';
import { useState } from 'react';
import useMenu from '../../hooks/UseMenu';
import OrderTab from './OrderTab/OrderTab';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';


const OurShop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];

    const { category } = useParams();
    console.log(category);

    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drink = menu.filter(item => item.category === 'drinks');


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Shop</title>
            </Helmet>

            <Cover
                img={shopImg}
                title="Our Shop"
                description="Would you like to try a dish?"
            ></Cover>

            <div className="container mx-auto px-5 py-20">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab
                            items={salad}
                        ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            items={pizza}
                        ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            items={soup}
                        ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            items={dessert}
                        ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            items={drink}
                        ></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;