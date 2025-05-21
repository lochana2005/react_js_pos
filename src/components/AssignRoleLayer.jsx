import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const AssignRoleLayer = () => {
  return (
    <div className='card h-100 p-0 radius-12'>
      <div className='card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between'>
        <div className='d-flex align-items-center flex-wrap gap-3'>
          <span className='text-md fw-medium text-secondary-light mb-0'>
            Show
          </span>
          <select
            className='form-select form-select-sm w-auto ps-12 py-6 radius-12 h-40-px'
            defaultValue='1'
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </select>
          <form className='navbar-search'>
            <input
              type='text'
              className='bg-base h-40-px w-auto'
              name='search'
              placeholder='Search'
            />
            <Icon icon='ion:search-outline' className='icon' />
          </form>
          <select
            className='form-select form-select-sm w-auto ps-12 py-6 radius-12 h-40-px'
            defaultValue='Status'
          >
            <option value='Status' disabled>
              Status
            </option>
            <option value='Active'>Active</option>
            <option value='Inactive'>Inactive</option>
          </select>
        </div>
      </div>
      <div className='card-body p-24'>
        <div className='table-responsive scroll-sm'>
          <table className='table bordered-table sm-table mb-0'>
            <thead>
              <tr>
                <th scope='col'>
                  <div className='d-flex align-items-center gap-10'>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input radius-4 border input-form-dark'
                        type='checkbox'
                        name='checkbox'
                        id='selectAll'
                      />
                    </div>
                    S.L
                  </div>
                </th>
                <th scope='col'>Username</th>
                <th scope='col' className='text-center'>
                  Role Permission
                </th>
                <th scope='col' className='text-center'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className='d-flex align-items-center gap-10'>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input radius-4 border border-neutral-400'
                        type='checkbox'
                        name='checkbox'
                      />
                    </div>
                    01
                  </div>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <img
                      src='assets/images/user-list/user-list1.png'
                      alt='WowDash React Vite'
                      className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                    />
                    <div className='flex-grow-1'>
                      <span className='text-md mb-0 fw-normal text-secondary-light'>
                        Kathryn Murphy
                      </span>
                    </div>
                  </div>
                </td>
                <td className='text-center'>Waiter</td>
                <td className='text-center'>
                  <div className='dropdown'>
                    <button
                      className='btn btn-outline-primary-600 not-active px-18 py-11 dropdown-toggle toggle-icon'
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Assign Role
                    </button>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Waiter
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Manager
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Project Manager
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Game Developer
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Head
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Management
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center gap-10'>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input radius-4 border border-neutral-400'
                        type='checkbox'
                        name='checkbox'
                      />
                    </div>
                    01
                  </div>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <img
                      src='assets/images/user-list/user-list2.png'
                      alt='WowDash React Vite'
                      className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                    />
                    <div className='flex-grow-1'>
                      <span className='text-md mb-0 fw-normal text-secondary-light'>
                        Annette Black
                      </span>
                    </div>
                  </div>
                </td>
                <td className='text-center'>manager</td>
                <td className='text-center'>
                  <div className='dropdown'>
                    <button
                      className='btn btn-outline-primary-600 not-active px-18 py-11 dropdown-toggle toggle-icon'
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Assign Role
                    </button>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Waiter
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Manager
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Project Manager
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Game Developer
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Head
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Management
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center gap-10'>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input radius-4 border border-neutral-400'
                        type='checkbox'
                        name='checkbox'
                      />
                    </div>
                    01
                  </div>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <img
                      src='assets/images/user-list/user-list3.png'
                      alt='WowDash React Vite'
                      className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                    />
                    <div className='flex-grow-1'>
                      <span className='text-md mb-0 fw-normal text-secondary-light'>
                        Ronald Richards
                      </span>
                    </div>
                  </div>
                </td>
                <td className='text-center'>Project Manager</td>
                <td className='text-center'>
                  <div className='dropdown'>
                    <button
                      className='btn btn-outline-primary-600 not-active px-18 py-11 dropdown-toggle toggle-icon'
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Assign Role
                    </button>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Waiter
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Manager
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Project Manager
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Game Developer
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Head
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Management
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center gap-10'>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input radius-4 border border-neutral-400'
                        type='checkbox'
                        name='checkbox'
                      />
                    </div>
                    01
                  </div>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <img
                      src='assets/images/user-list/user-list4.png'
                      alt='WowDash React Vite'
                      className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                    />
                    <div className='flex-grow-1'>
                      <span className='text-md mb-0 fw-normal text-secondary-light'>
                        Eleanor Pena
                      </span>
                    </div>
                  </div>
                </td>
                <td className='text-center'>Game Developer</td>
                <td className='text-center'>
                  <div className='dropdown'>
                    <button
                      className='btn btn-outline-primary-600 not-active px-18 py-11 dropdown-toggle toggle-icon'
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Assign Role
                    </button>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Waiter
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Manager
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Project Manager
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Game Developer
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Head
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Management
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center gap-10'>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input radius-4 border border-neutral-400'
                        type='checkbox'
                        name='checkbox'
                      />
                    </div>
                    01
                  </div>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <img
                      src='assets/images/user-list/user-list5.png'
                      alt='WowDash React Vite'
                      className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                    />
                    <div className='flex-grow-1'>
                      <span className='text-md mb-0 fw-normal text-secondary-light'>
                        Leslie Alexander
                      </span>
                    </div>
                  </div>
                </td>
                <td className='text-center'>Head</td>
                <td className='text-center'>
                  <div className='dropdown'>
                    <button
                      className='btn btn-outline-primary-600 not-active px-18 py-11 dropdown-toggle toggle-icon'
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Assign Role
                    </button>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Waiter
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Manager
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Project Manager
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Game Developer
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Head
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Management
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center gap-10'>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input radius-4 border border-neutral-400'
                        type='checkbox'
                        name='checkbox'
                      />
                    </div>
                    01
                  </div>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <img
                      src='assets/images/user-list/user-list6.png'
                      alt='WowDash React Vite'
                      className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                    />
                    <div className='flex-grow-1'>
                      <span className='text-md mb-0 fw-normal text-secondary-light'>
                        Albert Flores
                      </span>
                    </div>
                  </div>
                </td>
                <td className='text-center'>Management</td>
                <td className='text-center'>
                  <div className='dropdown'>
                    <button
                      className='btn btn-outline-primary-600 not-active px-18 py-11 dropdown-toggle toggle-icon'
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Assign Role
                    </button>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Waiter
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Manager
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Project Manager
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Game Developer
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Head
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Management
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center gap-10'>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input radius-4 border border-neutral-400'
                        type='checkbox'
                        name='checkbox'
                      />
                    </div>
                    01
                  </div>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <img
                      src='assets/images/user-list/user-list7.png'
                      alt='WowDash React Vite'
                      className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                    />
                    <div className='flex-grow-1'>
                      <span className='text-md mb-0 fw-normal text-secondary-light'>
                        Jacob Jones
                      </span>
                    </div>
                  </div>
                </td>
                <td className='text-center'>Waiter</td>
                <td className='text-center'>
                  <div className='dropdown'>
                    <button
                      className='btn btn-outline-primary-600 not-active px-18 py-11 dropdown-toggle toggle-icon'
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Assign Role
                    </button>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Waiter
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Manager
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Project Manager
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Game Developer
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Head
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Management
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center gap-10'>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input radius-4 border border-neutral-400'
                        type='checkbox'
                        name='checkbox'
                      />
                    </div>
                    01
                  </div>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <img
                      src='assets/images/user-list/user-list8.png'
                      alt='WowDash React Vite'
                      className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                    />
                    <div className='flex-grow-1'>
                      <span className='text-md mb-0 fw-normal text-secondary-light'>
                        Jerome Bell
                      </span>
                    </div>
                  </div>
                </td>
                <td className='text-center'>Waiter</td>
                <td className='text-center'>
                  <div className='dropdown'>
                    <button
                      className='btn btn-outline-primary-600 not-active px-18 py-11 dropdown-toggle toggle-icon'
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Assign Role
                    </button>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Waiter
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Manager
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Project Manager
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Game Developer
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Head
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Management
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center gap-10'>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input radius-4 border border-neutral-400'
                        type='checkbox'
                        name='checkbox'
                      />
                    </div>
                    01
                  </div>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <img
                      src='assets/images/user-list/user-list2.png'
                      alt='WowDash React Vite'
                      className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                    />
                    <div className='flex-grow-1'>
                      <span className='text-md mb-0 fw-normal text-secondary-light'>
                        Marvin McKinney
                      </span>
                    </div>
                  </div>
                </td>
                <td className='text-center'>Waiter</td>
                <td className='text-center'>
                  <div className='dropdown'>
                    <button
                      className='btn btn-outline-primary-600 not-active px-18 py-11 dropdown-toggle toggle-icon'
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Assign Role
                    </button>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Waiter
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Manager
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Project Manager
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Game Developer
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Head
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Management
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center gap-10'>
                    <div className='form-check style-check d-flex align-items-center'>
                      <input
                        className='form-check-input radius-4 border border-neutral-400'
                        type='checkbox'
                        name='checkbox'
                      />
                    </div>
                    01
                  </div>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <img
                      src='assets/images/user-list/user-list10.png'
                      alt='WowDash React Vite'
                      className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                    />
                    <div className='flex-grow-1'>
                      <span className='text-md mb-0 fw-normal text-secondary-light'>
                        Cameron Williamson
                      </span>
                    </div>
                  </div>
                </td>
                <td className='text-center'>Admin</td>
                <td className='text-center'>
                  <div className='dropdown'>
                    <button
                      className='btn btn-outline-primary-600 not-active px-18 py-11 dropdown-toggle toggle-icon'
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Assign Role
                    </button>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Waiter
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Manager
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Project Manager
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Game Developer
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Head
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900'
                          to='#'
                        >
                          Management
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='d-flex align-items-center justify-content-between flex-wrap gap-2 mt-24'>
          <span>Showing 1 to 10 of 12 entries</span>
          <ul className='pagination d-flex flex-wrap align-items-center gap-2 justify-content-center'>
            <li className='page-item'>
              <Link
                className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                to='#'
              >
                <Icon icon='ep:d-arrow-left' className='' />
              </Link>
            </li>
            <li className='page-item'>
              <Link
                className='page-link text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md bg-primary-600 text-white'
                to='#'
              >
                1
              </Link>
            </li>
            <li className='page-item'>
              <Link
                className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px'
                to='#'
              >
                2
              </Link>
            </li>
            <li className='page-item'>
              <Link
                className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                to='#'
              >
                3
              </Link>
            </li>
            <li className='page-item'>
              <Link
                className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                to='#'
              >
                4
              </Link>
            </li>
            <li className='page-item'>
              <Link
                className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                to='#'
              >
                5
              </Link>
            </li>
            <li className='page-item'>
              <Link
                className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                to='#'
              >
                {" "}
                <Icon icon='ep:d-arrow-right' className='' />{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AssignRoleLayer;
