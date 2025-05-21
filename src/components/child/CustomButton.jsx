const CustomButton = () => {
  return (
    <div className='col-xl-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Buttons Group</h6>
        </div>
        <div className='card-body p-24'>
          <button
            type='button'
            className='btn btn-primary-600 radius-8 px-20 py-11'
          >
            Custom Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomButton;
