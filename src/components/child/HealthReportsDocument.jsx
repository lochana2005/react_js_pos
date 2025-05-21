import { Link } from "react-router-dom";

const HealthReportsDocument = () => {
  return (
    <div className='col-xxl-12 col-xl-6'>
      <div className='card'>
        <div className='card-header'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>
              Health Reports Document
            </h6>
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
              <div className='d-flex align-items-center gap-12'>
                <div className='flex-shrink-0'>
                  <img
                    src='assets/images/home-eight/icon-pdf.png'
                    alt='WowDash React Vite'
                    className=''
                  />
                </div>
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-normal'>Checkup Result.pdf</h6>
                  <span className='text-xs text-secondary-light fw-normal'>
                    2.5mb
                  </span>
                </div>
              </div>
              <div className='flex-align gap-12'>
                <button
                  type='button'
                  className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-danger-100 text-danger-600 bg-hover-danger-600 text-hover-white text-md rounded-circle'
                >
                  <i className='ri-delete-bin-5-line' />
                </button>
                <button
                  type='button'
                  className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-success-100 text-success-600 bg-hover-success-600 text-hover-white text-md rounded-circle'
                >
                  <i className='ri-download-2-fill' />
                </button>
              </div>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center gap-12'>
                <div className='flex-shrink-0'>
                  <img
                    src='assets/images/home-eight/icon-text.png'
                    alt='WowDash React Vite'
                    className=''
                  />
                </div>
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-normal'>Checkup Result.doc</h6>
                  <span className='text-xs text-secondary-light fw-normal'>
                    2mb
                  </span>
                </div>
              </div>
              <div className='flex-align gap-12'>
                <button
                  type='button'
                  className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-danger-100 text-danger-600 bg-hover-danger-600 text-hover-white text-md rounded-circle'
                >
                  <i className='ri-delete-bin-5-line' />
                </button>
                <button
                  type='button'
                  className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-success-100 text-success-600 bg-hover-success-600 text-hover-white text-md rounded-circle'
                >
                  <i className='ri-download-2-fill' />
                </button>
              </div>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center gap-12'>
                <div className='flex-shrink-0'>
                  <img
                    src='assets/images/home-eight/icon-pdf.png'
                    alt='WowDash React Vite'
                    className=''
                  />
                </div>
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-normal'>Prescription.pdf</h6>
                  <span className='text-xs text-secondary-light fw-normal'>
                    3mb
                  </span>
                </div>
              </div>
              <div className='flex-align gap-12'>
                <button
                  type='button'
                  className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-danger-100 text-danger-600 bg-hover-danger-600 text-hover-white text-md rounded-circle'
                >
                  <i className='ri-delete-bin-5-line' />
                </button>
                <button
                  type='button'
                  className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-success-100 text-success-600 bg-hover-success-600 text-hover-white text-md rounded-circle'
                >
                  <i className='ri-download-2-fill' />
                </button>
              </div>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center gap-12'>
                <div className='flex-shrink-0'>
                  <img
                    src='assets/images/home-eight/icon-text.png'
                    alt='WowDash React Vite'
                    className=''
                  />
                </div>
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-normal'>Xray Result.doc</h6>
                  <span className='text-xs text-secondary-light fw-normal'>
                    3mb
                  </span>
                </div>
              </div>
              <div className='flex-align gap-12'>
                <button
                  type='button'
                  className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-danger-100 text-danger-600 bg-hover-danger-600 text-hover-white text-md rounded-circle'
                >
                  <i className='ri-delete-bin-5-line' />
                </button>
                <button
                  type='button'
                  className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-success-100 text-success-600 bg-hover-success-600 text-hover-white text-md rounded-circle'
                >
                  <i className='ri-download-2-fill' />
                </button>
              </div>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center gap-12'>
                <div className='flex-shrink-0'>
                  <img
                    src='assets/images/home-eight/icon-pdf.png'
                    alt='WowDash React Vite'
                    className=''
                  />
                </div>
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-normal'>
                    Glucose Level Report.pdf
                  </h6>
                  <span className='text-xs text-secondary-light fw-normal'>
                    3mb
                  </span>
                </div>
              </div>
              <div className='flex-align gap-12'>
                <button
                  type='button'
                  className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-danger-100 text-danger-600 bg-hover-danger-600 text-hover-white text-md rounded-circle'
                >
                  <i className='ri-delete-bin-5-line' />
                </button>
                <button
                  type='button'
                  className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-success-100 text-success-600 bg-hover-success-600 text-hover-white text-md rounded-circle'
                >
                  <i className='ri-download-2-fill' />
                </button>
              </div>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center gap-12'>
                <div className='flex-shrink-0'>
                  <img
                    src='assets/images/home-eight/icon-text.png'
                    alt='WowDash React Vite'
                    className=''
                  />
                </div>
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0 fw-normal'>Checkup Result.doc</h6>
                  <span className='text-xs text-secondary-light fw-normal'>
                    2mb
                  </span>
                </div>
              </div>
              <div className='flex-align gap-12'>
                <button
                  type='button'
                  className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-danger-100 text-danger-600 bg-hover-danger-600 text-hover-white text-md rounded-circle'
                >
                  <i className='ri-delete-bin-5-line' />
                </button>
                <button
                  type='button'
                  className='w-32-px h-32-px d-inline-flex justify-content-center align-items-center bg-success-100 text-success-600 bg-hover-success-600 text-hover-white text-md rounded-circle'
                >
                  <i className='ri-download-2-fill' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthReportsDocument;
