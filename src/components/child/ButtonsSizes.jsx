const ButtonsSizes = () => {
  return (
    <div className='col-xl-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Buttons Sizes</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex flex-wrap align-items-center gap-3'>
            <button
              type='button'
              className='btn btn-primary-600 radius-8 px-20 py-11'
            >
              {" "}
              Large Button
            </button>
            <button
              type='button'
              className='btn btn-success-600 radius-8 px-16 py-9'
            >
              Medium Button
            </button>
            <button
              type='button'
              className='btn btn-warning-600 radius-8 px-14 py-6 text-sm'
            >
              Small Button
            </button>
          </div>
          <div className='d-flex flex-wrap align-items-center gap-3 mt-16'>
            <button
              type='button'
              className='btn btn-primary-100 text-primary-600 radius-8 px-20 py-11'
            >
              {" "}
              Large Button
            </button>
            <button
              type='button'
              className='btn btn-success-100 text-success-600 radius-8 px-16 py-9'
            >
              Medium Button
            </button>
            <button
              type='button'
              className='btn btn-warning-100 text-warning-600 radius-8 px-14 py-6 text-sm'
            >
              Small Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsSizes;
