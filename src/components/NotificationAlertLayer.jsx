const NotificationAlertLayer = () => {
  return (
    <div className='card h-100 p-0 radius-12 overflow-hidden'>
      <div className='card-body p-40'>
        <form action='#'>
          <div className='mb-24'>
            <h6 className='mb-16'>Mail Notification Messages</h6>
            <div className='d-flex flex-wrap justify-content-between gap-1'>
              <label className='form-label fw-medium text-secondary-light text-md mb-8'>
                Admin New Order Message
              </label>
              <div className='form-switch switch-primary d-flex align-items-center gap-3'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  role='switch'
                  id='On'
                  defaultChecked=''
                />
                <label
                  className='form-check-label line-height-1 fw-medium text-secondary-light'
                  htmlFor='On'
                >
                  On
                </label>
              </div>
            </div>
            <textarea
              className='form-control radius-8 h-80-px'
              placeholder='You have a new order.'
              defaultValue={""}
            />
          </div>
          <div className='mb-24'>
            <h6 className='mb-16'>Sms Notification Messages</h6>
            <div className='d-flex flex-wrap justify-content-between gap-1'>
              <label className='form-label fw-medium text-secondary-light text-md mb-8'>
                Admin New Order Message
              </label>
              <div className='form-switch switch-primary d-flex align-items-center gap-3'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  role='switch'
                  id='Off'
                />
                <label
                  className='form-check-label line-height-1 fw-medium text-secondary-light'
                  htmlFor='Off'
                >
                  OFF
                </label>
              </div>
            </div>
            <textarea
              className='form-control radius-8 h-80-px'
              placeholder='You have a new order.'
              defaultValue={""}
            />
          </div>
          <div className='mb-24'>
            <h6 className='mb-16'>Push Notification Messages</h6>
            <div className='d-flex flex-wrap justify-content-between gap-1'>
              <label className='form-label fw-medium text-secondary-light text-md mb-8'>
                Admin New Order Message
              </label>
              <div className='form-switch switch-primary d-flex align-items-center gap-3'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  role='switch'
                  id='Offf'
                />
                <label
                  className='form-check-label line-height-1 fw-medium text-secondary-light'
                  htmlFor='Offf'
                >
                  OFF
                </label>
              </div>
            </div>
            <textarea
              className='form-control radius-8 h-80-px'
              placeholder='You have a new order.'
              defaultValue={""}
            />
          </div>
          <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
            <button
              type='reset'
              className='border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-40 py-11 radius-8'
            >
              Reset
            </button>
            <button
              type='submit'
              className='btn btn-primary border border-primary-600 text-md px-24 py-12 radius-8'
            >
              Save Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NotificationAlertLayer;
