const RoundedButtons = () => {
  return (
    <div className='col-xl-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Rounded Buttons</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex flex-wrap align-items-center gap-3'>
            <button
              type='button'
              className='btn rounded-pill btn-primary-600 radius-8 px-20 py-11'
            >
              Primary
            </button>
            <button
              type='button'
              className='btn rounded-pill btn-lilac-600 radius-8 px-20 py-11'
            >
              Secondary
            </button>
            <button
              type='button'
              className='btn rounded-pill btn-success-600 radius-8 px-20 py-11'
            >
              Success
            </button>
            <button
              type='button'
              className='btn rounded-pill btn-info-600 radius-8 px-20 py-11'
            >
              Info
            </button>
            <button
              type='button'
              className='btn rounded-pill btn-warning-600 radius-8 px-20 py-11'
            >
              Warning
            </button>
            <button
              type='button'
              className='btn rounded-pill btn-danger-600 radius-8 px-20 py-11'
            >
              Danger
            </button>
            <button
              type='button'
              className='btn rounded-pill btn-neutral-900 text-base radius-8 px-20 py-11'
            >
              Dark
            </button>
            <button
              type='button'
              className='btn rounded-pill btn-link text-secondary-light text-decoration-none radius-8 px-20 py-11'
            >
              Link
            </button>
            <button
              type='button'
              className='btn rounded-pill btn-light-100 text-dark radius-8 px-20 py-11'
            >
              Light
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoundedButtons;
