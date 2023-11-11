import feature from '../../../assets/assets/home/chef-service.jpg';


const Feature = () => {
    return (
        <div className='container mx-auto px-5 my-28'>
            <div className="hero py-44 px-32" style={{ backgroundImage: `url(${feature})` }}>
                <div className="hero-overlay bg-opacity-100 bg-white"></div>
                <div className="hero-content text-center">
                    <div className='p-16'>
                        <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                        <div className='flex justify-center'>
                            <p className="mb-5 w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                        </div>
                        <button className="btn btn-warning text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;