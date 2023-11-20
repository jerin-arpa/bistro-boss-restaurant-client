import errorPage from '../../assets/assets/errorPage/404.gif';

const ErrorPage = () => {
    return (
        <div className='flex justify-center'>
            <img className='min-h-screen' src={errorPage} alt="" />
        </div>
    );
};

export default ErrorPage;