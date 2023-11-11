import PropTypes from 'prop-types';

const SectionsTitle = ({ heading, subHeading }) => {
    return (
        <div>
            <p className='text-[#D99904] font-bold'>---{subHeading}---</p>
            <hr className='my-3 ' />
            <h2 className='text-4xl font-bold'>{heading}</h2>
            <hr className='mt-3 mb-10' />
        </div>
    );
};

SectionsTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
};

export default SectionsTitle;