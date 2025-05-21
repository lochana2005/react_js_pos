const ColoredLists = () => {
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Colored Lists</h6>
        </div>
        <div className='card-body p-24'>
          <ul className='list-group radius-8'>
            <li className='list-group-item border text-secondary-light p-16 bg-success-100 text-success-600 border-bottom-0'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src='assets/images/lists/list-img1.png'
                  className='w-32-px h-32-px rounded-circle'
                  alt='WowDash React Vite'
                />
                Push Notification (This is push notifications)
              </div>
            </li>
            <li className='list-group-item border text-secondary-light p-16 bg-info-100 text-info-600 border-bottom-0'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src='assets/images/lists/list-img2.png'
                  className='w-32-px h-32-px rounded-circle'
                  alt='WowDash React Vite'
                />
                New Orders confirmed (This is Orders confirmed)
              </div>
            </li>
            <li className='list-group-item border text-secondary-light p-16 bg-lilac-100 text-lilac-600 border-bottom-0'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src='assets/images/lists/list-img3.png'
                  className='w-32-px h-32-px rounded-circle'
                  alt='WowDash React Vite'
                />
                Security Access (This is Security Access)
              </div>
            </li>
            <li className='list-group-item border text-secondary-light p-16 bg-warning-100 text-warning-600 border-bottom-0'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src='assets/images/lists/list-img4.png'
                  className='w-32-px h-32-px rounded-circle'
                  alt='WowDash React Vite'
                />
                Storage Folder (This is Storage Folder)
              </div>
            </li>
            <li className='list-group-item border text-secondary-light p-16 bg-danger-100 text-danger-600'>
              <div className='d-flex align-items-center gap-2'>
                <img
                  src='assets/images/lists/list-img5.png'
                  className='w-32-px h-32-px rounded-circle'
                  alt='WowDash React Vite'
                />
                Forward Message (This is Forward Message)
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ColoredLists;
