import { Icon } from "@iconify/react/dist/iconify.js";
const InputCustomStyles = () => {
  return (
    <div className='col-lg-12'>
      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title mb-0'>Input Custom Styles</h5>
        </div>
        <div className='card-body'>
          <form className='row gy-3 needs-validation' noValidate=''>
            <div className='col-md-6'>
              <label className='form-label'>Input with Placeholder</label>
              <input
                type='text'
                name='#0'
                className='form-control'
                defaultValue='info@gmail.com'
                required=''
              />
              <div className='valid-feedback'>Looks good!</div>
            </div>
            <div className='col-md-6'>
              <label className='form-label'>Medium Size File Input </label>
              <input
                className='form-control'
                type='file'
                name='#0'
                required=''
              />
              <div className='invalid-feedback'>Please choose a file.</div>
            </div>
            <div className='col-md-6'>
              <label className='form-label'>Input with Icon</label>
              <input
                type='email'
                name='#0'
                className='form-control'
                placeholder='Enter Email'
                required=''
              />
              <div className='invalid-feedback'>
                Please provide email address.
              </div>
            </div>
            <div className='col-md-6'>
              <label className='form-label'>Input with Payment </label>
              <div className='input-group has-validation'>
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
                  required=''
                />
                <div className='invalid-feedback'>
                  Please provide card number.
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <label className='form-label'>Input with Phone </label>
              <div className='form-mobile-field has-validation'>
                <select className='form-select' required defaultValue={"MU"}>
                  <option value='MU'>MU</option>
                  <option value='US'>US</option>
                  <option value='BN'>BN</option>
                  <option value='EN'>EN</option>
                  <option value='AM'>AM</option>
                </select>
                <input
                  type='text'
                  name='#0'
                  className='form-control'
                  placeholder='+1 (555) 000-0000'
                  required=''
                />
                <div className='invalid-feedback'>
                  Please provide phone number.
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <label className='form-label'>Input</label>
              <div className='input-group has-validation'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='www.random.com'
                  defaultValue='www.random.com'
                />
                <button type='button' className='input-group-text bg-base'>
                  <Icon icon='lucide:copy' /> Copy
                </button>
                <div className='invalid-feedback'>Looks good.</div>
              </div>
            </div>
            <div className='col-12'>
              <button className='btn btn-primary-600' type='submit'>
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputCustomStyles;
