import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";

const PaginationLayer = () => {
  return (
    <div className='row gy-4'>
      <div className='col-md-6'>
        <div className='card p-0 overflow-hidden position-relative radius-12'>
          <div className='card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0'>
            <h6 className='text-lg mb-0'>Default Solid</h6>
          </div>
          <div className='card-body p-24'>
            <ul className='pagination d-flex flex-wrap align-items-center gap-2 justify-content-center'>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px'
                  to='#'
                >
                  First
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px'
                  to='#'
                >
                  Previous
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  <Icon icon='ep:d-arrow-left' className='text-xl' />
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  1
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px bg-primary-600 text-white'
                  to='#'
                >
                  2
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  3
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  {" "}
                  <Icon icon='ep:d-arrow-right' className='text-xl' />
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px'
                  to='#'
                >
                  Next
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px'
                  to='#'
                >
                  Last
                </Link>
              </li>
            </ul>
            <ul className='pagination d-flex flex-wrap align-items-center gap-2 justify-content-center mt-24'>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px'
                  to='#'
                >
                  Previous
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  <Icon icon='ep:d-arrow-left' className='text-xl' />
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  1
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px bg-primary-600 text-white'
                  to='#'
                >
                  2
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  3
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  {" "}
                  <Icon icon='ep:d-arrow-right' className='text-xl' />
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px'
                  to='#'
                >
                  Next
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='card p-0 overflow-hidden position-relative radius-12'>
          <div className='card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0'>
            <h6 className='text-lg mb-0'>Outline</h6>
          </div>
          <div className='card-body p-24'>
            <ul className='pagination d-flex flex-wrap align-items-center gap-2 justify-content-center'>
              <li className='page-item'>
                <Link
                  className='page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px'
                  to='#'
                >
                  First
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px'
                  to='#'
                >
                  Previous
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  <Icon icon='ep:d-arrow-left' className='text-xl' />
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  1
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px border-primary-400 text-primary-600'
                  to='#'
                >
                  2
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  3
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  {" "}
                  <Icon icon='ep:d-arrow-right' className='text-xl' />
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px'
                  to='#'
                >
                  Next
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px'
                  to='#'
                >
                  Last
                </Link>
              </li>
            </ul>
            <ul className='pagination d-flex flex-wrap align-items-center gap-2 justify-content-center mt-24'>
              <li className='page-item'>
                <Link
                  className='page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px'
                  to='#'
                >
                  Previous
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  <Icon icon='ep:d-arrow-left' className='text-xl' />
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  1
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px border-primary-400 text-primary-600'
                  to='#'
                >
                  2
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  3
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  {" "}
                  <Icon icon='ep:d-arrow-right' className='text-xl' />
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-base border text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px'
                  to='#'
                >
                  Next
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='card p-0 overflow-hidden position-relative radius-12'>
          <div className='card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0'>
            <h6 className='text-lg mb-0'>Square with icon</h6>
          </div>
          <div className='card-body p-24'>
            <ul className='pagination d-flex flex-wrap align-items-center gap-2 justify-content-center'>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  <Icon icon='ep:d-arrow-left' className='text-xl' />
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  <Icon
                    icon='iconamoon:arrow-left-2-light'
                    className='text-xxl'
                  />
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  1
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  2
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px bg-primary-600 text-white'
                  to='#'
                >
                  3
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  4
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  5
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  {" "}
                  <Icon
                    icon='iconamoon:arrow-right-2-light'
                    className='text-xxl'
                  />{" "}
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  {" "}
                  <Icon icon='ep:d-arrow-right' className='text-xl' />
                </Link>
              </li>
            </ul>
            <ul className='pagination d-flex flex-wrap align-items-center gap-2 justify-content-center mt-24'>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  <Icon icon='ep:d-arrow-left' className='text-xl' />
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  1
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px bg-primary-600 text-white'
                  to='#'
                >
                  2
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  3
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  {" "}
                  <Icon icon='ep:d-arrow-right' className='text-xl' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='card p-0 overflow-hidden position-relative radius-12'>
          <div className='card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0'>
            <h6 className='text-lg mb-0'>Rounded with icon</h6>
          </div>
          <div className='card-body p-24'>
            <ul className='pagination d-flex flex-wrap align-items-center gap-2 justify-content-center'>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  <Icon icon='ep:d-arrow-left' className='text-xl' />
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  <Icon
                    icon='iconamoon:arrow-left-2-light'
                    className='text-xxl'
                  />
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  1
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  2
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px bg-primary-600 text-white'
                  to='#'
                >
                  3
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  4
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  5
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  {" "}
                  <Icon
                    icon='iconamoon:arrow-right-2-light'
                    className='text-xxl'
                  />{" "}
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  {" "}
                  <Icon icon='ep:d-arrow-right' className='text-xl' />
                </Link>
              </li>
            </ul>
            <ul className='pagination d-flex flex-wrap align-items-center gap-2 justify-content-center mt-24'>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  <Icon icon='ep:d-arrow-left' className='text-xl' />
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  1
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px bg-primary-600 text-white'
                  to='#'
                >
                  2
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  3
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium rounded-circle border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  {" "}
                  <Icon icon='ep:d-arrow-right' className='text-xl' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='card p-0 overflow-hidden position-relative radius-12'>
          <div className='card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0'>
            <h6 className='text-lg mb-0'>Default Solid</h6>
          </div>
          <div className='card-body p-24 text-center'>
            <div className='p-24 bg-primary-50 d-inline-block radius-12 bg-primary-success-gradient justify-content-center mx-auto'>
              <ul className='pagination d-flex flex-wrap align-items-center gap-2 justify-content-center'>
                <li className='page-item'>
                  <Link
                    className='page-link bg-base text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px'
                    to='#'
                  >
                    Page 1of 11
                  </Link>
                </li>
                <li className='page-item'>
                  <Link
                    className='page-link bg-base text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                    to='#'
                  >
                    <Icon icon='ep:d-arrow-left' className='text-xl' />
                  </Link>
                </li>
                <li className='page-item'>
                  <Link
                    className='page-link bg-base text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                    to='#'
                  >
                    1
                  </Link>
                </li>
                <li className='page-item'>
                  <Link
                    className='page-link fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px bg-primary-600 text-white'
                    to='#'
                  >
                    2
                  </Link>
                </li>
                <li className='page-item'>
                  <Link
                    className='page-link bg-base text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                    to='#'
                  >
                    3
                  </Link>
                </li>
                <li className='page-item'>
                  <Link
                    className='page-link bg-base text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                    to='#'
                  >
                    4
                  </Link>
                </li>
                <li className='page-item'>
                  <Link
                    className='page-link bg-base text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                    to='#'
                  >
                    5
                  </Link>
                </li>
                <li className='page-item'>
                  <Link
                    className='page-link bg-base text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                    to='#'
                  >
                    ...
                  </Link>
                </li>
                <li className='page-item'>
                  <Link
                    className='page-link bg-base text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                    to='#'
                  >
                    {" "}
                    <Icon icon='ep:d-arrow-right' className='text-xl' />
                  </Link>
                </li>
                <li className='page-item'>
                  <Link
                    className='page-link bg-base text-secondary-light fw-medium radius-8 border-0  py-10 d-flex align-items-center justify-content-center h-48-px'
                    to='#'
                  >
                    Last
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='card p-0 overflow-hidden position-relative radius-12'>
          <div className='card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0'>
            <h6 className='text-lg mb-0'>No Spacing</h6>
          </div>
          <div className='card-body text-center p-24'>
            <ul className='pagination d-flex flex-wrap align-items-center justify-content-center'>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px rounded-pill rounded-end-0'
                  to='#'
                >
                  <Icon icon='ep:d-arrow-left' className='text-xl' />
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  <Icon
                    icon='iconamoon:arrow-left-2-light'
                    className='text-xxl'
                  />
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  1
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px bg-primary-600 text-white'
                  to='#'
                >
                  2
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  3
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  4
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  5
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  {" "}
                  <Icon
                    icon='iconamoon:arrow-right-2-light'
                    className='text-xxl'
                  />{" "}
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px rounded-pill rounded-start-0'
                  to='#'
                >
                  {" "}
                  <Icon icon='ep:d-arrow-right' className='text-xl' />
                </Link>
              </li>
            </ul>
            <ul className='pagination d-flex flex-wrap align-items-center justify-content-center mt-24'>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px rounded-pill rounded-end-0'
                  to='#'
                >
                  <Icon
                    icon='iconamoon:arrow-left-2-light'
                    className='text-xxl'
                  />
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  1
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px bg-primary-600 text-white'
                  to='#'
                >
                  2
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  3
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  4
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px'
                  to='#'
                >
                  5
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link bg-primary-50 text-secondary-light fw-medium border-0  py-10 d-flex align-items-center justify-content-center h-48-px w-48-px rounded-pill rounded-start-0'
                  to='#'
                >
                  {" "}
                  <Icon
                    icon='iconamoon:arrow-right-2-light'
                    className='text-xxl'
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationLayer;
