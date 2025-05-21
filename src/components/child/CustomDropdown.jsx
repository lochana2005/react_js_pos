import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";

const CustomDropdown = () => {
  return (
    <div className='col-xl-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Custom Dropdown</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex flex-wrap align-items-center justify-content-between gap-3'>
            <div className='dropdown'>
              <button
                className='btn px-18 py-11 text-primary-light'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <Icon icon='entypo:dots-three-vertical' className='menu-icon' />
              </button>
              <ul className='dropdown-menu'>
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
                    Primary action
                  </Link>
                </li>
                <li>
                  <Link
                    className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                    to='#'
                  >
                    Something else
                  </Link>
                </li>
              </ul>
            </div>
            <div className='dropdown'>
              <button
                className='btn px-18 py-11 text-primary-light'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <Icon icon='ph:dots-three-outline-fill' className='menu-icon' />
              </button>
              <ul className='dropdown-menu'>
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
                    Primary action
                  </Link>
                </li>
                <li>
                  <Link
                    className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                    to='#'
                  >
                    Something else
                  </Link>
                </li>
              </ul>
            </div>
            <div className='dropdown'>
              <button
                className='btn px-18 py-11 text-primary-light'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <Icon icon='entypo:dots-three-vertical' className='menu-icon' />
              </button>
              <ul className='dropdown-menu'>
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
                    Primary action
                  </Link>
                </li>
                <li>
                  <Link
                    className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                    to='#'
                  >
                    Something else
                  </Link>
                </li>
              </ul>
            </div>
            <div className='dropdown'>
              <button
                className='btn px-18 py-11 text-primary-light'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <Icon icon='ph:dots-three-outline-fill' className='menu-icon' />
              </button>
              <ul className='dropdown-menu'>
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
                    Primary action
                  </Link>
                </li>
                <li>
                  <Link
                    className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                    to='#'
                  >
                    Something else
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDropdown;
