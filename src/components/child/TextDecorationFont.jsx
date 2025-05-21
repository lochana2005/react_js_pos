const TextDecorationFont = () => {
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Text Decoration</h6>
        </div>
        <div className='card-body py-16 px-24'>
          <p className='mb-16 text-secondary-light fw-normal'>
            Use text-decoration-underline, text-decoration-line-through, or
            text-decoration-none class to decorate text in components
            respectively.
          </p>
          <p className='mb-16 text-primary-light fw-normal text-decoration-underline'>
            This text has a line underneath it.
          </p>
          <p className='mb-16 text-primary-light fw-normal text-decoration-line-through'>
            This text has a line going through it.
          </p>
          <p className='text-secondary-light fw-normal'>
            This link has its text decoration removed
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextDecorationFont;
