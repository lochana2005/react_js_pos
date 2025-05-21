const CheckboxRadioButtons = () => {
  return (
    <div className='col-xl-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>
            Checkbox &amp; Radio Buttons
          </h6>
        </div>
        <div className='card-body py-16 px-24 d-flex flex-wrap align-items-center gap-3'>
          <div
            className='btn-group'
            role='group'
            aria-label='Basic checkbox toggle button group'
          >
            <input type='checkbox' className='btn-check' id='btncheck1' />
            <label
              className='btn btn-outline-primary-600 px-20 py-11 radius-8'
              htmlFor='btncheck1'
            >
              Checkbox 1
            </label>
            <input type='checkbox' className='btn-check' id='btncheck2' />
            <label
              className='btn btn-outline-primary-600 px-20 py-11'
              htmlFor='btncheck2'
            >
              Checkbox 2
            </label>
            <input type='checkbox' className='btn-check' id='btncheck3' />
            <label
              className='btn btn-outline-primary-600 px-20 py-11 radius-8'
              htmlFor='btncheck3'
            >
              Checkbox 3
            </label>
          </div>
          <div
            className='btn-group'
            role='group'
            aria-label='Basic radio toggle button group'
          >
            <input
              type='radio'
              className='btn-check'
              name='btnradio'
              id='btnradio1'
              defaultChecked=''
            />
            <label
              className='btn btn-outline-warning-600 px-20 py-11 radius-8'
              htmlFor='btnradio1'
            >
              Radio 1
            </label>
            <input
              type='radio'
              className='btn-check'
              name='btnradio'
              id='btnradio2'
            />
            <label
              className='btn btn-outline-warning-600 px-20 py-11'
              htmlFor='btnradio2'
            >
              Radio 2
            </label>
            <input
              type='radio'
              className='btn-check'
              name='btnradio'
              id='btnradio3'
            />
            <label
              className='btn btn-outline-warning-600 px-20 py-11 radius-8'
              htmlFor='btnradio3'
            >
              Radio 3
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckboxRadioButtons;
