const TablesBorderColorsTwo = () => {
  return (
    <div className='col-lg-6'>
      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title mb-0'>Tables Border Colors</h5>
        </div>
        <div className='card-body'>
          <div className='table-responsive'>
            <table className='table colored-row-table mb-0'>
              <thead>
                <tr>
                  <th scope='col' className='bg-base'>
                    Registered On
                  </th>
                  <th scope='col' className='bg-base'>
                    Users
                  </th>
                  <th scope='col' className='bg-base'>
                    Email
                  </th>
                  <th scope='col' className='bg-base'>
                    Plan
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='bg-primary-light'>27 Mar 2024</td>
                  <td className='bg-primary-light'>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/users/user1.png'
                        alt='WowDash React Vite'
                        className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                      />
                      <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                        Dianne Russell
                      </h6>
                    </div>
                  </td>
                  <td className='bg-primary-light'>random@gmail.com</td>
                  <td className='bg-primary-light'>Free</td>
                </tr>
                <tr>
                  <td className='bg-success-focus'>27 Mar 2024</td>
                  <td className='bg-success-focus'>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/users/user2.png'
                        alt='WowDash React Vite'
                        className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                      />
                      <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                        Wade Warren
                      </h6>
                    </div>
                  </td>
                  <td className='bg-success-focus'>random@gmail.com</td>
                  <td className='bg-success-focus'>Basic</td>
                </tr>
                <tr>
                  <td className='bg-info-focus'>27 Mar 2024</td>
                  <td className='bg-info-focus'>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/users/user3.png'
                        alt='WowDash React Vite'
                        className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                      />
                      <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                        Albert Flores
                      </h6>
                    </div>
                  </td>
                  <td className='bg-info-focus'>random@gmail.com</td>
                  <td className='bg-info-focus'>Standard </td>
                </tr>
                <tr>
                  <td className='bg-warning-focus'>27 Mar 2024</td>
                  <td className='bg-warning-focus'>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/users/user4.png'
                        alt='WowDash React Vite'
                        className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                      />
                      <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                        Bessie Cooper
                      </h6>
                    </div>
                  </td>
                  <td className='bg-warning-focus'>random@gmail.com</td>
                  <td className='bg-warning-focus'>Business </td>
                </tr>
                <tr>
                  <td className='bg-danger-focus'>27 Mar 2024</td>
                  <td className='bg-danger-focus'>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/users/user5.png'
                        alt='WowDash React Vite'
                        className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                      />
                      <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                        Arlene McCoy
                      </h6>
                    </div>
                  </td>
                  <td className='bg-danger-focus'>random@gmail.com</td>
                  <td className='bg-danger-focus'>Enterprise </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* card end */}
    </div>
  );
};

export default TablesBorderColorsTwo;
