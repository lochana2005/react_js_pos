const SwitchWithTex = () => {
  return (
    <div className='col-lg-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Switch With Tex</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-28'>
            <div className='form-switch switch-primary d-flex align-items-center gap-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='yes'
                defaultChecked={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='yes'
              >
                Yes
              </label>
            </div>
            <div className='form-switch switch-primary d-flex align-items-center gap-3'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='no'
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='no'
              >
                No
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchWithTex;
