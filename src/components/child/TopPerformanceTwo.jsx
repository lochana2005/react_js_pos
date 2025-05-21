import { Link } from "react-router-dom";

const TopPerformanceTwo = () => {
  return (
    <div className='col-xxl-4'>
      <div className='card'>
        <div className='card-header border-bottom'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>Doctors List</h6>
            <Link
              to='#'
              className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
            >
              View All
              <iconify-icon
                icon='solar:alt-arrow-right-linear'
                className='icon'
              />
            </Link>
          </div>
        </div>
        <div className='card-body'>
          <div className='d-flex flex-column gap-24'>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/home-eight/doctor-img1.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Dr. Davis</h6>
                  <span className='text-sm text-secondary-light fw-medium'>
                    Cardiology
                  </span>
                </div>
              </div>
              <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                Available
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/home-eight/doctor-img2.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Dr. Riead</h6>
                  <span className='text-sm text-secondary-light fw-medium'>
                    Orthopedics
                  </span>
                </div>
              </div>
              <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                Available
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/home-eight/doctor-img3.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Albert Flores</h6>
                  <span className='text-sm text-secondary-light fw-medium'>
                    Ophthalmology
                  </span>
                </div>
              </div>
              <span className='bg-danger-focus text-danger-main px-10 py-4 radius-8 fw-medium text-sm'>
                Not Available
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/home-eight/doctor-img4.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Dr. Smith</h6>
                  <span className='text-sm text-secondary-light fw-medium'>
                    Cardiology
                  </span>
                </div>
              </div>
              <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                Available
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/home-eight/doctor-img6.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Dr. Johnson</h6>
                  <span className='text-sm text-secondary-light fw-medium'>
                    Cardiology
                  </span>
                </div>
              </div>
              <span className='bg-danger-focus text-danger-main px-10 py-4 radius-8 fw-medium text-sm'>
                Not Available
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/home-eight/doctor-img5.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Dr. Martinez</h6>
                  <span className='text-sm text-secondary-light fw-medium'>
                    Cardiology
                  </span>
                </div>
              </div>
              <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPerformanceTwo;
