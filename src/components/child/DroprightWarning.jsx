import { Link } from "react-router-dom";

const DroprightWarning = () => {
  return (
    <div className='col-xl-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Dropright Warning </h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex flex-wrap align-items-center gap-3'>
            <div className='btn-group dropend'>
              <button
                className='btn btn-warning-600 not-active px-18 py-11 dropdown-toggle toggle-icon icon-right'
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
            <div className='btn-group dropend'>
              <button
                className='btn btn-outline-warning-600 not-active px-18 py-11 dropdown-toggle toggle-icon icon-right'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                {" "}
                Outline Action{" "}
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
            <div className='btn-group dropend'>
              <button
                className='btn btn-warning-600 bg-warning-100 border-warning-100 text-warning-600 hover-text-warning not-active px-18 py-11 dropdown-toggle toggle-icon icon-right'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                {" "}
                Focus Action{" "}
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
            <div className='btn-group dropend'>
              <button
                className='btn text-warning-600 hover-text-warning px-18 py-11 dropdown-toggle toggle-icon icon-right'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                {" "}
                Focus Action{" "}
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

export default DroprightWarning;
