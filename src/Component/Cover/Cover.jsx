import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';


const Cover = ({ img, title, description }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className="hero py-44 px-52">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center">
                        <div className='p-16 text-white'>
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">{description}</p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

Cover.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
};

export default Cover;