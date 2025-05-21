const AvatarWithContent = () => {
  return (
    <div className='col-xxl-6 col-md-6'>
      <div className='card p-0 overflow-hidden position-relative radius-12'>
        <div className='card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0'>
          <h6 className='text-lg mb-0'>Avatar With content</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-3'>
            <span className='w-24-px h-24-px rounded-circle object-fit-cover d-flex justify-content-center align-items-center fw-semibold text-xxs bg-primary-50 text-primary-600'>
              24
            </span>
            <span className='w-32-px h-32-px rounded-circle object-fit-cover d-flex justify-content-center align-items-center fw-semibold text-xs bg-lilac-100 text-lilac-600'>
              32
            </span>
            <span className='w-40-px h-40-px rounded-circle object-fit-cover d-flex justify-content-center align-items-center fw-semibold text-sm bg-success-100 text-success-600'>
              40
            </span>
            <span className='w-44-px h-44-px rounded-circle object-fit-cover d-flex justify-content-center align-items-center fw-semibold text-md bg-info-100 text-info-600'>
              44
            </span>
            <span className='w-56-px h-56-px rounded-circle object-fit-cover d-flex justify-content-center align-items-center fw-semibold text-lg bg-warning-100 text-warning-600'>
              56
            </span>
            <span className='w-64-px h-64-px rounded-circle object-fit-cover d-flex justify-content-center align-items-center fw-semibold text-xl bg-danger-100 text-danger-600'>
              64
            </span>
          </div>
          <div className='d-flex align-items-center flex-wrap gap-3 mt-24'>
            <span className='w-24-px h-24-px radius-4 object-fit-cover d-flex justify-content-center align-items-center fw-semibold text-xxs bg-primary-50 text-primary-600'>
              24
            </span>
            <span className='w-32-px h-32-px radius-8 object-fit-cover d-flex justify-content-center align-items-center fw-semibold text-xs bg-lilac-100 text-lilac-600'>
              32
            </span>
            <span className='w-40-px h-40-px radius-8 object-fit-cover d-flex justify-content-center align-items-center fw-semibold text-sm bg-success-100 text-success-600'>
              40
            </span>
            <span className='w-44-px h-44-px radius-8 object-fit-cover d-flex justify-content-center align-items-center fw-semibold text-md bg-info-100 text-info-600'>
              44
            </span>
            <span className='w-56-px h-56-px radius-8 object-fit-cover d-flex justify-content-center align-items-center fw-semibold text-lg bg-warning-100 text-warning-600'>
              56
            </span>
            <span className='w-64-px h-64-px radius-8 object-fit-cover d-flex justify-content-center align-items-center fw-semibold text-xl bg-danger-100 text-danger-600'>
              64
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarWithContent;
