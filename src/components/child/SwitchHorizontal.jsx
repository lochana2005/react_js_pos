const SwitchHorizontal = () => {
  return (
    <div className='col-lg-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Switch Horizontal</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-28'>
            <div className='form-switch switch-primary d-flex align-items-center gap-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='horizontal1'
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='horizontal1'
              >
                Horizontal 1
              </label>
            </div>
            <div className='form-switch switch-purple d-flex align-items-center gap-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='horizontal2'
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='horizontal2'
              >
                Horizontal 2
              </label>
            </div>
            <div className='form-switch switch-success d-flex align-items-center gap-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='horizontal3'
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='horizontal3'
              >
                Horizontal 3
              </label>
            </div>
            <div className='form-switch switch-warning d-flex align-items-center gap-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='horizontal4'
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='horizontal4'
              >
                Horizontal 4
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchHorizontal;
