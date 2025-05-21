const GradientBadges = () => {
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Gradient Badges</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex flex-wrap align-items-center gap-3'>
            <span className='badge text-sm fw-semibold bg-dark-primary-gradient px-20 py-9 radius-4 text-white'>
              Primary
            </span>
            <span className='badge text-sm fw-semibold bg-dark-lilac-gradient px-20 py-9 radius-4 text-white'>
              Secondary
            </span>
            <span className='badge text-sm fw-semibold bg-dark-success-gradient px-20 py-9 radius-4 text-white'>
              Success
            </span>
            <span className='badge text-sm fw-semibold bg-dark-info-gradient px-20 py-9 radius-4 text-white'>
              Info
            </span>
            <span className='badge text-sm fw-semibold bg-dark-warning-gradient px-20 py-9 radius-4 text-white'>
              Warning
            </span>
            <span className='badge text-sm fw-semibold bg-dark-danger-gradient px-20 py-9 radius-4 text-white'>
              Danger
            </span>
            <span className='badge text-sm fw-semibold bg-dark-dark-gradient px-20 py-9 radius-4 text-white'>
              Dark
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientBadges;
