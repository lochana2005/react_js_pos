import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";

const RecentTransactionOne = () => {
  return (
    <div className='col-xxl-12'>
      <div className='card h-100'>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>Recent Transaction</h6>
            <Link
              to='#'
              className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
            >
              View All
              <Icon icon='solar:alt-arrow-right-linear' className='icon' />
            </Link>
          </div>
          <div className='table-responsive scroll-sm'>
            <table className='table bordered-table mb-0 xsm-table'>
              <thead>
                <tr>
                  <th scope='col'>Ast</th>
                  <th scope='col'>Date &amp; Time</th>
                  <th scope='col'>Amount</th>
                  <th scope='col'>Address</th>
                  <th scope='col' className='text-center'>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className='d-flex align-items-center gap-2'>
                      <span className='text-success-main bg-success-focus w-32-px h-32-px d-flex align-items-center justify-content-center rounded-circle text-xl'>
                        <Icon icon='tabler:arrow-up-right' className='icon' />
                      </span>
                      <span className='fw-medium'>Bitcoin</span>
                    </div>
                  </td>
                  <td>
                    <span className='text-primary-light d-block fw-medium'>
                      10:34 AM
                    </span>
                    <span className='text-secondary-light text-sm'>
                      27 Mar 2024
                    </span>
                  </td>
                  <td>
                    <span className='text-primary-light d-block fw-medium'>
                      + 0.431 BTC
                    </span>
                    <span className='text-secondary-light text-sm'>
                      $3,480.90
                    </span>
                  </td>
                  <td>Abc.........np562</td>
                  <td className='text-center'>
                    <span className='bg-success-focus text-success-main px-16 py-4 radius-4 fw-medium text-sm'>
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center gap-2'>
                      <span className='text-danger-main bg-danger-focus w-32-px h-32-px d-flex align-items-center justify-content-center rounded-circle text-xl'>
                        <Icon icon='tabler:arrow-down-left' className='icon' />
                      </span>
                      <span className='fw-medium'>Bitcoin</span>
                    </div>
                  </td>
                  <td>
                    <span className='text-primary-light d-block fw-medium'>
                      10:34 AM
                    </span>
                    <span className='text-secondary-light text-sm'>
                      27 Mar 2024
                    </span>
                  </td>
                  <td>
                    <span className='text-primary-light d-block fw-medium'>
                      + 0.431 BTC
                    </span>
                    <span className='text-secondary-light text-sm'>
                      $3,480.90
                    </span>
                  </td>
                  <td>Abc.........np562</td>
                  <td className='text-center'>
                    <span className='bg-danger-focus text-danger-main px-16 py-4 radius-4 fw-medium text-sm'>
                      Terminated
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center gap-2'>
                      <span className='text-success-main bg-success-focus w-32-px h-32-px d-flex align-items-center justify-content-center rounded-circle text-xl'>
                        <Icon icon='tabler:arrow-up-right' className='icon' />
                      </span>
                      <span className='fw-medium'>Bitcoin</span>
                    </div>
                  </td>
                  <td>
                    <span className='text-primary-light d-block fw-medium'>
                      10:34 AM
                    </span>
                    <span className='text-secondary-light text-sm'>
                      27 Mar 2024
                    </span>
                  </td>
                  <td>
                    <span className='text-primary-light d-block fw-medium'>
                      + 0.431 BTC
                    </span>
                    <span className='text-secondary-light text-sm'>
                      $3,480.90
                    </span>
                  </td>
                  <td>Abc.........np562</td>
                  <td className='text-center'>
                    <span className='bg-success-focus text-success-main px-16 py-4 radius-4 fw-medium text-sm'>
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center gap-2'>
                      <span className='text-danger-main bg-danger-focus w-32-px h-32-px d-flex align-items-center justify-content-center rounded-circle text-xl'>
                        <Icon icon='tabler:arrow-down-left' className='icon' />
                      </span>
                      <span className='fw-medium'>Bitcoin</span>
                    </div>
                  </td>
                  <td>
                    <span className='text-primary-light d-block fw-medium'>
                      10:34 AM
                    </span>
                    <span className='text-secondary-light text-sm'>
                      27 Mar 2024
                    </span>
                  </td>
                  <td>
                    <span className='text-primary-light d-block fw-medium'>
                      + 0.431 BTC
                    </span>
                    <span className='text-secondary-light text-sm'>
                      $3,480.90
                    </span>
                  </td>
                  <td>Abc.........np562</td>
                  <td className='text-center'>
                    <span className='bg-danger-focus text-danger-main px-16 py-4 radius-4 fw-medium text-sm'>
                      Terminated
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center gap-2'>
                      <span className='text-success-main bg-success-focus w-32-px h-32-px d-flex align-items-center justify-content-center rounded-circle text-xl'>
                        <Icon icon='tabler:arrow-up-right' className='icon' />
                      </span>
                      <span className='fw-medium'>Bitcoin</span>
                    </div>
                  </td>
                  <td>
                    <span className='text-primary-light d-block fw-medium'>
                      10:34 AM
                    </span>
                    <span className='text-secondary-light text-sm'>
                      27 Mar 2024
                    </span>
                  </td>
                  <td>
                    <span className='text-primary-light d-block fw-medium'>
                      + 0.431 BTC
                    </span>
                    <span className='text-secondary-light text-sm'>
                      $3,480.90
                    </span>
                  </td>
                  <td>Abc.........np562</td>
                  <td className='text-center'>
                    <span className='bg-success-focus text-success-main px-16 py-4 radius-4 fw-medium text-sm'>
                      Completed
                    </span>
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

export default RecentTransactionOne;
