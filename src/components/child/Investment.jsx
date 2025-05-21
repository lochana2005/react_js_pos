const Investment = () => {
  return (
    <div className='card radius-16 mt-24'>
      <div className='card-header'>
        <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
          <h6 className='mb-2 fw-bold text-lg mb-0'>Investment</h6>
          <select className='form-select form-select-sm w-auto bg-base border text-secondary-light'>
            <option>Today</option>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>
      </div>
      <div className='card-body py-20'>
        <p className='text-center text-secondary-light d-flex align-items-center gap-8 justify-content-center'>
          Total Investment:{" "}
          <span className='fw-semibold text-primary-light'>$500</span>{" "}
        </p>
        <div className='mt-40 mb-24 text-center pe-110 position-relative max-w-288-px mx-auto'>
          <div className='w-170-px h-170-px rounded-circle z-1 position-relative d-inline-flex justify-content-center align-items-center border border-white border-width-2-px'>
            <img
              src='assets/images/home-eleven/bg/radial-bg1.png'
              alt='WowDash React Vite'
              className='position-absolute top-0 start-0 z-n1 w-100 h-100 object-fit-cover'
            />
            <h5 className='text-white'> 60% </h5>
          </div>
          <div className='w-144-px h-144-px rounded-circle z-1 position-relative d-inline-flex justify-content-center align-items-center border border-white border-width-3-px position-absolute top-0 end-0 mt--36'>
            <img
              src='assets/images/home-eleven/bg/radial-bg2.png'
              alt='WowDash React Vite'
              className='position-absolute top-0 start-0 z-n1 w-100 h-100 object-fit-cover'
            />
            <h5 className='text-white'> 30% </h5>
          </div>
          <div className='w-110-px h-110-px rounded-circle z-1 position-relative d-inline-flex justify-content-center align-items-center border border-white border-width-3-px position-absolute bottom-0 start-50 translate-middle-x ms-48'>
            <img
              src='assets/images/home-eleven/bg/radial-bg3.png'
              alt='WowDash React Vite'
              className='position-absolute top-0 start-0 z-n1 w-100 h-100 object-fit-cover'
            />
            <h5 className='text-white'> 10% </h5>
          </div>
        </div>
        <div className='d-flex align-items-center flex-wrap gap-24 justify-content-between'>
          <div className='d-flex flex-column align-items-start'>
            <div className='d-flex align-items-center gap-2'>
              <span className='w-12-px h-12-px rounded-pill bg-primary-600' />
              <span className='text-secondary-light text-sm fw-normal'>
                Net Income
              </span>
            </div>
            <h6 className='text-primary-light fw-semibold mb-0 mt-4 text-lg'>
              $50,000
            </h6>
          </div>
          <div className='d-flex flex-column align-items-start'>
            <div className='d-flex align-items-center gap-2'>
              <span className='w-12-px h-12-px rounded-pill bg-purple' />
              <span className='text-secondary-light text-sm fw-normal'>
                Real State
              </span>
            </div>
            <h6 className='text-primary-light fw-semibold mb-0 mt-4 text-lg'>
              $150
            </h6>
          </div>
          <div className='d-flex flex-column align-items-start'>
            <div className='d-flex align-items-center gap-2'>
              <span className='w-12-px h-12-px rounded-pill bg-success-600' />
              <span className='text-secondary-light text-sm fw-normal'>
                Business
              </span>
            </div>
            <h6 className='text-primary-light fw-semibold mb-0 mt-4 text-lg'>
              $100
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
