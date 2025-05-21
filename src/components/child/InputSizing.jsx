const InputSizing = () => {
  return (
    <div className='col-md-6'>
      <div className='card'>
        <div className='card-header'>
          <h6 className='card-title mb-0'>Input Sizing</h6>
        </div>
        <div className='card-body'>
          <div className='row gy-3'>
            <div className='col-12'>
              <label className='form-label'>Input Large</label>
              <input
                type='text'
                name='#0'
                className='form-control form-control-lg'
                placeholder='info@gmail.com'
              />
            </div>
            <div className='col-12'>
              <label className='form-label'>Input Medium</label>
              <input
                type='text'
                name='#0'
                className='form-control'
                placeholder='info@gmail.com'
              />
            </div>
            <div className='col-12'>
              <label className='form-label'>Input Small</label>
              <input
                type='text'
                name='#0'
                className='form-control form-control-sm'
                placeholder='info@gmail.com'
              />
            </div>
          </div>
        </div>
      </div>
      {/* card end */}
      <div className='card mt-24'>
        <div className='card-header'>
          <h6 className='card-title mb-0'>File Input Sizing</h6>
        </div>
        <div className='card-body'>
          <div className='row gy-3'>
            <div className='col-12'>
              <label className='form-label'>Large Size File Input </label>
              <input
                className='form-control form-control-lg'
                name='#0'
                type='file'
              />
            </div>
            <div className='col-12'>
              <label className='form-label'>Medium Size File Input </label>
              <input className='form-control' type='file' name='#0' />
            </div>
            <div className='col-12'>
              <label className='form-label'>Small Size File Input </label>
              <input
                className='form-control form-control-sm'
                name='#0'
                type='file'
              />
            </div>
          </div>
        </div>
      </div>
      {/* card end */}
      <div className='card mt-24'>
        <div className='card-header'>
          <h6 className='card-title mb-0'>Custom Forms</h6>
        </div>
        <div className='card-body'>
          <div className='row gy-3'>
            <div className='col-12'>
              <label className='form-label'>Readonly Input</label>
              <input
                type='text'
                name='#0'
                className='form-control'
                placeholder='info@gmail.com'
                defaultValue='info@gmail.com'
                readOnly=''
              />
            </div>
            <div className='col-12'>
              <label className='form-label'>Input with Phone </label>
              <div className='form-mobile-field'>
                <select className='form-select' defaultValue={"US"}>
                  <option value={"US"}>US</option>
                  <option value={"UK"}>UK</option>
                  <option value={"BD"}>BD</option>
                  <option value={"EU"}>EU</option>
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
              <label className='form-label'>Medium Size File Input </label>
              <input className='form-control' type='file' name='#0' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputSizing;
