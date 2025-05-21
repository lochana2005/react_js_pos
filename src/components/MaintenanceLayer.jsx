import { Link } from "react-router-dom";

const MaintenanceLayer = () => {
  return (
    <div className='custom-bg'>
      <div className='container container--xl'>
        <div className='d-flex align-items-center justify-content-between py-24'>
          <Link to='/index' className=''>
            <img src='assets/images/logo.png' alt='WowDash React Vite' />
          </Link>
          <Link to='/index' className='btn btn-outline-primary-600 text-sm'>
            {" "}
            Go To Home{" "}
          </Link>
        </div>
        <div className='py-res-120'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <h3 className='mb-32 max-w-1000-px'>
                Our site is under maintenance. Please keep patience.
              </h3>
              <p className='text-neutral-500 max-w-700-px text-lg'>
                We have been spending extended periods to send off our new site.
                Join our mailing list or follow us on Facebook for get most
                recent update.
              </p>
              <div className='mt-56 max-w-500-px text-start'>
                <span className='fw-semibold text-neutral-600 text-lg text-hover-neutral-600'>
                  {" "}
                  Do you want to get update? Please subscribe now
                </span>
                <form
                  action='#'
                  className='mt-16 d-flex gap-16 flex-sm-row flex-column'
                >
                  <input
                    type='email'
                    className='form-control text-start py-24 flex-grow-1'
                    placeholder='wowdash@gmail.com'
                    required=''
                  />
                  <button
                    type='submit'
                    className='btn btn-primary-600 px-24 flex-shrink-0 d-flex align-items-center justify-content-center gap-8'
                  >
                    <i className='ri-notification-2-line' /> Knock Us
                  </button>
                </form>
              </div>
            </div>
            <div className='col-lg-6 d-lg-block d-none'>
              <img
                src='assets/images/coming-soon/maintenance.png'
                alt='WowDash React Vite'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceLayer;
