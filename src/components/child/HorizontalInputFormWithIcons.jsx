import { Icon } from "@iconify/react/dist/iconify.js";

const HorizontalInputFormWithIcons = () => {
  return (
    <div className='col-md-6'>
      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title mb-0'>Horizontal Input Form With Icons</h5>
        </div>
        <div className='card-body'>
          <div className='row mb-24 gy-3 align-items-center'>
            <label className='form-label mb-0 col-sm-2'>First Name</label>
            <div className='col-sm-10'>
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
          </div>
          <div className='row mb-24 gy-3 align-items-center'>
            <label className='form-label mb-0 col-sm-2'>Last Name</label>
            <div className='col-sm-10'>
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
          </div>
          <div className='row mb-24 gy-3 align-items-center'>
            <label className='form-label mb-0 col-sm-2'>Email</label>
            <div className='col-sm-10'>
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
          </div>
          <div className='row mb-24 gy-3 align-items-center'>
            <label className='form-label mb-0 col-sm-2'>Phone</label>
            <div className='col-sm-10'>
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
          </div>
          <div className='row mb-24 gy-3 align-items-center'>
            <label className='form-label mb-0 col-sm-2'>Password</label>
            <div className='col-sm-10'>
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
          </div>
          <button type='submit' className='btn btn-primary-600'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalInputFormWithIcons;
