import { Icon } from "@iconify/react/dist/iconify.js";
const DefaultInputs = () => {
  return (
    <div className='col-md-6'>
      <div className='card'>
        <div className='card-header'>
          <h6 className='card-title mb-0'>Default Inputs</h6>
        </div>
        <div className='card-body'>
          <div className='row gy-3'>
            <div className='col-12'>
              <label className='form-label'>Basic Input</label>
              <input type='text' name='#0' className='form-control' />
            </div>
            <div className='col-12'>
              <label className='form-label'>Input with Placeholder</label>
              <input
                type='text'
                name='#0'
                className='form-control'
                placeholder='info@gmail.com'
              />
            </div>
            <div className='col-12'>
              <label className='form-label'>Input with Phone </label>
              <input
                type='text'
                className='form-control flex-grow-1'
                placeholder='+1 (555) 253-08515'
              />
            </div>
            <div className='col-12'>
              <label className='form-label'>Input Date</label>
              <input type='date' name='#0' className='form-control' />
            </div>
            <div className='col-12'>
              <label className='form-label'>Input with Payment</label>
              <div className='input-group'>
                <span className='input-group-text bg-base'>
                  <img
                    src='assets/images/card/payment-icon.png'
                    alt='image_icon'
                  />
                </span>
                <input
                  type='text'
                  className='form-control flex-grow-1'
                  placeholder='Card number'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card end */}
      <div className='card mt-24'>
        <div className='card-header'>
          <h6 className='card-title mb-0'>Input Group</h6>
        </div>
        <div className='card-body'>
          <div className='row gy-3'>
            <div className='col-12'>
              <label className='form-label'>Input</label>
              <div className='input-group'>
                <span className='input-group-text bg-base'>
                  <Icon icon='mynaui:envelope' />
                </span>
                <input
                  type='text'
                  className='form-control flex-grow-1'
                  placeholder='info@gmail.com'
                />
              </div>
            </div>
            <div className='col-12'>
              <label className='form-label'>Input</label>
              <div className='input-group'>
                <select
                  className='form-select input-group-text w-90-px flex-grow-0'
                  defaultValue='Select Country'
                >
                  <option value='' disabled>
                    Select Country
                  </option>
                  <option value='US'>US</option>
                  <option value='Canada'>Canada</option>
                  <option value='UK'>UK</option>
                  <option value='Australia'>Australia</option>
                  <option value='Germany'>Germany</option>
                </select>
                <input
                  type='text'
                  className='form-control flex-grow-1'
                  placeholder='info@gmail.com'
                />
              </div>
            </div>
            <div className='col-12'>
              <label className='form-label'>Input</label>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control flex-grow-1'
                  placeholder='info@gmail.com'
                />
                <select
                  className='form-select input-group-text w-90-px flex-grow-0'
                  defaultValue='Select Country'
                >
                  <option value='' disabled>
                    Select Country
                  </option>
                  <option value='US'>US</option>
                  <option value='Canada'>Canada</option>
                  <option value='UK'>UK</option>
                  <option value='Australia'>Australia</option>
                  <option value='Germany'>Germany</option>
                </select>
              </div>
            </div>
            <div className='col-12'>
              <label className='form-label'>Input</label>
              <div className='input-group'>
                <span className='input-group-text bg-base'> http:// </span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='www.random.com'
                />
              </div>
            </div>
            <div className='col-12'>
              <label className='form-label'>Input</label>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='www.random.com'
                />
                <button type='button' className='input-group-text bg-base'>
                  <Icon icon='lucide:copy' /> Copy
                </button>
              </div>
              <p className='text-sm mt-1 mb-0'>
                This is a hint text to help user.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* card end */}
    </div>
  );
};

export default DefaultInputs;
