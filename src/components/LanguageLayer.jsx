import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const LanguageLayer = () => {
  return (
    <>
      <div className='card h-100 p-0 radius-12'>
        <div className='card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between'>
          <div className='d-flex align-items-center flex-wrap gap-3'>
            <span className='text-md fw-medium text-secondary-light mb-0'>
              Show
            </span>
            <select
              className='form-select form-select-sm w-auto ps-12 py-6 radius-12 h-40-px'
              defaultValue='Select a number'
            >
              <option value='Select a number' disabled>
                Select a number
              </option>
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
          </div>
          <button
            type='button'
            className='btn btn-primary text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            <Icon
              icon='ic:baseline-plus'
              className='icon text-xl line-height-1'
            />
            Add Languages
          </button>
        </div>
        <div className='card-body p-24'>
          <div className='table-responsive scroll-sm'>
            <table className='table bordered-table sm-table mb-0'>
              <thead>
                <tr>
                  <th scope='col'> S.L</th>
                  <th scope='col' className='text-center'>
                    Name
                  </th>
                  <th scope='col' className='text-center'>
                    Status
                  </th>
                  <th scope='col' className='text-center'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td className='text-center'>English(Default)</td>
                  <td>
                    <div className='form-switch switch-primary d-flex align-items-center justify-content-center'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        role='switch'
                        defaultChecked=''
                      />
                    </div>
                  </td>
                  <td className='text-center'>
                    <div className='d-flex align-items-center gap-10 justify-content-center'>
                      <button
                        type='button'
                        className='bg-success-100 text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                        data-bs-toggle='modal'
                        data-bs-target='#exampleModalEdit'
                      >
                        <Icon icon='lucide:edit' className='menu-icon' />
                      </button>
                      <button
                        type='button'
                        className='remove-item-button bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                      >
                        <Icon
                          icon='fluent:delete-24-regular'
                          className='menu-icon'
                        />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td className='text-center'>Bangla</td>
                  <td>
                    <div className='form-switch switch-primary d-flex align-items-center justify-content-center'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        role='switch'
                      />
                    </div>
                  </td>
                  <td className='text-center'>
                    <div className='d-flex align-items-center gap-10 justify-content-center'>
                      <button
                        type='button'
                        className='bg-success-100 text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                        data-bs-toggle='modal'
                        data-bs-target='#exampleModalEdit'
                      >
                        <Icon icon='lucide:edit' className='menu-icon' />
                      </button>
                      <button
                        type='button'
                        className='remove-item-button bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                      >
                        <Icon
                          icon='fluent:delete-24-regular'
                          className='menu-icon'
                        />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td className='text-center'>Bangla</td>
                  <td>
                    <div className='form-switch switch-primary d-flex align-items-center justify-content-center'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        role='switch'
                      />
                    </div>
                  </td>
                  <td className='text-center'>
                    <div className='d-flex align-items-center gap-10 justify-content-center'>
                      <button
                        type='button'
                        className='bg-success-100 text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                        data-bs-toggle='modal'
                        data-bs-target='#exampleModalEdit'
                      >
                        <Icon icon='lucide:edit' className='menu-icon' />
                      </button>
                      <button
                        type='button'
                        className='remove-item-button bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                      >
                        <Icon
                          icon='fluent:delete-24-regular'
                          className='menu-icon'
                        />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td className='text-center'>Bangla</td>
                  <td>
                    <div className='form-switch switch-primary d-flex align-items-center justify-content-center'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        role='switch'
                      />
                    </div>
                  </td>
                  <td className='text-center'>
                    <div className='d-flex align-items-center gap-10 justify-content-center'>
                      <button
                        type='button'
                        className='bg-success-100 text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                        data-bs-toggle='modal'
                        data-bs-target='#exampleModalEdit'
                      >
                        <Icon icon='lucide:edit' className='menu-icon' />
                      </button>
                      <button
                        type='button'
                        className='remove-item-button bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                      >
                        <Icon
                          icon='fluent:delete-24-regular'
                          className='menu-icon'
                        />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>05</td>
                  <td className='text-center'>German</td>
                  <td>
                    <div className='form-switch switch-primary d-flex align-items-center justify-content-center'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        role='switch'
                      />
                    </div>
                  </td>
                  <td className='text-center'>
                    <div className='d-flex align-items-center gap-10 justify-content-center'>
                      <button
                        type='button'
                        className='bg-success-100 text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                        data-bs-toggle='modal'
                        data-bs-target='#exampleModalEdit'
                      >
                        <Icon icon='lucide:edit' className='menu-icon' />
                      </button>
                      <button
                        type='button'
                        className='remove-item-button bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                      >
                        <Icon
                          icon='fluent:delete-24-regular'
                          className='menu-icon'
                        />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>06</td>
                  <td className='text-center'>German</td>
                  <td>
                    <div className='form-switch switch-primary d-flex align-items-center justify-content-center'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        role='switch'
                      />
                    </div>
                  </td>
                  <td className='text-center'>
                    <div className='d-flex align-items-center gap-10 justify-content-center'>
                      <button
                        type='button'
                        className='bg-success-100 text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                        data-bs-toggle='modal'
                        data-bs-target='#exampleModalEdit'
                      >
                        <Icon icon='lucide:edit' className='menu-icon' />
                      </button>
                      <button
                        type='button'
                        className='remove-item-button bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                      >
                        <Icon
                          icon='fluent:delete-24-regular'
                          className='menu-icon'
                        />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>07</td>
                  <td className='text-center'>German</td>
                  <td>
                    <div className='form-switch switch-primary d-flex align-items-center justify-content-center'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        role='switch'
                      />
                    </div>
                  </td>
                  <td className='text-center'>
                    <div className='d-flex align-items-center gap-10 justify-content-center'>
                      <button
                        type='button'
                        className='bg-success-100 text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                        data-bs-toggle='modal'
                        data-bs-target='#exampleModalEdit'
                      >
                        <Icon icon='lucide:edit' className='menu-icon' />
                      </button>
                      <button
                        type='button'
                        className='remove-item-button bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                      >
                        <Icon
                          icon='fluent:delete-24-regular'
                          className='menu-icon'
                        />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>08</td>
                  <td className='text-center'>Hindi</td>
                  <td>
                    <div className='form-switch switch-primary d-flex align-items-center justify-content-center'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        role='switch'
                      />
                    </div>
                  </td>
                  <td className='text-center'>
                    <div className='d-flex align-items-center gap-10 justify-content-center'>
                      <button
                        type='button'
                        className='bg-success-100 text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                        data-bs-toggle='modal'
                        data-bs-target='#exampleModalEdit'
                      >
                        <Icon icon='lucide:edit' className='menu-icon' />
                      </button>
                      <button
                        type='button'
                        className='remove-item-button bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                      >
                        <Icon
                          icon='fluent:delete-24-regular'
                          className='menu-icon'
                        />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>09</td>
                  <td className='text-center'>Hindi</td>
                  <td>
                    <div className='form-switch switch-primary d-flex align-items-center justify-content-center'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        role='switch'
                      />
                    </div>
                  </td>
                  <td className='text-center'>
                    <div className='d-flex align-items-center gap-10 justify-content-center'>
                      <button
                        type='button'
                        className='bg-success-100 text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                        data-bs-toggle='modal'
                        data-bs-target='#exampleModalEdit'
                      >
                        <Icon icon='lucide:edit' className='menu-icon' />
                      </button>
                      <button
                        type='button'
                        className='remove-item-button bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle'
                      >
                        <Icon
                          icon='fluent:delete-24-regular'
                          className='menu-icon'
                        />
                      </button>
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
      {/* Modal Add Currecny */}
      <div
        className='modal fade'
        id='exampleModal'
        tabIndex={-1}
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg modal-dialog modal-dialog-centered'>
          <div className='modal-content radius-16 bg-base'>
            <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                Add New Language{" "}
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='modal-body p-24'>
              <form action='#'>
                <div className='row'>
                  <div className='col-6 mb-20'>
                    <label
                      htmlFor='name'
                      className='form-label fw-semibold text-primary-light text-sm mb-8'
                    >
                      language Name{" "}
                    </label>
                    <input
                      type='text'
                      className='form-control radius-8'
                      id='name'
                      placeholder='Enter Name'
                    />
                  </div>
                  <div className='col-6 mb-20'>
                    <label
                      htmlFor='country'
                      className='form-label fw-semibold text-primary-light text-sm mb-8'
                    >
                      Status{" "}
                    </label>
                    <select
                      className='form-control radius-8 form-select'
                      id='country'
                      defaultValue='Select One'
                    >
                      <option value='Select One' disabled>
                        Select One
                      </option>
                      <option value='ON'>ON</option>
                      <option value='OFF'>OFF</option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
                    <button
                      type='reset'
                      className='border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-50 py-11 radius-8'
                    >
                      Reset
                    </button>
                    <button
                      type='submit'
                      className='btn btn-primary border border-primary-600 text-md px-50 py-12 radius-8'
                    >
                      Save Change
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Edit Currecny */}
      <div
        className='modal fade'
        id='exampleModalEdit'
        tabIndex={-1}
        aria-labelledby='exampleModalEditLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg modal-dialog modal-dialog-centered'>
          <div className='modal-content radius-16 bg-base'>
            <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
              <h1 className='modal-title fs-5' id='exampleModalEditLabel'>
                Edit Language
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='modal-body p-24'>
              <form action='#'>
                <div className='row'>
                  <div className='col-6 mb-20'>
                    <label
                      htmlFor='editname'
                      className='form-label fw-semibold text-primary-light text-sm mb-8'
                    >
                      language Name
                    </label>
                    <input
                      type='text'
                      className='form-control radius-8'
                      id='editname'
                      placeholder='Enter Name'
                    />
                  </div>
                  <div className='col-6 mb-20'>
                    <label
                      htmlFor='editcountry'
                      className='form-label fw-semibold text-primary-light text-sm mb-8'
                    >
                      Status{" "}
                    </label>
                    <select
                      className='form-control radius-8 form-select'
                      id='editcountry'
                      defaultValue='Select One'
                    >
                      <option value='Select One' disabled>
                        Select One
                      </option>
                      <option value='ON'>ON</option>
                      <option value='OFF'>OFF</option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
                    <button
                      type='reset'
                      className='border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-50 py-11 radius-8'
                    >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      className='btn btn-primary border border-primary-600 text-md px-50 py-12 radius-8'
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageLayer;
