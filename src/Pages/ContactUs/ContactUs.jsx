import Cover from "../../Component/Cover/Cover";
import SectionsTitle from "../../Component/SectionsTitle/SectionsTitle";
import contact from '../../assets/assets/contact/banner.jpg';
import { FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoTime } from 'react-icons/io5';


const ContactUs = () => {
    return (
        <div>
            <Cover
                img={contact}
                title="CONTACT US"
                description="Would you like to try a dish?"
            ></Cover>


            <div className="container mx-auto px-5 my-20">
                <div className="flex justify-center text-center">
                    <SectionsTitle
                        subHeading="Visit Us"
                        heading="OUR LOCATION"
                    ></SectionsTitle>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="border">
                        <div className="bg-[#D1A054] p-5 flex justify-center">
                            <FaPhone className="text-white text-3xl"></FaPhone>
                        </div>

                        <div className="text-center bg-gray-100 mx-5 mb-5 py-14 font-bold">
                            <h3 className="text-3xl mb-2">PHONE</h3>
                            <p>+38 (012) 34 56 789</p>
                        </div>
                    </div>


                    <div className="border">
                        <div className="bg-[#D1A054] p-5 flex justify-center">
                            <FaLocationDot className="text-white text-3xl"></FaLocationDot>
                        </div>

                        <div className="text-center bg-gray-100 mx-5 mb-5 py-14 font-bold">
                            <h3 className="text-3xl mb-2">ADDRESS</h3>
                            <p>+38 (012) 34 56 789</p>
                        </div>
                    </div>


                    <div className="border">
                        <div className="bg-[#D1A054] p-5 flex justify-center">
                            <IoTime className="text-white text-3xl"></IoTime>
                        </div>

                        <div className="text-center bg-gray-100 mx-5 mb-5 py-14 font-bold">
                            <h3 className="text-3xl mb-2">WORKING HOURS</h3>
                            <p>Mon - Fri: 08:00 - 22:00</p>
                        </div>
                    </div>
                </div>



                {/* contact form */}
                <div className="flex justify-center text-center mt-20">
                    <SectionsTitle
                        subHeading="Send Us a Message"
                        heading="CONTACT FORM"
                    ></SectionsTitle>
                </div>


                <div className="mb-28">
                    <form className="bg-base-200 p-20">
                        <div className="flex flex-col md:flex-row gap-10">
                            <div className="form-control  w-full">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full" required />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter Your Email" className="input input-bordered w-full" required />
                            </div>
                        </div>


                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="number" placeholder="Enter your Phone Number" className="input input-bordered" required />
                            </div>
                        </div>

                        <div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Message</a>
                            </label>
                            <textarea placeholder="Write your message here" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#835D23] text-white font-bold">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;