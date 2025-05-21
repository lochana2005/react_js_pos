const StatusIndicator = () => {
  return (
    <div className='col-xxl-6 col-md-6'>
      <div className='card p-0 overflow-hidden position-relative radius-12 h-100'>
        <div className='card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0'>
          <h6 className='text-lg mb-0'>Status Indicator</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-3'>
            <div className='position-relative'>
              <img
                src='assets/images/avatar/status-avatar.png'
                className='w-24-px h-24-px rounded-circle object-fit-cover'
                alt='Avatar'
              />
              <span className='w-8-px h-8-px bg-primary-600 border br-white rounded-circle position-absolute end-0 bottom-3px' />
            </div>
            <div className='position-relative'>
              <img
                src='assets/images/avatar/status-avatar.png'
                className='w-32-px h-32-px rounded-circle object-fit-cover'
                alt='Avatar'
              />
              <span className='w-8-px h-8-px bg-primary-600 border br-white rounded-circle position-absolute end-0 bottom-3px' />
            </div>
            <div className='position-relative'>
              <img
                src='assets/images/avatar/status-avatar.png'
                className='w-40-px h-40-px rounded-circle object-fit-cover'
                alt='Avatar'
              />
              <span className='w-8-px h-8-px bg-primary-600 border br-white rounded-circle position-absolute end-0 bottom-3px' />
            </div>
            <div className='position-relative'>
              <img
                src='assets/images/avatar/status-avatar.png'
                className='w-44-px h-44-px rounded-circle object-fit-cover'
                alt='Avatar'
              />
              <span className='w-8-px h-8-px bg-primary-600 border br-white rounded-circle position-absolute end-0 bottom-3px' />
            </div>
          </div>
          <div className='d-flex align-items-center flex-wrap gap-3 mt-24'>
            <div className='position-relative'>
              <span className='w-24-px h-24-px rounded-circle object-fit-cover d-flex justify-content-center align-items-center fw-semibold text-xxs bg-primary-50 text-primary-600'>
                24
              </span>
              <span className='w-8-px h-8-px bg-primary-600 border br-white rounded-circle position-absolute end-0 bottom-3px' />
            </div>
            <div className='position-relative'>
              <span className='w-32-px h-32-px rounded-circle object-fit-cover d-flex justify-content-center align-items-center fw-semibold text-xxs bg-lilac-100 text-lilac-600'>
                24
              </span>
              <span className='w-8-px h-8-px bg-lilac-600 border br-white rounded-circle position-absolute end-0 bottom-3px' />
            </div>
            <div className='position-relative'>
              <span className='w-40-px h-40-px rounded-circle object-fit-cover d-flex justify-content-center align-items-center fw-semibold text-xxs bg-success-100 text-success-600'>
                24
              </span>
              <span className='w-8-px h-8-px bg-success-600 border br-white rounded-circle position-absolute end-0 bottom-3px' />
            </div>
            <div className='position-relative'>
              <span className='w-44-px h-44-px rounded-circle object-fit-cover d-flex justify-content-center align-items-center fw-semibold text-xxs bg-info-100 text-info-600'>
                24
              </span>
              <span className='w-8-px h-8-px bg-info-600 border br-white rounded-circle position-absolute end-0 bottom-3px' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusIndicator;
