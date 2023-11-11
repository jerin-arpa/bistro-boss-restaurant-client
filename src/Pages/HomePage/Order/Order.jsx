import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import image1 from '../../../assets/assets/home/slide1.jpg';
import image2 from '../../../assets/assets/home/slide2.jpg';
import image3 from '../../../assets/assets/home/slide3.jpg';
import image4 from '../../../assets/assets/home/slide4.jpg';
import image5 from '../../../assets/assets/home/slide5.jpg';



const Order = () => {
    return (
        <div className='mt-16 mb-20'>
            <div className='flex justify-center text-center'>
                <div>
                    <p className='text-[#D99904] font-bold'>---From 11:00am to 10:00pm---</p>
                    <hr className='my-3 ' />
                    <h2 className='text-4xl font-bold'>ORDER ONLINE</h2>
                    <hr className='mt-3 mb-10' />
                </div>
            </div>

            <div className='container mx-auto px-5'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='w-full' src={image1} alt="" />
                        <h3 className='text-4xl text-center -mt-20 text-white font-bold uppercase'>Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full' src={image2} alt="" />
                        <h3 className='text-4xl text-center -mt-20 text-white font-bold uppercase'>Pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full' src={image3} alt="" />
                        <h3 className='text-4xl text-center -mt-20 text-white font-bold uppercase'>Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full' src={image4} alt="" />
                        <h3 className='text-4xl text-center -mt-20 text-white font-bold uppercase'>Desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full' src={image5} alt="" />
                        <h3 className='text-4xl text-center -mt-20 text-white font-bold uppercase'>Salads</h3>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Order;