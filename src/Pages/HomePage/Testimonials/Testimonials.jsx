import { useEffect, useState } from 'react';
import SectionsTitle from '../../../Component/SectionsTitle/SectionsTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='container mx-auto px-5 mb-24'>
            <div className='flex justify-center text-center mb-5'>
                <SectionsTitle
                    subHeading="What Our Clients Say"
                    heading="TESTIMONIALS"
                ></SectionsTitle>
            </div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='mx-32'>
                            <div className='flex justify-center'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                            </div>

                            <div className='flex justify-center my-8'>
                                <FaQuoteLeft className='text-7xl'></FaQuoteLeft>
                            </div>

                            <div>
                                <p className='text-center'>{review.details}</p>
                                <h2 className='text-3xl font-bold text-center mt-4 text-[#CD9003]'>{review.name}</h2>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;