const ImagesWithContent = () => {
  return (
    <div className='col-xxl-6 col-md-6'>
      <div className='card p-0 overflow-hidden position-relative radius-12 h-100'>
        <div className='card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0'>
          <h6 className='text-lg mb-0'>Images With content</h6>
        </div>
        <div className='card-body p-24'>
          <div className='row gy-3'>
            <div className='col-sm-6'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src='assets/images/avatar/avatar1.png'
                  alt='WowDash React Vite'
                  className='w-32-px h-32-px rounded-circle object-fit-cover flex-shrink-0'
                />
                <div className='flex-grow-1 d-inline-flex flex-column'>
                  <h6 className='text-sm mb-0'>Will mart</h6>
                  <span className='text-xs text-secondary-light'>
                    random@gmail.com
                  </span>
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src='assets/images/avatar/avatar1.png'
                  alt='WowDash React Vite'
                  className='w-32-px h-32-px rounded-circle object-fit-cover flex-shrink-0'
                />
                <div className='flex-grow-1 d-inline-flex flex-column'>
                  <h6 className='text-sm mb-0'>Will mart</h6>
                  <span className='text-xs text-secondary-light'>
                    random@gmail.com
                  </span>
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src='assets/images/avatar/avatar2.png'
                  alt='WowDash React Vite'
                  className='w-32-px h-32-px rounded-circle object-fit-cover flex-shrink-0'
                />
                <div className='flex-grow-1 d-inline-flex flex-column'>
                  <h6 className='text-sm mb-0'>Sangeeta</h6>
                  <span className='text-xs text-secondary-light'>
                    random@gmail.com
                  </span>
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src='assets/images/avatar/avatar2.png'
                  alt='WowDash React Vite'
                  className='w-32-px h-32-px rounded-circle object-fit-cover flex-shrink-0'
                />
                <div className='flex-grow-1 d-inline-flex flex-column'>
                  <h6 className='text-sm mb-0'>Sangeeta</h6>
                  <span className='text-xs text-secondary-light'>
                    random@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesWithContent;
