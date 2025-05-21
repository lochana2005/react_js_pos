const BadgesWithButton = () => {
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Badges With Button</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex flex-wrap align-items-center gap-3'>
            <button
              type='button'
              className='badge text-sm fw-semibold bg-primary-600 px-16 py-9 radius-4 text-white d-flex align-items-center gap-2'
            >
              Primary
              <span className='badge bg-white text-dark radius-5 text-xs'>
                4
              </span>
            </button>
            <button
              type='button'
              className='badge text-sm fw-semibold bg-lilac-600 px-16 py-9 radius-4 text-white d-flex align-items-center gap-2'
            >
              Secondary
              <span className='badge bg-white text-dark radius-5 text-xs'>
                4
              </span>
            </button>
            <button
              type='button'
              className='badge text-sm fw-semibold bg-success-600 px-16 py-9 radius-4 text-white d-flex align-items-center gap-2'
            >
              Success
              <span className='badge bg-white text-dark radius-5 text-xs'>
                4
              </span>
            </button>
            <button
              type='button'
              className='badge text-sm fw-semibold bg-info-600 px-20 16-9 radius-4 text-white d-flex align-items-center gap-2'
            >
              Info
              <span className='badge bg-white text-dark radius-5 text-xs'>
                4
              </span>
            </button>
            <button
              type='button'
              className='badge text-sm fw-semibold bg-warning-600 px-16 py-9 radius-4 text-white d-flex align-items-center gap-2'
            >
              Warning
              <span className='badge bg-white text-dark radius-5 text-xs'>
                4
              </span>
            </button>
            <button
              type='button'
              className='badge text-sm fw-semibold bg-danger-600 px-16 py-9 radius-4 text-white d-flex align-items-center gap-2'
            >
              Danger
              <span className='badge bg-white text-dark radius-5 text-xs'>
                4
              </span>
            </button>
            <button
              type='button'
              className='badge text-sm fw-semibold bg-neutral-800 px-16 py-9 radius-4 text-base d-flex align-items-center gap-2'
            >
              Dark
              <span className='badge bg-white text-dark radius-5 text-xs'>
                4
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgesWithButton;
