const SoftBadges = () => {
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Soft Badges</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex flex-wrap align-items-center gap-3'>
            <span className='badge text-sm fw-semibold text-primary-600 bg-primary-100 px-20 py-9 radius-4 text-white'>
              Primary
            </span>
            <span className='badge text-sm fw-semibold text-lilac-600 bg-lilac-100 px-20 py-9 radius-4 text-white'>
              Secondary
            </span>
            <span className='badge text-sm fw-semibold text-success-600 bg-success-100 px-20 py-9 radius-4 text-white'>
              Success
            </span>
            <span className='badge text-sm fw-semibold text-info-600 bg-info-100 px-20 py-9 radius-4 text-white'>
              Info
            </span>
            <span className='badge text-sm fw-semibold text-warning-600 bg-warning-100 px-20 py-9 radius-4 text-white'>
              Warning
            </span>
            <span className='badge text-sm fw-semibold text-danger-600 bg-danger-100 px-20 py-9 radius-4 text-white'>
              Danger
            </span>
            <span className='badge text-sm fw-semibold text-neutral-800 bg-neutral-300 px-20 py-9 radius-4 text-white'>
              Dark
            </span>
            <span className='badge text-sm fw-semibold bg-transparent px-20 py-9 radius-4 text-primary-600'>
              Link
            </span>
            <span className='badge text-sm fw-semibold bg-light-100 px-20 py-9 radius-4 text-secondary-light'>
              Light
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftBadges;
