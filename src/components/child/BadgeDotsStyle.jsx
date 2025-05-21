const BadgeDotsStyle = () => {
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Badge Dots Style </h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex flex-wrap align-items-center gap-4'>
            <div className='d-flex align-items-center gap-2'>
              <span className='w-8-px h-8-px bg-primary-600 rounded-circle' />
              <span className='text-primary-600 fw-medium'>Primary</span>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <span className='w-8-px h-8-px bg-lilac-600 rounded-circle' />
              <span className='text-lilac-600 fw-medium'>Secondary</span>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <span className='w-8-px h-8-px bg-success-600 rounded-circle' />
              <span className='text-success-600 fw-medium'>Success</span>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <span className='w-8-px h-8-px bg-info-600 rounded-circle' />
              <span className='text-info-600 fw-medium'>Info</span>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <span className='w-8-px h-8-px bg-warning-600 rounded-circle' />
              <span className='text-warning-600 fw-medium'>Warning</span>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <span className='w-8-px h-8-px bg-danger-600 rounded-circle' />
              <span className='text-danger-600 fw-medium'>Danger</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeDotsStyle;
