import { Link } from "react-router-dom";

const ErrorLayer = () => {
  return (
    <div className='card basic-data-table'>
      <div className='card-body py-80 px-32 text-center'>
        <img
          src='assets/images/error-img.png'
          alt='WowDash React Vite'
          className='mb-24'
        />
        <h6 className='mb-16'>Page not Found</h6>
        <p className='text-secondary-light'>
          Sorry, the page you are looking for doesn’t exist{" "}
        </p>
        <Link to='/index' className='btn btn-primary-600 radius-8 px-20 py-11'>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorLayer;
