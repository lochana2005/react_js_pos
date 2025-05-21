const ProgressWithRightLabel = () => {
  return (
    <div className='col-sm-6'>
      <div className='card p-0 overflow-hidden position-relative radius-12'>
        <div className='card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0'>
          <h6 className='text-lg mb-0'>Progress with right label</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-column gap-3'>
            <div className='d-flex align-items-center gap-2 w-100'>
              <div className='w-100 ms-auto'>
                <div
                  className='progress progress-sm rounded-pill'
                  role='progressbar'
                  aria-label='Success example'
                  aria-valuenow={10}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className='progress-bar bg-primary-600 rounded-pill'
                    style={{ width: "10%" }}
                  />
                </div>
              </div>
              <span className='text-secondary-light font-xs fw-semibold line-height-1'>
                10%
              </span>
            </div>
            <div className='d-flex align-items-center gap-2 w-100'>
              <div className='w-100 ms-auto'>
                <div
                  className='progress progress-sm rounded-pill'
                  role='progressbar'
                  aria-label='Success example'
                  aria-valuenow={30}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className='progress-bar bg-primary-600 rounded-pill'
                    style={{ width: "30%" }}
                  />
                </div>
              </div>
              <span className='text-secondary-light font-xs fw-semibold line-height-1'>
                30%
              </span>
            </div>
            <div className='d-flex align-items-center gap-2 w-100'>
              <div className='w-100 ms-auto'>
                <div
                  className='progress progress-sm rounded-pill'
                  role='progressbar'
                  aria-label='Success example'
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className='progress-bar bg-primary-600 rounded-pill'
                    style={{ width: "50%" }}
                  />
                </div>
              </div>
              <span className='text-secondary-light font-xs fw-semibold line-height-1'>
                50%
              </span>
            </div>
            <div className='d-flex align-items-center gap-2 w-100'>
              <div className='w-100 ms-auto'>
                <div
                  className='progress progress-sm rounded-pill'
                  role='progressbar'
                  aria-label='Success example'
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className='progress-bar bg-primary-600 rounded-pill'
                    style={{ width: "70%" }}
                  />
                </div>
              </div>
              <span className='text-secondary-light font-xs fw-semibold line-height-1'>
                70%
              </span>
            </div>
            <div className='d-flex align-items-center gap-2 w-100'>
              <div className='w-100 ms-auto'>
                <div
                  className='progress progress-sm rounded-pill'
                  role='progressbar'
                  aria-label='Success example'
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className='progress-bar bg-primary-600 rounded-pill'
                    style={{ width: "90%" }}
                  />
                </div>
              </div>
              <span className='text-secondary-light font-xs fw-semibold line-height-1'>
                90%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressWithRightLabel;
