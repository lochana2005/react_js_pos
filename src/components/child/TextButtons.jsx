const TextButtons = () => {
  return (
    <div className='col-xl-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Text Buttons</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex flex-wrap align-items-center gap-3'>
            <button
              type='button'
              className='btn rounded-pill text-primary-600 radius-8 px-20 py-11'
            >
              Primary
            </button>
            <button
              type='button'
              className='btn rounded-pill text-lilac-600 radius-8 px-20 py-11'
            >
              Secondary
            </button>
            <button
              type='button'
              className='btn rounded-pill text-success-600 radius-8 px-20 py-11'
            >
              Success
            </button>
            <button
              type='button'
              className='btn rounded-pill text-info-600 radius-8 px-20 py-11'
            >
              Info
            </button>
            <button
              type='button'
              className='btn rounded-pill text-warning-600 radius-8 px-20 py-11'
            >
              Warning
            </button>
            <button
              type='button'
              className='btn rounded-pill text-danger-600 radius-8 px-20 py-11'
            >
              Danger
            </button>
            <button
              type='button'
              className='btn rounded-pill text-primary-light radius-8 px-20 py-11'
            >
              Dark
            </button>
            <button
              type='button'
              className='btn rounded-pill text-secondary-light text-decoration-none radius-8 px-20 py-11'
            >
              Link
            </button>
            <button
              type='button'
              className='btn rounded-pill text-secondary-light radius-8 px-20 py-11'
            >
              Light
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextButtons;
