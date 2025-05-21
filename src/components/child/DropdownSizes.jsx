import { Link } from "react-router-dom";

const DropdownSizes = () => {
  return (
    <div className='col-xl-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Dropdown Sizes</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex flex-wrap align-items-center gap-3'>
            <div className='dropdown'>
              <button
                className='btn btn-primary-600 not-active px-18 py-11 dropdown-toggle toggle-icon'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                {" "}
                Default Action{" "}
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
                className='btn btn-primary-600 not-active px-16 py-9 dropdown-toggle toggle-icon'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                {" "}
                Default Action{" "}
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
                className='btn btn-primary-600 not-active px-12 py-6 text-sm dropdown-toggle toggle-icon'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                {" "}
                Default Action{" "}
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

export default DropdownSizes;
