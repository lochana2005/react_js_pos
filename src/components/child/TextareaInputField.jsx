const TextareaInputField = () => {
  return (
    <div className='col-lg-12'>
      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title mb-0'>Textarea input field</h5>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-lg-4'>
              <label className='form-label'>Description</label>
              <textarea
                name='#0'
                className='form-control'
                rows={4}
                cols={50}
                placeholder='Enter a description...'
                defaultValue={""}
              />
            </div>
            <div className='col-lg-4'>
              <label className='form-label'>Description</label>
              <textarea
                name='#0'
                className='form-control'
                rows={4}
                cols={50}
                placeholder='Enter a description...'
                readOnly=''
                defaultValue={""}
              />
            </div>
            <div className='col-lg-4 was-validated'>
              <label className='form-label'>Description</label>
              <textarea
                className='form-control'
                rows={4}
                cols={50}
                placeholder='Enter a description...'
                required=''
                defaultValue={""}
              />
              <div className='invalid-feedback'>
                Please enter a message in the textarea.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextareaInputField;
