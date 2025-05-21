import { Link } from "react-router-dom";

const RecentTransactions = () => {
  return (
    <div className='col-xxl-8'>
      <div className='card h-100'>
        <div className='card-header'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>Recent Transactions</h6>
            <Link
              to='#'
              className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
            >
              View All
              <iconify-icon
                icon='solar:alt-arrow-right-linear'
                className='icon'
              />
            </Link>
          </div>
        </div>
        <div className='card-body p-24'>
          <div className='table-responsive scroll-sm'>
            <table className='table bordered-table mb-0'>
              <thead>
                <tr>
                  <th scope='col'>SL</th>
                  <th scope='col'>Date </th>
                  <th scope='col'>Payment Type</th>
                  <th scope='col'>Paid Amount</th>
                  <th scope='col'>Due Amount</th>
                  <th scope='col'>Payable Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className='text-secondary-light'>1</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>21 Jun 2024</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>Cash</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>$0.00</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>$150.00</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>$150.00</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='text-secondary-light'>2</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>21 Jun 2024</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>Bank</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>$570 </span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>$0.00</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>$570.00</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='text-secondary-light'>3</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>21 Jun 2024</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>PayPal</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>$300.00</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>$100.00</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>$200.00</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='text-secondary-light'>4</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>21 Jun 2024</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>Cash</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>$0.00</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>$150.00</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>$150.00</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='text-secondary-light'>3</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>21 Jun 2024</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>PayPal</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>$300.00</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>$100.00</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>$200.00</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
