import SectionsTitle from "../../../Component/SectionsTitle/SectionsTitle";
import image from '../../../assets/assets/home/featured.jpg';

const FeatureMenu = () => {
    return (
        <div className='mb-20'>
            <div className="hero bg-fixed" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60 py-64"></div>
                <div className="hero-content text-white">
                    <div className="py-20">
                        <div className='flex justify-center text-center mb-5'>
                            <SectionsTitle
                                subHeading="Check It Out"
                                heading="FROM OUR MENU"
                            ></SectionsTitle>
                        </div>

                        <div className="flex gap-10">
                            <div className="flex-1">
                                <img className="w-full" src={image} alt="" />
                            </div>

                            <div className="flex items-center flex-1">
                                <div>
                                    <p className="text-3xl font-bold mb-2">March 20, 2023</p>
                                    <p className="text-2xl font-bold mb-5">WHERE CAN I GET SOME?</p>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                                    <div className="mt-5">
                                        <button className="btn btn-outline border-0 border-b-4 text-white">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureMenu;