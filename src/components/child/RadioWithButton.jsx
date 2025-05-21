const RadioWithButton = () => {
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Radio With Button</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-24'>
            <div className='bg-primary-50 px-20 py-12 radius-8'>
              <span className='form-check checked-primary d-flex align-items-center gap-2'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='radio100'
                  id='radio100'
                  defaultChecked={true}
                />
                <label
                  className='form-check-label line-height-1 fw-medium text-secondary-light'
                  htmlFor='radio100'
                >
                  {" "}
                  Radio Active{" "}
                </label>
              </span>
            </div>
            <div className='bg-neutral-100 px-20 py-12 radius-8'>
              <span className='form-check checked-success d-flex align-items-center gap-2'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='radio200'
                  id='radio200'
                  defaultChecked={true}
                />
                <label
                  className='form-check-label line-height-1 fw-medium text-secondary-light'
                  htmlFor='radio200'
                >
                  {" "}
                  Radio Active{" "}
                </label>
              </span>
            </div>
            <div className='bg-success-100 px-20 py-12 radius-8'>
              <span className='form-check checked-success d-flex align-items-center gap-2'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='radio300'
                  id='radio300'
                  defaultChecked={true}
                />
                <label
                  className='form-check-label line-height-1 fw-medium text-secondary-light'
                  htmlFor='radio300'
                >
                  {" "}
                  Radio Active{" "}
                </label>
              </span>
            </div>
            <div className='bg-warning-100 px-20 py-12 radius-8'>
              <span className='form-check checked-warning d-flex align-items-center gap-2'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='radio400'
                  id='radio400'
                  defaultChecked={true}
                />
                <label
                  className='form-check-label line-height-1 fw-medium text-secondary-light'
                  htmlFor='radio400'
                >
                  {" "}
                  Radio Active{" "}
                </label>
              </span>
            </div>
            <div className='bg-neutral-200 px-20 py-12 radius-8'>
              <span className='form-check checked-dark d-flex align-items-center gap-2'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='radio500'
                  id='radio500'
                  defaultChecked={true}
                />
                <label
                  className='form-check-label line-height-1 fw-medium text-secondary-light'
                  htmlFor='radio500'
                >
                  {" "}
                  Radio Active{" "}
                </label>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioWithButton;
