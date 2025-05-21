const TablesBorderColors = () => {
  return (
    <div className='col-lg-6'>
      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title mb-0'>Tables Border Colors</h5>
        </div>
        <div className='card-body'>
          <div className='table-responsive'>
            <table className='table border-primary-table mb-0'>
              <thead>
                <tr>
                  <th scope='col'>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input className='form-check-input' type='checkbox' />
                      <label className='form-check-label'>S.L</label>
                    </div>
                  </th>
                  <th scope='col'>Transaction ID</th>
                  <th scope='col'>Date</th>
                  <th scope='col'>Status</th>
                  <th scope='col'>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input className='form-check-input' type='checkbox' />
                      <label className='form-check-label'>01</label>
                    </div>
                  </td>
                  <td>5986124445445</td>
                  <td>27 Mar 2024</td>
                  <td>
                    <span className='bg-warning-focus text-warning-main px-32 py-4 rounded-pill fw-medium text-sm'>
                      Pending
                    </span>
                  </td>
                  <td>$20,000.00</td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input className='form-check-input' type='checkbox' />
                      <label className='form-check-label'>02</label>
                    </div>
                  </td>
                  <td>5986124445445</td>
                  <td>27 Mar 2024</td>
                  <td>
                    <span className='bg-danger-focus text-danger-main px-32 py-4 rounded-pill fw-medium text-sm'>
                      Rejected
                    </span>
                  </td>
                  <td>$20,000.00</td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input className='form-check-input' type='checkbox' />
                      <label className='form-check-label'>03</label>
                    </div>
                  </td>
                  <td>5986124445445</td>
                  <td>27 Mar 2024</td>
                  <td>
                    <span className='bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm'>
                      Completed
                    </span>
                  </td>
                  <td>$20,000.00</td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input className='form-check-input' type='checkbox' />
                      <label className='form-check-label'>04</label>
                    </div>
                  </td>
                  <td>5986124445445</td>
                  <td>27 Mar 2024</td>
                  <td>
                    <span className='bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm'>
                      Completed
                    </span>
                  </td>
                  <td>$20,000.00</td>
                </tr>
                <tr>
                  <td>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input className='form-check-input' type='checkbox' />
                      <label className='form-check-label'>05</label>
                    </div>
                  </td>
                  <td>5986124445445</td>
                  <td>27 Mar 2024</td>
                  <td>
                    <span className='bg-success-focus text-success-main px-32 py-4 rounded-pill fw-medium text-sm'>
                      Completed
                    </span>
                  </td>
                  <td>$20,000.00</td>
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

export default TablesBorderColors;
