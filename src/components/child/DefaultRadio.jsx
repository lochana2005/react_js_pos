const DefaultRadio = () => {
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Default Radio</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-28'>
            <div className='form-check checked-primary d-flex align-items-center gap-2'>
              <input
                className='form-check-input'
                type='radio'
                name='radio1'
                id='radio1'
                defaultChecked={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='radio1'
              >
                {" "}
                Radio Active{" "}
              </label>
            </div>
            <div className='form-check checked-secondary d-flex align-items-center gap-2'>
              <input
                className='form-check-input'
                type='radio'
                name='radio2'
                id='radio2'
                defaultChecked={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='radio2'
              >
                {" "}
                Radio Active{" "}
              </label>
            </div>
            <div className='form-check checked-success d-flex align-items-center gap-2'>
              <input
                className='form-check-input'
                type='radio'
                name='radio3'
                id='radio3'
                defaultChecked={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='radio3'
              >
                {" "}
                Radio Active{" "}
              </label>
            </div>
            <div className='form-check checked-warning d-flex align-items-center gap-2'>
              <input
                className='form-check-input'
                type='radio'
                name='radio4'
                id='radio4'
                defaultChecked={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='radio4'
              >
                {" "}
                Radio Active{" "}
              </label>
            </div>
          </div>
          <div className='d-flex align-items-center flex-wrap gap-28 mt-24'>
            <div className='form-check checked-primary d-flex align-items-center gap-2'>
              <input
                className='form-check-input'
                type='radio'
                name='radio'
                id='radio11'
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='radio11'
              >
                {" "}
                Radio Inactive{" "}
              </label>
            </div>
            <div className='form-check checked-secondary d-flex align-items-center gap-2'>
              <input
                className='form-check-input'
                type='radio'
                name='radio'
                id='radio22'
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='radio22'
              >
                {" "}
                Radio Inactive{" "}
              </label>
            </div>
            <div className='form-check checked-success d-flex align-items-center gap-2'>
              <input
                className='form-check-input'
                type='radio'
                name='radio'
                id='radio33'
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='radio33'
              >
                {" "}
                Radio Inactive{" "}
              </label>
            </div>
            <div className='form-check checked-warning d-flex align-items-center gap-2'>
              <input
                className='form-check-input'
                type='radio'
                name='radio'
                id='radio44'
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='radio44'
              >
                {" "}
                Radio Inactive{" "}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultRadio;
