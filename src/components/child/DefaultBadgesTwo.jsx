const DefaultBadgesTwo = () => {
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Default Badges</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex flex-wrap align-items-center gap-3'>
            <span className='badge text-sm fw-semibold rounded-pill bg-primary-600 px-20 py-9 radius-4 text-white'>
              Primary
            </span>
            <span className='badge text-sm fw-semibold rounded-pill bg-lilac-600 px-20 py-9 radius-4 text-white'>
              Secondary
            </span>
            <span className='badge text-sm fw-semibold rounded-pill bg-success-600 px-20 py-9 radius-4 text-white'>
              Success
            </span>
            <span className='badge text-sm fw-semibold rounded-pill bg-info-600 px-20 py-9 radius-4 text-white'>
              Info
            </span>
            <span className='badge text-sm fw-semibold rounded-pill bg-warning-600 px-20 py-9 radius-4 text-white'>
              Warning
            </span>
            <span className='badge text-sm fw-semibold rounded-pill bg-danger-600 px-20 py-9 radius-4 text-white'>
              Danger
            </span>
            <span className='badge text-sm fw-semibold rounded-pill bg-neutral-800 px-20 py-9 radius-4 text-base'>
              Dark
            </span>
            <span className='badge text-sm fw-semibold rounded-pill bg-transparent px-20 py-9 radius-4 text-primary-600'>
              Link
            </span>
            <span className='badge text-sm fw-semibold rounded-pill bg-light-600 px-20 py-9 radius-4 text-dark'>
              Light
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultBadgesTwo;
