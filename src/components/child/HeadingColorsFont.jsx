const HeadingColorsFont = () => {
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Heading Colors</h6>
        </div>
        <div className='card-body py-16 px-24'>
          <h1 className='text-primary-600 mb-16'>Heading 1</h1>
          <h2 className='text-success-main mb-16'>Heading 2</h2>
          <h3 className='text-warning-main mb-16'>Heading 3</h3>
          <h4 className='text-danger-main mb-16'>Heading 4</h4>
          <h5 className='text-info-main mb-16'>Heading 5</h5>
          <h6 className='text-secondary-light'>Heading 6</h6>
        </div>
      </div>
    </div>
  );
};

export default HeadingColorsFont;
