const StripedRows = () => {
  return (
    <div className='col-lg-6'>
      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title mb-0'>Striped Rows</h5>
        </div>
        <div className='card-body'>
          <div className='table-responsive'>
            <table className='table striped-table mb-0'>
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
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/product/product-img1.png'
                        alt='WowDash React Vite'
                        className='flex-shrink-0 me-12 radius-8 me-12'
                      />
                      <div className='flex-grow-1'>
                        <h6 className='text-md mb-0 fw-normal'>Blue t-shirt</h6>
                        <span className='text-sm text-secondary-light fw-normal'>
                          Fashion
                        </span>
                      </div>
                    </div>
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
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/product/product-img2.png'
                        alt='WowDash React Vite'
                        className='flex-shrink-0 me-12 radius-8 me-12'
                      />
                      <div className='flex-grow-1'>
                        <h6 className='text-md mb-0 fw-normal'>
                          Nike Air Shoe
                        </h6>
                        <span className='text-sm text-secondary-light fw-normal'>
                          Fashion
                        </span>
                      </div>
                    </div>
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
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/product/product-img3.png'
                        alt='WowDash React Vite'
                        className='flex-shrink-0 me-12 radius-8 me-12'
                      />
                      <div className='flex-grow-1'>
                        <h6 className='text-md mb-0 fw-normal'>
                          Woman Dresses
                        </h6>
                        <span className='text-sm text-secondary-light fw-normal'>
                          Fashion
                        </span>
                      </div>
                    </div>
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
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/product/product-img4.png'
                        alt='WowDash React Vite'
                        className='flex-shrink-0 me-12 radius-8 me-12'
                      />
                      <div className='flex-grow-1'>
                        <h6 className='text-md mb-0 fw-normal'>Smart Watch</h6>
                        <span className='text-sm text-secondary-light fw-normal'>
                          Fashion
                        </span>
                      </div>
                    </div>
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
                    <div className='d-flex align-items-center'>
                      <img
                        src='assets/images/product/product-img5.png'
                        alt='WowDash React Vite'
                        className='flex-shrink-0 me-12 radius-8 me-12'
                      />
                      <div className='flex-grow-1'>
                        <h6 className='text-md mb-0 fw-normal'>Hoodie Rose</h6>
                        <span className='text-sm text-secondary-light fw-normal'>
                          Fashion
                        </span>
                      </div>
                    </div>
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

export default StripedRows;
