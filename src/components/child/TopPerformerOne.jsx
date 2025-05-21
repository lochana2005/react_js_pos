import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";

const TopPerformerOne = () => {
  return (
    <div className='col-xxl-3 col-xl-12'>
      <div className='card h-100'>
        <div className='card-body'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>Top Performer</h6>
            <Link
              to='#'
              className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
            >
              View All
              <Icon icon='solar:alt-arrow-right-linear' className='icon' />
            </Link>
          </div>
          <div className='mt-32'>
            <div className='d-flex align-items-center justify-content-between gap-3 mb-24'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/users/user1.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-medium'>Dianne Russell</h6>
                  <span className='text-sm text-secondary-light fw-medium'>
                    Agent ID: 36254
                  </span>
                </div>
              </div>
              <span className='text-primary-light text-md fw-medium'>$20</span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3 mb-24'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/users/user2.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-medium'>Wade Warren</h6>
                  <span className='text-sm text-secondary-light fw-medium'>
                    Agent ID: 36254
                  </span>
                </div>
              </div>
              <span className='text-primary-light text-md fw-medium'>$20</span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3 mb-24'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/users/user3.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-medium'>Albert Flores</h6>
                  <span className='text-sm text-secondary-light fw-medium'>
                    Agent ID: 36254
                  </span>
                </div>
              </div>
              <span className='text-primary-light text-md fw-medium'>$30</span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3 mb-24'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/users/user4.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-medium'>Bessie Cooper</h6>
                  <span className='text-sm text-secondary-light fw-medium'>
                    Agent ID: 36254
                  </span>
                </div>
              </div>
              <span className='text-primary-light text-md fw-medium'>$40</span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3 mb-24'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/users/user5.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-medium'>Arlene McCoy</h6>
                  <span className='text-sm text-secondary-light fw-medium'>
                    Agent ID: 36254
                  </span>
                </div>
              </div>
              <span className='text-primary-light text-md fw-medium'>$10</span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/users/user1.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-medium'>Arlene McCoy</h6>
                  <span className='text-sm text-secondary-light fw-medium'>
                    Agent ID: 36254
                  </span>
                </div>
              </div>
              <span className='text-primary-light text-md fw-medium'>$10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPerformerOne;
