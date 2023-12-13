import { loadStripe } from "@stripe/stripe-js";
import SectionsTitle from "../../../Component/SectionsTitle/SectionsTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);


const Payment = () => {
    return (
        <div>
            <div className="flex justify-center text-center">
                <SectionsTitle
                    subHeading="At a Glance"
                    heading="Payment"
                ></SectionsTitle>
            </div>


            <div className="mx-20 mt-10">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;