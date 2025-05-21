const TablesBorderColorsThree = () => {
  return (
    <div className='col-lg-12'>
      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title mb-0'>Tables Border Colors</h5>
        </div>
        <div className='card-body'>
          <div className='table-responsive'>
            <table className='table bordered-table mb-0'>
              <thead>
                <tr>
                  <th scope='col'>Users</th>
                  <th scope='col'>Invoice</th>
                  <th scope='col'>Items</th>
                  <th scope='col'>Qty</th>
                  <th scope='col'>Amount</th>
                  <th scope='col' className='text-center'>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/users/user1.png'
                        alt='WowDash React Vite'
                        className='flex-shrink-0 me-12 radius-8'
                      />
                      <span className='text-lg text-secondary-light fw-semibold flex-grow-1'>
                        Dianne Russell
                      </span>
                    </div>
                  </td>
                  <td>#6352148</td>
                  <td>iPhone 14 max</td>
                  <td>2</td>
                  <td>$5,000.00</td>
                  <td className='text-center'>
                    {" "}
                    <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Paid
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/users/user2.png'
                        alt='WowDash React Vite'
                        className='flex-shrink-0 me-12 radius-8'
                      />
                      <span className='text-lg text-secondary-light fw-semibold flex-grow-1'>
                        Wade Warren
                      </span>
                    </div>
                  </td>
                  <td>#6352148</td>
                  <td>Laptop HPH </td>
                  <td>3</td>
                  <td>$1,000.00</td>
                  <td className='text-center'>
                    {" "}
                    <span className='bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Pending
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/users/user3.png'
                        alt='WowDash React Vite'
                        className='flex-shrink-0 me-12 radius-8'
                      />
                      <span className='text-lg text-secondary-light fw-semibold flex-grow-1'>
                        Albert Flores
                      </span>
                    </div>
                  </td>
                  <td>#6352148</td>
                  <td>Smart Watch </td>
                  <td>7</td>
                  <td>$1,000.00</td>
                  <td className='text-center'>
                    {" "}
                    <span className='bg-info-focus text-info-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Shipped
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/users/user4.png'
                        alt='WowDash React Vite'
                        className='flex-shrink-0 me-12 radius-8'
                      />
                      <span className='text-lg text-secondary-light fw-semibold flex-grow-1'>
                        Bessie Cooper
                      </span>
                    </div>
                  </td>
                  <td>#6352148</td>
                  <td>Nike Air Shoe</td>
                  <td>1</td>
                  <td>$3,000.00</td>
                  <td className='text-center'>
                    {" "}
                    <span className='bg-danger-focus text-danger-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Canceled
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/users/user5.png'
                        alt='WowDash React Vite'
                        className='flex-shrink-0 me-12 radius-8'
                      />
                      <span className='text-lg text-secondary-light fw-semibold flex-grow-1'>
                        Arlene McCoy
                      </span>
                    </div>
                  </td>
                  <td>#6352148</td>
                  <td>New Headphone </td>
                  <td>5</td>
                  <td>$4,000.00</td>
                  <td className='text-center'>
                    {" "}
                    <span className='bg-danger-focus text-danger-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Canceled
                    </span>
                  </td>
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

export default TablesBorderColorsThree;
