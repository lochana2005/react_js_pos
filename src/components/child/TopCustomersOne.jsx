import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";

const TopCustomersOne = () => {
  return (
    <div className='col-xxl-4 col-lg-6'>
      <div className='card h-100'>
        <div className='card-body'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>Top Customers</h6>
            <Link
              to='#'
              className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
            >
              View All
              <Icon icon='solar:alt-arrow-right-linear' className='icon' />
            </Link>
          </div>
          <div className='mt-32'>
            <div className='d-flex align-items-center justify-content-between gap-3 mb-32'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src='assets/images/users/user6.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px radius-8 flex-shrink-0'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-normal'>Dianne Russell</h6>
                  <span className='text-sm text-secondary-light fw-normal'>
                    017******58
                  </span>
                </div>
              </div>
              <span className='text-primary-light text-md fw-medium'>
                Orders: 30
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3 mb-32'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src='assets/images/users/user1.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px radius-8 flex-shrink-0'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-normal'>Wade Warren</h6>
                  <span className='text-sm text-secondary-light fw-normal'>
                    017******58
                  </span>
                </div>
              </div>
              <span className='text-primary-light text-md fw-medium'>
                Orders: 30
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3 mb-32'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src='assets/images/users/user2.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px radius-8 flex-shrink-0'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-normal'>Albert Flores</h6>
                  <span className='text-sm text-secondary-light fw-normal'>
                    017******58
                  </span>
                </div>
              </div>
              <span className='text-primary-light text-md fw-medium'>
                Orders: 35
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3 mb-32'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src='assets/images/users/user3.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px radius-8 flex-shrink-0'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-normal'>Bessie Cooper</h6>
                  <span className='text-sm text-secondary-light fw-normal'>
                    017******58
                  </span>
                </div>
              </div>
              <span className='text-primary-light text-md fw-medium'>
                Orders: 20
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3 mb-32'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src='assets/images/users/user4.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px radius-8 flex-shrink-0'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-normal'>Arlene McCoy</h6>
                  <span className='text-sm text-secondary-light fw-normal'>
                    017******58
                  </span>
                </div>
              </div>
              <span className='text-primary-light text-md fw-medium'>
                Orders: 25
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src='assets/images/users/user6.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px radius-8 flex-shrink-0'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-normal'>John Doe</h6>
                  <span className='text-sm text-secondary-light fw-normal'>
                    017******58
                  </span>
                </div>
              </div>
              <span className='text-primary-light text-md fw-medium'>
                Orders: 32
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCustomersOne;
