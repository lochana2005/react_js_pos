const VerticalInputForm = () => {
  return (
    <div className='col-md-6'>
      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title mb-0'>Vertical Input Form</h5>
        </div>
        <div className='card-body'>
          <div className='row gy-3'>
            <div className='col-12'>
              <label className='form-label'>First Name</label>
              <input
                type='text'
                name='#0'
                className='form-control'
                placeholder='Enter First Name'
              />
            </div>
            <div className='col-12'>
              <label className='form-label'>Last Name</label>
              <input
                type='text'
                name='#0'
                className='form-control'
                placeholder='Enter Last Name'
              />
            </div>
            <div className='col-12'>
              <label className='form-label'>Email</label>
              <input
                type='email'
                name='#0'
                className='form-control'
                placeholder='Enter Email'
              />
            </div>
            <div className='col-12'>
              <label className='form-label'>Phone</label>
              <div className='form-mobile-field'>
                <select className='form-select' defaultValue='US'>
                  <option value='US'>US</option>
                  <option value='UK'>UK</option>
                  <option value='BD'>BD</option>
                  <option value='EU'>EU</option>
                </select>
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
              <input
                type='password'
                name='#0'
                className='form-control'
                placeholder='*******'
              />
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

export default VerticalInputForm;
