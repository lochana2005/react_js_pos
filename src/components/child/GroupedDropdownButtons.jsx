import { Link } from "react-router-dom";

const GroupedDropdownButtons = () => {
  return (
    <div className='col-xl-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Grouped Dropdown Buttons</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex flex-wrap align-items-center gap-3'>
            <div
              className='btn-group'
              role='group'
              aria-label='Button group with nested dropdown'
            >
              <button type='button' className='btn btn-primary-600 py-11 px-20'>
                1
              </button>
              <button type='button' className='btn btn-primary-600 py-11 px-20'>
                2
              </button>
              <div className='btn-group' role='group'>
                <button
                  type='button'
                  className='btn btn-primary-600 dropdown-toggle toggle-icon'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Dropdown
                </button>
                <ul className='dropdown-menu'>
                  <li>
                    <Link
                      className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                      to='#'
                    >
                      Dropdown link
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                      to='#'
                    >
                      Dropdown link
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className='btn-group'
              role='group'
              aria-label='Button group with nested dropdown'
            >
              <button
                type='button'
                className='btn btn-outline-primary-600 py-11 px-20'
              >
                1
              </button>
              <button
                type='button'
                className='btn btn-outline-primary-600 py-11 px-20'
              >
                2
              </button>
              <div className='btn-group' role='group'>
                <button
                  type='button'
                  className='btn btn-outline-primary-600 dropdown-toggle toggle-icon'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Dropdown
                </button>
                <ul className='dropdown-menu'>
                  <li>
                    <Link
                      className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                      to='#'
                    >
                      Dropdown link
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                      to='#'
                    >
                      Dropdown link
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupedDropdownButtons;
