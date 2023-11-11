import SectionsTitle from '../../../Component/SectionsTitle/SectionsTitle';
import img1 from '../../../assets/assets/menu/salad-bg.jpg';
import img2 from '../../../assets/assets/menu/dessert-bg.jpeg';
import img3 from '../../../assets/assets/menu/soup-bg.jpg';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';


const Recommends = () => {
    return (
        <div className='container mx-auto px-5 mb-20'>
            <div className='flex justify-center text-center'>
                <SectionsTitle
                    subHeading="Should Try"
                    heading="CHEF RECOMMENDS"
                ></SectionsTitle>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='shadow-2xl pb-8'>
                    <img className='w-full h-72' src={img1} alt="" />
                    <div>
                        <h2 className='text-3xl font-bold text-center my-3  mt-5'>Caeser Salad</h2>
                        <div className='flex justify-center'>
                            <p className='w-4/5 text-center'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        </div>
                    </div>
                    <div className="mt-5 flex justify-center">
                        <AwesomeButton className='text-[#D99904]' type="secondary">Add to Cart</AwesomeButton>
                    </div>
                </div>

                <div className='shadow-2xl pb-8'>
                    <img className='w-full h-72' src={img2} alt="" />
                    <div>
                        <h2 className='text-3xl font-bold text-center my-3  mt-5'>Caeser Salad</h2>
                        <div className='flex justify-center'>
                            <p className='w-4/5 text-center'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        </div>
                    </div>
                    <div className="mt-5 flex justify-center">
                        <AwesomeButton className='text-[#D99904]' type="secondary">Add to Cart</AwesomeButton>
                    </div>
                </div>


                <div className='shadow-2xl pb-8'>
                    <img className='w-full h-72' src={img3} alt="" />
                    <div>
                        <h2 className='text-3xl font-bold text-center my-3  mt-5'>Caeser Salad</h2>
                        <div className='flex justify-center'>
                            <p className='w-4/5 text-center'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        </div>
                    </div>
                    <div className="mt-5 flex justify-center">
                        <AwesomeButton className='text-[#D99904]' type="secondary">Add to Cart</AwesomeButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommends;