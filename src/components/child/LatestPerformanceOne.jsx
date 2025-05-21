import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";

const LatestPerformanceOne = () => {
  return (
    <div className='col-xxl-6'>
      <div className='card h-100'>
        <div className='card-header border-bottom bg-base ps-0 py-0 pe-24 d-flex align-items-center justify-content-between'>
          <ul
            className='nav bordered-tab nav-pills mb-0'
            id='pills-tab'
            role='tablist'
          >
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link active'
                id='pills-to-do-list-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-to-do-list'
                type='button'
                role='tab'
                aria-controls='pills-to-do-list'
                aria-selected='true'
              >
                All Item
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link'
                id='pills-recent-leads-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-recent-leads'
                type='button'
                role='tab'
                aria-controls='pills-recent-leads'
                aria-selected='false'
                tabIndex={-1}
              >
                Best Match
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
        <div className='card-body p-24'>
          <div className='tab-content' id='pills-tabContent'>
            <div
              className='tab-pane fade show active'
              id='pills-to-do-list'
              role='tabpanel'
              aria-labelledby='pills-to-do-list-tab'
              tabIndex={0}
            >
              <div className='table-responsive scroll-sm'>
                <table className='table bordered-table mb-0'>
                  <thead>
                    <tr>
                      <th scope='col'>Task Name </th>
                      <th scope='col'>Assigned To </th>
                      <th scope='col'>Due Date</th>
                      <th scope='col'>Status</th>
                      <th scope='col'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>
                          <span className='text-md d-block line-height-1 fw-medium text-primary-light text-w-200-px'>
                            Hotel Management System
                          </span>
                          <span className='text-sm d-block fw-normal text-secondary-light'>
                            #5632
                          </span>
                        </div>
                      </td>
                      <td>Kathryn Murphy</td>
                      <td>27 Mar 2024</td>
                      <td>
                        {" "}
                        <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                          Active
                        </span>
                      </td>
                      <td className='text-center text-neutral-700 text-xl'>
                        <div className='dropdown'>
                          <button
                            type='button'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'
                          >
                            <Icon
                              icon='ph:dots-three-outline-vertical-fill'
                              className='icon'
                            />
                          </button>
                          <ul className='dropdown-menu p-12 border bg-base shadow'>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Another action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Something else here
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <span className='text-md d-block line-height-1 fw-medium text-primary-light text-w-200-px'>
                            Hotel Management System
                          </span>
                          <span className='text-sm d-block fw-normal text-secondary-light'>
                            #5632
                          </span>
                        </div>
                      </td>
                      <td>Darlene Robertson</td>
                      <td>27 Mar 2024</td>
                      <td>
                        {" "}
                        <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                          Active
                        </span>
                      </td>
                      <td className='text-center text-neutral-700 text-xl'>
                        <div className='dropdown'>
                          <button
                            type='button'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'
                          >
                            <Icon
                              icon='ph:dots-three-outline-vertical-fill'
                              className='icon'
                            />
                          </button>
                          <ul className='dropdown-menu p-12 border bg-base shadow'>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Another action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Something else here
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <span className='text-md d-block line-height-1 fw-medium text-primary-light text-w-200-px'>
                            Hotel Management System
                          </span>
                          <span className='text-sm d-block fw-normal text-secondary-light'>
                            #5632
                          </span>
                        </div>
                      </td>
                      <td>Courtney Henry</td>
                      <td>27 Mar 2024</td>
                      <td>
                        {" "}
                        <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                          Active
                        </span>
                      </td>
                      <td className='text-center text-neutral-700 text-xl'>
                        <div className='dropdown'>
                          <button
                            type='button'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'
                          >
                            <Icon
                              icon='ph:dots-three-outline-vertical-fill'
                              className='icon'
                            />
                          </button>
                          <ul className='dropdown-menu p-12 border bg-base shadow'>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Another action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Something else here
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <span className='text-md d-block line-height-1 fw-medium text-primary-light text-w-200-px'>
                            Hotel Management System
                          </span>
                          <span className='text-sm d-block fw-normal text-secondary-light'>
                            #5632
                          </span>
                        </div>
                      </td>
                      <td>Jenny Wilson</td>
                      <td>27 Mar 2024</td>
                      <td>
                        {" "}
                        <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                          Active
                        </span>
                      </td>
                      <td className='text-center text-neutral-700 text-xl'>
                        <div className='dropdown'>
                          <button
                            type='button'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'
                          >
                            <Icon
                              icon='ph:dots-three-outline-vertical-fill'
                              className='icon'
                            />
                          </button>
                          <ul className='dropdown-menu p-12 border bg-base shadow'>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Another action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Something else here
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <span className='text-md d-block line-height-1 fw-medium text-primary-light text-w-200-px'>
                            Hotel Management System
                          </span>
                          <span className='text-sm d-block fw-normal text-secondary-light'>
                            #5632
                          </span>
                        </div>
                      </td>
                      <td>Leslie Alexander</td>
                      <td>27 Mar 2024</td>
                      <td>
                        {" "}
                        <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                          Active
                        </span>
                      </td>
                      <td className='text-center text-neutral-700 text-xl'>
                        <div className='dropdown'>
                          <button
                            type='button'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'
                          >
                            <Icon
                              icon='ph:dots-three-outline-vertical-fill'
                              className='icon'
                            />
                          </button>
                          <ul className='dropdown-menu p-12 border bg-base shadow'>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Another action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Something else here
                              </Link>
                            </li>
                          </ul>
                        </div>
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
                <table className='table bordered-table mb-0'>
                  <thead>
                    <tr>
                      <th scope='col'>Task Name </th>
                      <th scope='col'>Assigned To </th>
                      <th scope='col'>Due Date</th>
                      <th scope='col'>Status</th>
                      <th scope='col'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>
                          <span className='text-md d-block line-height-1 fw-medium text-primary-light text-w-200-px'>
                            Hotel Management System
                          </span>
                          <span className='text-sm d-block fw-normal text-secondary-light'>
                            #5632
                          </span>
                        </div>
                      </td>
                      <td>Kathryn Murphy</td>
                      <td>27 Mar 2024</td>
                      <td>
                        {" "}
                        <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                          Active
                        </span>
                      </td>
                      <td className='text-center text-neutral-700 text-xl'>
                        <div className='dropdown'>
                          <button
                            type='button'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'
                          >
                            <Icon
                              icon='ph:dots-three-outline-vertical-fill'
                              className='icon'
                            />
                          </button>
                          <ul className='dropdown-menu p-12 border bg-base shadow'>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Another action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Something else here
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <span className='text-md d-block line-height-1 fw-medium text-primary-light text-w-200-px'>
                            Hotel Management System
                          </span>
                          <span className='text-sm d-block fw-normal text-secondary-light'>
                            #5632
                          </span>
                        </div>
                      </td>
                      <td>Darlene Robertson</td>
                      <td>27 Mar 2024</td>
                      <td>
                        {" "}
                        <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                          Active
                        </span>
                      </td>
                      <td className='text-center text-neutral-700 text-xl'>
                        <div className='dropdown'>
                          <button
                            type='button'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'
                          >
                            <Icon
                              icon='ph:dots-three-outline-vertical-fill'
                              className='icon'
                            />
                          </button>
                          <ul className='dropdown-menu p-12 border bg-base shadow'>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Another action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Something else here
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <span className='text-md d-block line-height-1 fw-medium text-primary-light text-w-200-px'>
                            Hotel Management System
                          </span>
                          <span className='text-sm d-block fw-normal text-secondary-light'>
                            #5632
                          </span>
                        </div>
                      </td>
                      <td>Courtney Henry</td>
                      <td>27 Mar 2024</td>
                      <td>
                        {" "}
                        <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                          Active
                        </span>
                      </td>
                      <td className='text-center text-neutral-700 text-xl'>
                        <div className='dropdown'>
                          <button
                            type='button'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'
                          >
                            <Icon
                              icon='ph:dots-three-outline-vertical-fill'
                              className='icon'
                            />
                          </button>
                          <ul className='dropdown-menu p-12 border bg-base shadow'>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Another action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Something else here
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <span className='text-md d-block line-height-1 fw-medium text-primary-light text-w-200-px'>
                            Hotel Management System
                          </span>
                          <span className='text-sm d-block fw-normal text-secondary-light'>
                            #5632
                          </span>
                        </div>
                      </td>
                      <td>Jenny Wilson</td>
                      <td>27 Mar 2024</td>
                      <td>
                        {" "}
                        <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                          Active
                        </span>
                      </td>
                      <td className='text-center text-neutral-700 text-xl'>
                        <div className='dropdown'>
                          <button
                            type='button'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'
                          >
                            <Icon
                              icon='ph:dots-three-outline-vertical-fill'
                              className='icon'
                            />
                          </button>
                          <ul className='dropdown-menu p-12 border bg-base shadow'>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Another action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Something else here
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <span className='text-md d-block line-height-1 fw-medium text-primary-light text-w-200-px'>
                            Hotel Management System
                          </span>
                          <span className='text-sm d-block fw-normal text-secondary-light'>
                            #5632
                          </span>
                        </div>
                      </td>
                      <td>Leslie Alexander</td>
                      <td>27 Mar 2024</td>
                      <td>
                        {" "}
                        <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
                          Active
                        </span>
                      </td>
                      <td className='text-center text-neutral-700 text-xl'>
                        <div className='dropdown'>
                          <button
                            type='button'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'
                          >
                            <Icon
                              icon='ph:dots-three-outline-vertical-fill'
                              className='icon'
                            />
                          </button>
                          <ul className='dropdown-menu p-12 border bg-base shadow'>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Another action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                                to='#'
                              >
                                Something else here
                              </Link>
                            </li>
                          </ul>
                        </div>
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

export default LatestPerformanceOne;
