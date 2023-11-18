import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import bg1 from '../../assets/assets/others/authentication.png';
import image from '../../assets/assets/others/authentication2.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";



const Login = () => {
    const { signIn, googleSignUp } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const [loginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [disable, setDisable] = useState(true);

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);

                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
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


    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;

        if (validateCaptcha(user_captcha_value) == true) {
            setDisable(false);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Captcha Matched Successfully',
                showConfirmButton: false,
                timer: 1500
            });
        }

        else {
            setDisable(true);
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Captcha Does Not Match',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }


    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>


            <div style={{ backgroundImage: `url(${bg1})` }} className="min-h-screen">
                <div className="flex justify-center container mx-auto px-5 py-10 pt-32">
                    <div className="shadow-2xl rounded-xl">
                        <h2 className="text-3xl font-bold text-center pt-10 pb-5"><span className="text-[#D1A054]">Login</span> <span className="">your account</span></h2>

                        <div className="flex flex-col lg:flex-row gap-10">
                            <div className="flex items-center p-14 flex-1">
                                <img src={image} alt="" />
                            </div>


                            <div className="flex justify-center flex-1">
                                <div className="w-full p-8">
                                    <form onSubmit={handleLogin} className="px-4 md:px-14">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
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


                                        <div className="form-control mt-4">
                                            <label className="label">
                                                <span className="label-text">
                                                    <LoadCanvasTemplate />
                                                </span>
                                            </label>
                                            <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type The Text Above" className="input input-bordered" required />
                                        </div>


                                        <div className="form-control mt-6">
                                            <button disabled={disable} className="btn bg-[#D1A054] border-[#D1A054] hover:bg-white hover:text-[#D1A054] text-white font-bold">Login</button>
                                        </div>

                                        <div>
                                            <button onClick={handleGoogleSignUp} className="btn bg-transparent border-[#D1A054] mt-5 mb-4 w-full">
                                                <FcGoogle className='text-xs md:text-xl'></FcGoogle>
                                                <span className="text-xs md:text-md">Continue with Google</span>
                                            </button>
                                        </div>
                                    </form>


                                    <div className="flex justify-center mb-4">
                                        <h2 className="text-xs md:text-lg mt-6 md:mt-8 mb-6">Do not have an account? <Link to='/signup' className="text-[#D1A054] underline font-bold">SignUp</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;