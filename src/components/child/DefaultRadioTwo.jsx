const DefaultRadioTwo = () => {
  return (
    <div className='col-lg-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Default Radio</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-28'>
            <div className='form-switch switch-primary d-flex align-items-center gap-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='switch1'
                defaultChecked={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='switch1'
              >
                Switch Active
              </label>
            </div>
            <div className='form-switch switch-purple d-flex align-items-center gap-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='switch2'
                defaultChecked={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='switch2'
              >
                Switch Active
              </label>
            </div>
            <div className='form-switch switch-success d-flex align-items-center gap-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='switch3'
                defaultChecked={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='switch3'
              >
                Switch Active
              </label>
            </div>
            <div className='form-switch switch-warning d-flex align-items-center gap-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='switch4'
                defaultChecked={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='switch4'
              >
                Switch Active
              </label>
            </div>
          </div>
          <div className='d-flex align-items-center flex-wrap gap-28 mt-24'>
            <div className='form-switch switch-primary d-flex align-items-center gap-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='switch11'
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='switch11'
              >
                Switch Inactive
              </label>
            </div>
            <div className='form-switch switch-purple d-flex align-items-center gap-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='switch22'
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='switch22'
              >
                Switch Inactive
              </label>
            </div>
            <div className='form-switch switch-success d-flex align-items-center gap-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='switch33'
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='switch33'
              >
                Switch Inactive
              </label>
            </div>
            <div className='form-switch switch-warning d-flex align-items-center gap-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='switch44'
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='switch44'
              >
                Switch Inactive
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultRadioTwo;
