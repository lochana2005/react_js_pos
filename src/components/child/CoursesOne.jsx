import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";

const CoursesOne = () => {
  return (
    <div className='col-xxl-8'>
      <div className='card h-100'>
        <div className='card-header'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>Courses</h6>
            <Link
              to='#'
              className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
            >
              View All
              <Icon icon='solar:alt-arrow-right-linear' className='icon' />
            </Link>
          </div>
        </div>
        <div className='card-body p-24'>
          <div className='table-responsive scroll-sm'>
            <table className='table bordered-table mb-0'>
              <thead>
                <tr>
                  <th scope='col'>Registered On</th>
                  <th scope='col'>Instructors </th>
                  <th scope='col'>Users</th>
                  <th scope='col'>Enrolled</th>
                  <th scope='col'>Price </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className='text-secondary-light'>24 Jun 2024</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>
                      Ronald Richards
                    </span>
                  </td>
                  <td>
                    <div className='text-secondary-light'>
                      <h6 className='text-md mb-0 fw-normal'>
                        3d Illustration &amp; Art Design
                      </h6>
                      <span className='text-sm fw-normal'>34 Lessons</span>
                    </div>
                  </td>
                  <td>
                    <span className='text-secondary-light'>257</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>$29.00</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='text-secondary-light'>24 Jun 2024</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>Jerome Bell</span>
                  </td>
                  <td>
                    <div className='text-secondary-light'>
                      <h6 className='text-md mb-0 fw-normal'>
                        Advanced JavaScript Development
                      </h6>
                      <span className='text-sm fw-normal'>20 Lessons</span>
                    </div>
                  </td>
                  <td>
                    <span className='text-secondary-light'>375</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>$29.00</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='text-secondary-light'>24 Jun 2024</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>Cody Fisher</span>
                  </td>
                  <td>
                    <div className='text-secondary-light'>
                      <h6 className='text-md mb-0 fw-normal'>
                        Portrait Drawing Fundamentals{" "}
                      </h6>
                      <span className='text-sm fw-normal'>16 Lessons</span>
                    </div>
                  </td>
                  <td>
                    <span className='text-secondary-light'>220</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>$29.00</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='text-secondary-light'>24 Jun 2024</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>Floyd Miles</span>
                  </td>
                  <td>
                    <div className='text-secondary-light'>
                      <h6 className='text-md mb-0 fw-normal'>
                        Advanced App Development
                      </h6>
                      <span className='text-sm fw-normal'>25 Lessons</span>
                    </div>
                  </td>
                  <td>
                    <span className='text-secondary-light'>57</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>$29.00</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='text-secondary-light'>24 Jun 2024</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>Ralph Edwards</span>
                  </td>
                  <td>
                    <div className='text-secondary-light'>
                      <h6 className='text-md mb-0 fw-normal'>
                        HTML Fundamental Course
                      </h6>
                      <span className='text-sm fw-normal'>
                        17 Lessons&nbsp;
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className='text-secondary-light'>27</span>
                  </td>
                  <td>
                    <span className='text-secondary-light'>$29.00</span>
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

export default CoursesOne;
