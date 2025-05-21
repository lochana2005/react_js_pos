const ActiveList = () => {
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Active List</h6>
        </div>
        <div className='card-body p-24'>
          <ul className='list-group radius-8'>
            <li className='list-group-item border text-secondary-light p-16 bg-primary-600 border-bottom-0 text-white'>
              1. This is list trust fund seitan letterpress, keytar raw denim
              keffiye
            </li>
            <li className='list-group-item border text-secondary-light p-16 bg-base border-bottom-0'>
              2. This is list trust fund seitan letterpress, keytar raw denim{" "}
            </li>
            <li className='list-group-item border text-secondary-light p-16 bg-base border-bottom-0'>
              3. This is list trust fund seitan letterpress, keytar raw{" "}
            </li>
            <li className='list-group-item border text-secondary-light p-16 bg-base border-bottom-0'>
              4. This is list trust fund seitan letterpress, keytar raw denim
              keffiye
            </li>
            <li className='list-group-item border text-secondary-light p-16 bg-base'>
              5. This is list trust fund seitan letterpress, keytar raw denim{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActiveList;
