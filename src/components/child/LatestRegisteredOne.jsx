import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";

const LatestRegisteredOne = () => {
  return (
    <div className='col-xxl-9 col-xl-12'>
      <div className='card h-100'>
        <div className='card-body p-24'>
          <div className='d-flex flex-wrap align-items-center gap-1 justify-content-between mb-16'>
            <ul
              className='nav border-gradient-tab nav-pills mb-0'
              id='pills-tab'
              role='tablist'
            >
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link d-flex align-items-center active'
                  id='pills-to-do-list-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-to-do-list'
                  type='button'
                  role='tab'
                  aria-controls='pills-to-do-list'
                  aria-selected='true'
                >
                  Latest Registered
                  <span className='text-sm fw-semibold py-6 px-12 bg-neutral-500 rounded-pill text-white line-height-1 ms-12 notification-alert'>
                    35
                  </span>
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link d-flex align-items-center'
                  id='pills-recent-leads-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-recent-leads'
                  type='button'
                  role='tab'
                  aria-controls='pills-recent-leads'
                  aria-selected='false'
                  tabIndex={-1}
                >
                  Latest Subscribe
                  <span className='text-sm fw-semibold py-6 px-12 bg-neutral-500 rounded-pill text-white line-height-1 ms-12 notification-alert'>
                    35
                  </span>
                </button>
              </li>
            </ul>
            <Link
              to='#'
              className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
            >
              View All
              <Icon icon='solar:alt-arrow-right-linear' className='icon' />
            </Link>
          </div>
          <div className='tab-content' id='pills-tabContent'>
            <div
              className='tab-pane fade show active'
              id='pills-to-do-list'
              role='tabpanel'
              aria-labelledby='pills-to-do-list-tab'
              tabIndex={0}
            >
              <div className='table-responsive scroll-sm'>
                <table className='table bordered-table sm-table mb-0'>
                  <thead>
                    <tr>
                      <th scope='col'>Users </th>
                      <th scope='col'>Registered On</th>
                      <th scope='col'>Plan</th>
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
                            className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                          />
                          <div className='flex-grow-1'>
                            <h6 className='text-md mb-0 fw-medium'>
                              Dianne Russell
                            </h6>
                            <span className='text-sm text-secondary-light fw-medium'>
                              redaniel@gmail.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>27 Mar 2024</td>
                      <td>Free</td>
                      <td className='text-center'>
                        <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center'>
                          <img
                            src='assets/images/users/user2.png'
                            alt='WowDash React Vite'
                            className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                          />
                          <div className='flex-grow-1'>
                            <h6 className='text-md mb-0 fw-medium'>
                              Wade Warren
                            </h6>
                            <span className='text-sm text-secondary-light fw-medium'>
                              xterris@gmail.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>27 Mar 2024</td>
                      <td>Basic</td>
                      <td className='text-center'>
                        <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center'>
                          <img
                            src='assets/images/users/user3.png'
                            alt='WowDash React Vite'
                            className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                          />
                          <div className='flex-grow-1'>
                            <h6 className='text-md mb-0 fw-medium'>
                              Albert Flores
                            </h6>
                            <span className='text-sm text-secondary-light fw-medium'>
                              seannand@mail.ru
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>27 Mar 2024</td>
                      <td>Standard</td>
                      <td className='text-center'>
                        <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center'>
                          <img
                            src='assets/images/users/user4.png'
                            alt='WowDash React Vite'
                            className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                          />
                          <div className='flex-grow-1'>
                            <h6 className='text-md mb-0 fw-medium'>
                              Bessie Cooper{" "}
                            </h6>
                            <span className='text-sm text-secondary-light fw-medium'>
                              igerrin@gmail.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>27 Mar 2024</td>
                      <td>Business</td>
                      <td className='text-center'>
                        <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center'>
                          <img
                            src='assets/images/users/user5.png'
                            alt='WowDash React Vite'
                            className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                          />
                          <div className='flex-grow-1'>
                            <h6 className='text-md mb-0 fw-medium'>
                              Arlene McCoy
                            </h6>
                            <span className='text-sm text-secondary-light fw-medium'>
                              fellora@mail.ru
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>27 Mar 2024</td>
                      <td>Enterprise </td>
                      <td className='text-center'>
                        <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                          Active
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-recent-leads'
              role='tabpanel'
              aria-labelledby='pills-recent-leads-tab'
              tabIndex={0}
            >
              <div className='table-responsive scroll-sm'>
                <table className='table bordered-table sm-table mb-0'>
                  <thead>
                    <tr>
                      <th scope='col'>Users </th>
                      <th scope='col'>Registered On</th>
                      <th scope='col'>Plan</th>
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
                            className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                          />
                          <div className='flex-grow-1'>
                            <h6 className='text-md mb-0 fw-medium'>
                              Dianne Russell
                            </h6>
                            <span className='text-sm text-secondary-light fw-medium'>
                              redaniel@gmail.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>27 Mar 2024</td>
                      <td>Free</td>
                      <td className='text-center'>
                        <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center'>
                          <img
                            src='assets/images/users/user2.png'
                            alt='WowDash React Vite'
                            className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                          />
                          <div className='flex-grow-1'>
                            <h6 className='text-md mb-0 fw-medium'>
                              Wade Warren
                            </h6>
                            <span className='text-sm text-secondary-light fw-medium'>
                              xterris@gmail.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>27 Mar 2024</td>
                      <td>Basic</td>
                      <td className='text-center'>
                        <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center'>
                          <img
                            src='assets/images/users/user3.png'
                            alt='WowDash React Vite'
                            className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                          />
                          <div className='flex-grow-1'>
                            <h6 className='text-md mb-0 fw-medium'>
                              Albert Flores
                            </h6>
                            <span className='text-sm text-secondary-light fw-medium'>
                              seannand@mail.ru
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>27 Mar 2024</td>
                      <td>Standard</td>
                      <td className='text-center'>
                        <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center'>
                          <img
                            src='assets/images/users/user4.png'
                            alt='WowDash React Vite'
                            className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                          />
                          <div className='flex-grow-1'>
                            <h6 className='text-md mb-0 fw-medium'>
                              Bessie Cooper{" "}
                            </h6>
                            <span className='text-sm text-secondary-light fw-medium'>
                              igerrin@gmail.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>27 Mar 2024</td>
                      <td>Business</td>
                      <td className='text-center'>
                        <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center'>
                          <img
                            src='assets/images/users/user5.png'
                            alt='WowDash React Vite'
                            className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                          />
                          <div className='flex-grow-1'>
                            <h6 className='text-md mb-0 fw-medium'>
                              Arlene McCoy
                            </h6>
                            <span className='text-sm text-secondary-light fw-medium'>
                              fellora@mail.ru
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>27 Mar 2024</td>
                      <td>Enterprise </td>
                      <td className='text-center'>
                        <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                          Active
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestRegisteredOne;
