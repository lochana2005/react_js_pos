const TextFont = () => {
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between'>
          <h6 className='text-lg fw-semibold mb-0'>Text</h6>
          <h6 className='text-lg fw-semibold mb-0'>Font Size</h6>
        </div>
        <div className='card-body py-16 px-24'>
          <div className='d-flex align-items-center justify-content-between mb-16'>
            <p className='text-lg text-secondary-light'>This is text</p>
            <span className='text-sm text-secondary-light fw-normal'>18px</span>
          </div>
          <div className='d-flex align-items-center justify-content-between mb-16'>
            <p className='text-md text-secondary-light'>This is text</p>
            <span className='text-sm text-secondary-light fw-normal'>16px</span>
          </div>
          <div className='d-flex align-items-center justify-content-between mb-16'>
            <p className='text-sm text-secondary-light'>This is text</p>
            <span className='text-sm text-secondary-light fw-normal'>14px</span>
          </div>
          <div className='d-flex align-items-center justify-content-between'>
            <p className='text-xs text-secondary-light'>This is text</p>
            <span className='text-sm text-secondary-light fw-normal'>12px</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextFont;
