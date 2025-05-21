import { Icon } from "@iconify/react/dist/iconify.js";

const InputStatus = () => {
  return (
    <div className='col-lg-12'>
      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title mb-0'>Input Status</h5>
        </div>
        <div className='card-body'>
          <form className='row gy-3 needs-validation' noValidate=''>
            <div className='col-md-6'>
              <label className='form-label'>First Name</label>
              <div className='icon-field has-validation'>
                <span className='icon'>
                  <Icon icon='f7:person' />
                </span>
                <input
                  type='text'
                  name='#0'
                  className='form-control'
                  placeholder='Enter First Name'
                  required=''
                />
                <div className='invalid-feedback'>
                  Please provide first name
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <label className='form-label'>Last Name</label>
              <div className='icon-field has-validation'>
                <span className='icon'>
                  <Icon icon='f7:person' />
                </span>
                <input
                  type='text'
                  name='#0'
                  className='form-control'
                  placeholder='Enter Last Name'
                  required=''
                />
                <div className='invalid-feedback'>Please provide last name</div>
              </div>
            </div>
            <div className='col-md-6'>
              <label className='form-label'>Email</label>
              <div className='icon-field has-validation'>
                <span className='icon'>
                  <Icon icon='mage:email' />
                </span>
                <input
                  type='email'
                  name='#0'
                  className='form-control'
                  placeholder='Enter Email'
                  required=''
                />
                <div className='invalid-feedback'>
                  Please provide email address
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <label className='form-label'>Phone</label>
              <div className='icon-field has-validation'>
                <span className='icon'>
                  <Icon icon='solar:phone-calling-linear' />
                </span>
                <input
                  type='text'
                  name='#0'
                  className='form-control'
                  placeholder='+1 (555) 000-0000'
                  required=''
                />
                <div className='invalid-feedback'>
                  Please provide phone number
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <label className='form-label'>Password</label>
              <div className='icon-field has-validation'>
                <span className='icon'>
                  <Icon icon='solar:lock-password-outline' />
                </span>
                <input
                  type='password'
                  name='#0'
                  className='form-control'
                  placeholder='*******'
                  required=''
                />
                <div className='invalid-feedback'>Please provide password</div>
              </div>
            </div>
            <div className='col-md-6'>
              <label className='form-label'>Confirm Password</label>
              <div className='icon-field has-validation'>
                <span className='icon'>
                  <Icon icon='solar:lock-password-outline' />
                </span>
                <input
                  type='password'
                  name='#0'
                  className='form-control'
                  placeholder='*******'
                  required=''
                />
                <div className='invalid-feedback'>Please confirm password</div>
              </div>
            </div>
            <div className='col-md-12'>
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

export default InputStatus;
