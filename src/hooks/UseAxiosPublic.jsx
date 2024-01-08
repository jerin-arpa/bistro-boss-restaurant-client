import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-restaurent-38.vercel.app',
})

const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;