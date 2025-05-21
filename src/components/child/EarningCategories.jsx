import { Link } from "react-router-dom";

const EarningCategories = () => {
  return (
    <div className='col-md-6'>
      <div className='card radius-16 h-100'>
        <div className='card-header'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>Earning Categories</h6>
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
          <div className='d-flex flex-column gap-20'>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center w-100 gap-12'>
                <span className='w-40-px h-40-px rounded-circle d-flex justify-content-center align-items-center bg-primary-100'>
                  <img
                    src='assets/images/home-eleven/icons/earn-cat-icon1.svg'
                    alt='WowDash React Vite'
                    className=''
                  />
                </span>
                <div className='flex-grow-1'>
                  <h6 className='text-sm mb-0'>Digital Assets</h6>
                  <span className='text-xs text-secondary-light fw-medium'>
                    $50 / from $1000
                  </span>
                </div>
              </div>
              <div className='d-flex align-items-center gap-2 w-100'>
                <div className='w-100 max-w-66 ms-auto'>
                  <div
                    className='progress progress-sm rounded-pill'
                    role='progressbar'
                    aria-label='Success example'
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className='progress-bar bg-primary-600 rounded-pill'
                      style={{ width: "80%" }}
                    />
                  </div>
                </div>
                <span className='text-secondary-light font-xs fw-semibold'>
                  80%
                </span>
              </div>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center w-100 gap-12'>
                <span className='w-40-px h-40-px rounded-circle d-flex justify-content-center align-items-center bg-danger-100'>
                  <img
                    src='assets/images/home-eleven/icons/earn-cat-icon2.svg'
                    alt='WowDash React Vite'
                    className=''
                  />
                </span>
                <div className='flex-grow-1'>
                  <h6 className='text-sm mb-0'>Side Project</h6>
                  <span className='text-xs text-secondary-light fw-medium'>
                    $50 / from $1000
                  </span>
                </div>
              </div>
              <div className='d-flex align-items-center gap-2 w-100'>
                <div className='w-100 max-w-66 ms-auto'>
                  <div
                    className='progress progress-sm rounded-pill'
                    role='progressbar'
                    aria-label='Success example'
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className='progress-bar bg-orange rounded-pill'
                      style={{ width: "60%" }}
                    />
                  </div>
                </div>
                <span className='text-secondary-light font-xs fw-semibold'>
                  60%
                </span>
              </div>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center w-100 gap-12'>
                <span className='w-40-px h-40-px rounded-circle d-flex justify-content-center align-items-center bg-warning-200'>
                  <img
                    src='assets/images/home-eleven/icons/earn-cat-icon3.svg'
                    alt='WowDash React Vite'
                    className=''
                  />
                </span>
                <div className='flex-grow-1'>
                  <h6 className='text-sm mb-0'>Investment</h6>
                  <span className='text-xs text-secondary-light fw-medium'>
                    $50 / from $1000
                  </span>
                </div>
              </div>
              <div className='d-flex align-items-center gap-2 w-100'>
                <div className='w-100 max-w-66 ms-auto'>
                  <div
                    className='progress progress-sm rounded-pill'
                    role='progressbar'
                    aria-label='Success example'
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className='progress-bar bg-yellow rounded-pill'
                      style={{ width: "49%" }}
                    />
                  </div>
                </div>
                <span className='text-secondary-light font-xs fw-semibold'>
                  49%
                </span>
              </div>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center w-100 gap-12'>
                <span className='w-40-px h-40-px rounded-circle d-flex justify-content-center align-items-center bg-success-200'>
                  <img
                    src='assets/images/home-eleven/icons/earn-cat-icon4.svg'
                    alt='WowDash React Vite'
                    className=''
                  />
                </span>
                <div className='flex-grow-1'>
                  <h6 className='text-sm mb-0'>Working Hard</h6>
                  <span className='text-xs text-secondary-light fw-medium'>
                    $50 / from $1000
                  </span>
                </div>
              </div>
              <div className='d-flex align-items-center gap-2 w-100'>
                <div className='w-100 max-w-66 ms-auto'>
                  <div
                    className='progress progress-sm rounded-pill'
                    role='progressbar'
                    aria-label='Success example'
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className='progress-bar bg-success-main rounded-pill'
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <span className='text-secondary-light font-xs fw-semibold'>
                  100%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningCategories;
