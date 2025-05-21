const StripedRowsTwo = () => {
  return (
    <div className='col-lg-6'>
      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title mb-0'>Striped Rows</h5>
        </div>
        <div className='card-body'>
          <div className='table-responsive'>
            <table className='table vertical-striped-table mb-0'>
              <thead>
                <tr>
                  <th scope='col'>Items</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Discount </th>
                  <th scope='col'>Sold</th>
                  <th scope='col' className='text-center'>
                    Total Orders
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6 className='text-md mb-0 fw-normal'>Blue t-shirt</h6>
                    <span className='text-sm text-secondary-light fw-normal'>
                      Fashion
                    </span>
                  </td>
                  <td>$500.00</td>
                  <td>15%</td>
                  <td>300</td>
                  <td className='text-center'>
                    <span className='bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm'>
                      70
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className='text-md mb-0 fw-normal'>Blue t-shirt</h6>
                    <span className='text-sm text-secondary-light fw-normal'>
                      Fashion
                    </span>
                  </td>
                  <td>$150.00</td>
                  <td>N/A</td>
                  <td>200</td>
                  <td className='text-center'>
                    <span className='bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm'>
                      70
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className='text-md mb-0 fw-normal'>Blue t-shirt</h6>
                    <span className='text-sm text-secondary-light fw-normal'>
                      Fashion
                    </span>
                  </td>
                  <td>$300.00</td>
                  <td>$50.00</td>
                  <td>1500</td>
                  <td className='text-center'>
                    <span className='bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm'>
                      70
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className='text-md mb-0 fw-normal'>Blue t-shirt</h6>
                    <span className='text-sm text-secondary-light fw-normal'>
                      Fashion
                    </span>
                  </td>
                  <td>$400.00</td>
                  <td>$50.00</td>
                  <td>700</td>
                  <td className='text-center'>
                    <span className='bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm'>
                      70
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className='text-md mb-0 fw-normal'>Blue t-shirt</h6>
                    <span className='text-sm text-secondary-light fw-normal'>
                      Fashion
                    </span>
                  </td>
                  <td>$300.00</td>
                  <td>25%</td>
                  <td>500</td>
                  <td className='text-center'>
                    <span className='bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm'>
                      70
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

export default StripedRowsTwo;
