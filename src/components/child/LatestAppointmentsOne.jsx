import { Link } from "react-router-dom";

const LatestAppointmentsOne = () => {
  return (
    <div className='col-xxl-8'>
      <div className='card h-100'>
        <div className='card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between'>
          <h6 className='text-lg fw-semibold mb-0'>Latest Appointments</h6>
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
        <div className='card-body p-0'>
          <div className='table-responsive scroll-sm'>
            <table className='table bordered-table mb-0 rounded-0 border-0'>
              <thead>
                <tr>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Name
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    ID
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Date
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>General Checkup</td>
                  <td>#63254</td>
                  <td>27 Mar 2024</td>
                  <td>
                    {" "}
                    <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Blood test results </td>
                  <td>3.053 ETH</td>
                  <td>2h 5m 40s</td>
                  <td>
                    {" "}
                    <span className='bg-danger-focus text-danger-main px-10 py-4 radius-8 fw-medium text-sm'>
                      Canceled
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Heart Checkup</td>
                  <td>3.053 ETH</td>
                  <td>2h 5m 40s</td>
                  <td>
                    {" "}
                    <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Vaccination</td>
                  <td>3.053 ETH</td>
                  <td>2h 5m 40s</td>
                  <td>
                    {" "}
                    <span className='bg-danger-focus text-danger-main px-10 py-4 radius-8 fw-medium text-sm'>
                      Canceled
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Dental Cleanup</td>
                  <td>3.053 ETH</td>
                  <td>2h 5m 40s</td>
                  <td>
                    {" "}
                    <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Follow up Appointment </td>
                  <td>3.053 ETH</td>
                  <td>2h 5m 40s</td>
                  <td>
                    {" "}
                    <span className='bg-danger-focus text-danger-main px-10 py-4 radius-8 fw-medium text-sm'>
                      Canceled
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

export default LatestAppointmentsOne;
