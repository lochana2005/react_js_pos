import { Link } from "react-router-dom";

const UsersChart = () => {
  return (
    <div className='col-xxl-4 col-md-6'>
      <div className='card'>
        <div className='card-header border-bottom'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>Users</h6>
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
        <div className='card-body p-20'>
          <div className='d-flex flex-column gap-24'>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/user-grid/user-grid-img1.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Psychiatry</h6>
                  <span className='text-sm text-secondary-light fw-normal'>
                    Super Admin
                  </span>
                </div>
              </div>
              <span className='text-warning-main fw-medium text-md'>
                Pending
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/user-grid/user-grid-img2.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Orthopedic</h6>
                  <span className='text-sm text-secondary-light fw-normal'>
                    Admin
                  </span>
                </div>
              </div>
              <span className='text-success-main fw-medium text-md'>
                Active
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/user-grid/user-grid-img3.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Cardiology</h6>
                  <span className='text-sm text-secondary-light fw-normal'>
                    Manager
                  </span>
                </div>
              </div>
              <span className='text-success-main fw-medium text-md'>
                Active
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/user-grid/user-grid-img4.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Pediatrics</h6>
                  <span className='text-sm text-secondary-light fw-normal'>
                    Admin
                  </span>
                </div>
              </div>
              <span className='text-success-main fw-medium text-md'>
                Active
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/user-grid/user-grid-img1.png'
                  alt='WowDash React Vite'
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Neurology </h6>
                  <span className='text-sm text-secondary-light fw-normal'>
                    Manager
                  </span>
                </div>
              </div>
              <span className='text-success-main fw-medium text-md'>
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersChart;
