const SwitchDisable = () => {
  return (
    <div className='col-lg-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Switch Disable</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-28'>
            <div className='form-switch switch-primary d-flex align-items-center gap-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='switch111'
                defaultChecked={true}
                disabled={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='switch111'
              >
                Switch Active
              </label>
            </div>
            <div className='form-switch switch-purple d-flex align-items-center gap-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='switch222'
                defaultChecked={true}
                disabled={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='switch222'
              >
                Switch Active
              </label>
            </div>
            <div className='form-switch switch-success d-flex align-items-center gap-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='switch333'
                defaultChecked={true}
                disabled={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='switch333'
              >
                Switch Active
              </label>
            </div>
            <div className='form-switch switch-warning d-flex align-items-center gap-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='switch444'
                defaultChecked={true}
                disabled={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='switch444'
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
                id='switch10'
                disabled={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='switch10'
              >
                Switch Inactive
              </label>
            </div>
            <div className='form-switch switch-purple d-flex align-items-center gap-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='switch20'
                disabled={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='switch20'
              >
                Switch Inactive
              </label>
            </div>
            <div className='form-switch switch-success d-flex align-items-center gap-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='switch30'
                disabled={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='switch30'
              >
                Switch Inactive
              </label>
            </div>
            <div className='form-switch switch-warning d-flex align-items-center gap-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='switch40'
                disabled={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='switch40'
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

export default SwitchDisable;
