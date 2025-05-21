import { Icon } from "@iconify/react/dist/iconify.js";

const InputFormWithIcons = () => {
  return (
    <div className='col-md-6'>
      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title mb-0'>Input Form With Icons</h5>
        </div>
        <div className='card-body'>
          <div className='row gy-3'>
            <div className='col-12'>
              <label className='form-label'>First Name</label>
              <div className='icon-field'>
                <span className='icon'>
                  <Icon icon='f7:person' />
                </span>
                <input
                  type='text'
                  name='#0'
                  className='form-control'
                  placeholder='Enter First Name'
                />
              </div>
            </div>
            <div className='col-12'>
              <label className='form-label'>Last Name</label>
              <div className='icon-field'>
                <span className='icon'>
                  <Icon icon='f7:person' />
                </span>
                <input
                  type='text'
                  name='#0'
                  className='form-control'
                  placeholder='Enter Last Name'
                />
              </div>
            </div>
            <div className='col-12'>
              <label className='form-label'>Email</label>
              <div className='icon-field'>
                <span className='icon'>
                  <Icon icon='mage:email' />
                </span>
                <input
                  type='email'
                  name='#0'
                  className='form-control'
                  placeholder='Enter Email'
                />
              </div>
            </div>
            <div className='col-12'>
              <label className='form-label'>Phone</label>
              <div className='icon-field'>
                <span className='icon'>
                  <Icon icon='solar:phone-calling-linear' />
                </span>
                <input
                  type='text'
                  name='#0'
                  className='form-control'
                  placeholder='+1 (555) 000-0000'
                />
              </div>
            </div>
            <div className='col-12'>
              <label className='form-label'>Password</label>
              <div className='icon-field'>
                <span className='icon'>
                  <Icon icon='solar:lock-password-outline' />
                </span>
                <input
                  type='password'
                  name='#0'
                  className='form-control'
                  placeholder='*******'
                />
              </div>
            </div>
            <div className='col-12'>
              <button type='submit' className='btn btn-primary-600'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputFormWithIcons;
