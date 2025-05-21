const RadioDisable = () => {
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Radio Disable</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-28'>
            <div className='form-check checked-primary d-flex align-items-center gap-2'>
              <input
                className='form-check-input'
                type='radio'
                name='radio11'
                id='radio111'
                defaultChecked={true}
                disabled={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='radio111'
              >
                {" "}
                Radio Active{" "}
              </label>
            </div>
            <div className='form-check checked-secondary d-flex align-items-center gap-2'>
              <input
                className='form-check-input'
                type='radio'
                name='radio22'
                id='radio222'
                defaultChecked={true}
                disabled={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='radio222'
              >
                {" "}
                Radio Active{" "}
              </label>
            </div>
            <div className='form-check checked-success d-flex align-items-center gap-2'>
              <input
                className='form-check-input'
                type='radio'
                name='radio33'
                id='radio333'
                defaultChecked={true}
                disabled={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='radio333'
              >
                {" "}
                Radio Active{" "}
              </label>
            </div>
            <div className='form-check checked-warning d-flex align-items-center gap-2'>
              <input
                className='form-check-input'
                type='radio'
                name='radio44'
                id='radio444'
                defaultChecked={true}
                disabled={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='radio444'
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
                name='radio0'
                id='radio1011'
                disabled={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='radio1011'
              >
                {" "}
                Radio Inactive{" "}
              </label>
            </div>
            <div className='form-check checked-secondary d-flex align-items-center gap-2'>
              <input
                className='form-check-input'
                type='radio'
                name='radio0'
                id='radio2022'
                disabled={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='radio2022'
              >
                {" "}
                Radio Inactive{" "}
              </label>
            </div>
            <div className='form-check checked-success d-flex align-items-center gap-2'>
              <input
                className='form-check-input'
                type='radio'
                name='radio0'
                id='radio3033'
                disabled={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='radio3033'
              >
                {" "}
                Radio Inactive{" "}
              </label>
            </div>
            <div className='form-check checked-warning d-flex align-items-center gap-2'>
              <input
                className='form-check-input'
                type='radio'
                name='radio0'
                id='radio4044'
                disabled={true}
              />
              <label
                className='form-check-label line-height-1 fw-medium text-secondary-light'
                htmlFor='radio4044'
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

export default RadioDisable;
