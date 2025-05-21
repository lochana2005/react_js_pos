import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";

const LastTransactionOne = () => {
  return (
    <div className='col-xxl-6'>
      <div className='card h-100'>
        <div className='card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between'>
          <h6 className='text-lg fw-semibold mb-0'>Last Transaction</h6>
          <Link
            to='#'
            className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
          >
            View All
            <Icon icon='solar:alt-arrow-right-linear' className='icon' />
          </Link>
        </div>
        <div className='card-body p-24'>
          <div className='table-responsive scroll-sm'>
            <table className='table bordered-table mb-0'>
              <thead>
                <tr>
                  <th scope='col'>Transaction ID</th>
                  <th scope='col'>Date</th>
                  <th scope='col'>Status</th>
                  <th scope='col'>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5986124445445</td>
                  <td>27 Mar 2024</td>
                  <td>
                    {" "}
                    <span className='bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Pending
                    </span>
                  </td>
                  <td>$20,000.00</td>
                </tr>
                <tr>
                  <td>5986124445445</td>
                  <td>27 Mar 2024</td>
                  <td>
                    {" "}
                    <span className='bg-danger-focus text-danger-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Rejected
                    </span>
                  </td>
                  <td>$20,000.00</td>
                </tr>
                <tr>
                  <td>5986124445445</td>
                  <td>27 Mar 2024</td>
                  <td>
                    {" "}
                    <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Completed
                    </span>
                  </td>
                  <td>$20,000.00</td>
                </tr>
                <tr>
                  <td>5986124445445</td>
                  <td>27 Mar 2024</td>
                  <td>
                    {" "}
                    <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                      Completed
                    </span>
                  </td>
                  <td>$20,000.00</td>
                </tr>
                <tr>
                  <td>5986124445445</td>
                  <td>27 Mar 2024</td>
                  <td>
                    {" "}
                    <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
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
    </div>
  );
};

export default LastTransactionOne;
