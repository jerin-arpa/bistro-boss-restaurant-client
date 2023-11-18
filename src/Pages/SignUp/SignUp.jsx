import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import bg1 from '../../assets/assets/others/authentication.png';
import image from '../../assets/assets/others/authentication2.png';
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";



const SignUp = () => {
    const { createUser, logOut, googleSignUp, updateUserprofile } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    console.log('Location in the login page', location);
    const [loginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserprofile(name, photo)
                    .then(() => {
                        console.log('User Profile Info Updated')
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Account Created Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        logOut()
                            .then(result => {
                                console.log(result.user)
                            })
                            .catch(() => { })
                        navigate('/login');
                    })
                    .catch(error => console.log(error))
            })
            .catch(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Email is already used, try with another one or login',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }


    const handleGoogleSignUp = () => {
        googleSignUp()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            })

    }


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>

            <div style={{ backgroundImage: `url(${bg1})` }} className="min-h-screen">
                <div className="flex justify-center container mx-auto px-5 py-10 pt-32">
                    <div className="shadow-2xl rounded-xl">
                        <h2 className="text-3xl font-bold text-center pt-10 pb-5"><span className="text-[#D1A054]">SignUp</span> <span className="">your account</span></h2>

                        <div className="flex flex-col lg:flex-row gap-10">
                            <div className="flex items-center p-14 flex-1">
                                <img src={image} alt="" />
                            </div>


                            <div className="flex justify-center flex-1">
                                <div className="w-full p-8">
                                    <form onSubmit={handleLogin} className="px-4 md:px-14">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" name="name" placeholder="Enter your Name" className="input input-bordered" required />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Photo</span>
                                            </label>
                                            <input type="text" name="photo" placeholder="Enter your photo URL" className="input input-bordered" required />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type={showPassword ? "text" : "password"}
                                                name="password" placeholder="Enter your Password" className="input input-bordered w-full" required />
                                            <div className="relative flex justify-end">
                                                <span onClick={() => setShowPassword(!showPassword)} className="absolute bottom-4 right-4">
                                                    {
                                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        <div>
                                            {
                                                loginError && <p className="text-red-500 text-xl text-center">{loginError}</p>
                                            }
                                        </div>


                                        <div className="form-control mt-6">
                                            <button className="btn bg-[#D1A054] border-[#D1A054] hover:bg-white hover:text-[#D1A054] text-white font-bold">Sign Up</button>
                                        </div>

                                        <div>
                                            <button onClick={handleGoogleSignUp} className="btn bg-transparent border-[#D1A054] mt-5 mb-4 w-full">
                                                <FcGoogle className='text-xs md:text-xl'></FcGoogle>
                                                <span className="text-xs md:text-md">Continue with Google</span>
                                            </button>
                                        </div>
                                    </form>


                                    <div className="flex justify-center mb-4">
                                        <h2 className="text-xs md:text-lg mt-6 md:mt-8 mb-6">Already have an account? <Link to='/login' className="text-[#D1A054] underline font-bold">Login</Link></h2>
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

export default SignUp;