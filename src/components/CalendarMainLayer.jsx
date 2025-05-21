import { useEffect, useRef } from "react";
import Calendar from "./child/Calendar";
import { Icon } from "@iconify/react/dist/iconify.js";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// eslint-disable-next-line react/prop-types
const DatePicker = ({ id, placeholder }) => {
  const datePickerRef = useRef(null);

  useEffect(() => {
    flatpickr(datePickerRef.current, {
      enableTime: true,
      dateFormat: "d/m/Y H:i",
    });
  }, []);

  return (
    <input
      ref={datePickerRef}
      id={id}
      type='text'
      className='form-control radius-8 bg-base'
      placeholder={placeholder}
    />
  );
};

const CalendarMainLayer = () => {
  return (
    <>
      <div className='row gy-4'>
        <div className='col-xxl-3 col-lg-4'>
          <div className='card h-100 p-0'>
            <div className='card-body p-24'>
              <button
                type='button'
                className='btn btn-primary text-sm btn-sm px-12 py-12 w-100 radius-8 d-flex align-items-center gap-2 mb-32'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >
                <Icon
                  icon='fa6-regular:square-plus'
                  className='icon text-lg line-height-1'
                />
                Add Currency
              </button>
              <div className='mt-32'>
                <div className='event-item d-flex align-items-center justify-content-between gap-4 pb-16 mb-16 border border-start-0 border-end-0 border-top-0'>
                  <div className=''>
                    <div className='d-flex align-items-center gap-10'>
                      <span className='w-12-px h-12-px bg-warning-600 rounded-circle fw-medium' />
                      <span className='text-secondary-light'>
                        Today, 10:30 PM - 02:30 AM
                      </span>
                    </div>
                    <span className='text-primary-light fw-semibold text-md mt-4'>
                      Design Conference
                    </span>
                  </div>
                  <div className='dropdown'>
                    <button
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <Icon
                        icon='entypo:dots-three-vertical'
                        className='icon text-secondary-light'
                      />
                    </button>
                    <ul className='dropdown-menu p-12 border bg-base shadow'>
                      <li>
                        <button
                          type='button'
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                          data-bs-toggle='modal'
                          data-bs-target='#exampleModalView'
                        >
                          <Icon
                            icon='hugeicons:view'
                            className='icon text-lg line-height-1'
                          />
                          View
                        </button>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                          data-bs-toggle='modal'
                          data-bs-target='#exampleModalEdit'
                        >
                          <Icon
                            icon='lucide:edit'
                            className='icon text-lg line-height-1'
                          />
                          Edit
                        </button>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='delete-item dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10'
                          data-bs-toggle='modal'
                          data-bs-target='#exampleModalDelete'
                        >
                          <Icon
                            icon='fluent:delete-24-regular'
                            className='icon text-lg line-height-1'
                          />
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='event-item d-flex align-items-center justify-content-between gap-4 pb-16 mb-16 border border-start-0 border-end-0 border-top-0'>
                  <div className=''>
                    <div className='d-flex align-items-center gap-10'>
                      <span className='w-12-px h-12-px bg-success-600 rounded-circle fw-medium' />
                      <span className='text-secondary-light'>
                        Today, 10:30 PM - 02:30 AM
                      </span>
                    </div>
                    <span className='text-primary-light fw-semibold text-md mt-4'>
                      Weekend Festival
                    </span>
                  </div>
                  <div className='dropdown'>
                    <button
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <Icon
                        icon='entypo:dots-three-vertical'
                        className='icon text-secondary-light'
                      />
                    </button>
                    <ul className='dropdown-menu p-12 border bg-base shadow'>
                      <li>
                        <button
                          type='button'
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                          data-bs-toggle='modal'
                          data-bs-target='#exampleModalView'
                        >
                          <Icon
                            icon='hugeicons:view'
                            className='icon text-lg line-height-1'
                          />
                          View
                        </button>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                          data-bs-toggle='modal'
                          data-bs-target='#exampleModalEdit'
                        >
                          <Icon
                            icon='lucide:edit'
                            className='icon text-lg line-height-1'
                          />
                          Edit
                        </button>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='delete-item dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10'
                          data-bs-toggle='modal'
                          data-bs-target='#exampleModalDelete'
                        >
                          <Icon
                            icon='fluent:delete-24-regular'
                            className='icon text-lg line-height-1'
                          />
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='event-item d-flex align-items-center justify-content-between gap-4 pb-16 mb-16 border border-start-0 border-end-0 border-top-0'>
                  <div className=''>
                    <div className='d-flex align-items-center gap-10'>
                      <span className='w-12-px h-12-px bg-info-600 rounded-circle fw-medium' />
                      <span className='text-secondary-light'>
                        Today, 10:30 PM - 02:30 AM
                      </span>
                    </div>
                    <span className='text-primary-light fw-semibold text-md mt-4'>
                      Design Conference
                    </span>
                  </div>
                  <div className='dropdown'>
                    <button
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <Icon
                        icon='entypo:dots-three-vertical'
                        className='icon text-secondary-light'
                      />
                    </button>
                    <ul className='dropdown-menu p-12 border bg-base shadow'>
                      <li>
                        <button
                          type='button'
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                          data-bs-toggle='modal'
                          data-bs-target='#exampleModalView'
                        >
                          <Icon
                            icon='hugeicons:view'
                            className='icon text-lg line-height-1'
                          />
                          View
                        </button>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                          data-bs-toggle='modal'
                          data-bs-target='#exampleModalEdit'
                        >
                          <Icon
                            icon='lucide:edit'
                            className='icon text-lg line-height-1'
                          />
                          Edit
                        </button>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='delete-item dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10'
                          data-bs-toggle='modal'
                          data-bs-target='#exampleModalDelete'
                        >
                          <Icon
                            icon='fluent:delete-24-regular'
                            className='icon text-lg line-height-1'
                          />
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='event-item d-flex align-items-center justify-content-between gap-4 pb-16 mb-16 border border-start-0 border-end-0 border-top-0'>
                  <div className=''>
                    <div className='d-flex align-items-center gap-10'>
                      <span className='w-12-px h-12-px bg-warning-600 rounded-circle fw-medium' />
                      <span className='text-secondary-light'>
                        Today, 10:30 PM - 02:30 AM
                      </span>
                    </div>
                    <span className='text-primary-light fw-semibold text-md mt-4'>
                      Ultra Europe 2019
                    </span>
                  </div>
                  <div className='dropdown'>
                    <button
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <Icon
                        icon='entypo:dots-three-vertical'
                        className='icon text-secondary-light'
                      />
                    </button>
                    <ul className='dropdown-menu p-12 border bg-base shadow'>
                      <li>
                        <button
                          type='button'
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                          data-bs-toggle='modal'
                          data-bs-target='#exampleModalView'
                        >
                          <Icon
                            icon='hugeicons:view'
                            className='icon text-lg line-height-1'
                          />
                          View
                        </button>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                          data-bs-toggle='modal'
                          data-bs-target='#exampleModalEdit'
                        >
                          <Icon
                            icon='lucide:edit'
                            className='icon text-lg line-height-1'
                          />
                          Edit
                        </button>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='delete-item dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10'
                          data-bs-toggle='modal'
                          data-bs-target='#exampleModalDelete'
                        >
                          <Icon
                            icon='fluent:delete-24-regular'
                            className='icon text-lg line-height-1'
                          />
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='event-item d-flex align-items-center justify-content-between gap-4 pb-16 mb-16 border border-start-0 border-end-0 border-top-0'>
                  <div className=''>
                    <div className='d-flex align-items-center gap-10'>
                      <span className='w-12-px h-12-px bg-warning-600 rounded-circle fw-medium' />
                      <span className='text-secondary-light'>
                        Today, 10:30 PM - 02:30 AM
                      </span>
                    </div>
                    <span className='text-primary-light fw-semibold text-md mt-4'>
                      Design Conference
                    </span>
                  </div>
                  <div className='dropdown'>
                    <button
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <Icon
                        icon='entypo:dots-three-vertical'
                        className='icon text-secondary-light'
                      />
                    </button>
                    <ul className='dropdown-menu p-12 border bg-base shadow'>
                      <li>
                        <button
                          type='button'
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                          data-bs-toggle='modal'
                          data-bs-target='#exampleModalView'
                        >
                          <Icon
                            icon='hugeicons:view'
                            className='icon text-lg line-height-1'
                          />
                          View
                        </button>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                          data-bs-toggle='modal'
                          data-bs-target='#exampleModalEdit'
                        >
                          <Icon
                            icon='lucide:edit'
                            className='icon text-lg line-height-1'
                          />
                          Edit
                        </button>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='delete-item dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10'
                          data-bs-toggle='modal'
                          data-bs-target='#exampleModalDelete'
                        >
                          <Icon
                            icon='fluent:delete-24-regular'
                            className='icon text-lg line-height-1'
                          />
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xxl-9 col-lg-8'>
          <div className='card h-100 p-0'>
            <div className='card-body p-24'>
              <div id='wrap'>
                <div id='calendar' />
                <div style={{ clear: "both" }} />
                <Calendar />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Add Event */}
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
                Add New Event
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
                  <div className='col-12 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Event Title :{" "}
                    </label>
                    <input
                      type='text'
                      className='form-control radius-8'
                      placeholder='Enter Event Title '
                    />
                  </div>
                  <div className='col-md-6 mb-20'>
                    <label
                      htmlFor='startDate'
                      className='form-label fw-semibold text-primary-light text-sm mb-8'
                    >
                      Start Date
                    </label>
                    <div className='position-relative'>
                      <DatePicker
                        className='form-control radius-8 bg-base'
                        id='startDate'
                        placeholder='03/12/2024, 10:30 AM'
                      />
                      <span className='position-absolute end-0 top-50 translate-middle-y me-12 line-height-1'>
                        <Icon
                          icon='solar:calendar-linear'
                          className='icon text-lg'
                        ></Icon>
                      </span>
                    </div>
                  </div>
                  <div className='col-md-6 mb-20'>
                    <label
                      htmlFor='endDate'
                      className='form-label fw-semibold text-primary-light text-sm mb-8'
                    >
                      End Date
                    </label>
                    <div className='position-relative'>
                      <DatePicker
                        className='form-control radius-8 bg-base'
                        id='endDate'
                        placeholder='03/12/2024, 2:30 PM'
                      />
                      <span className='position-absolute end-0 top-50 translate-middle-y me-12 line-height-1'>
                        <Icon
                          icon='solar:calendar-linear'
                          className='icon text-lg'
                        ></Icon>
                      </span>
                    </div>
                  </div>
                  <div className='col-12 mb-20'>
                    <label
                      htmlFor='endDate'
                      className='form-label fw-semibold text-primary-light text-sm mb-8'
                    >
                      Label{" "}
                    </label>
                    <div className='d-flex align-items-center flex-wrap gap-28'>
                      <div className='form-check checked-success d-flex align-items-center gap-2'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='label'
                          id='Personal'
                        />
                        <label
                          className='form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1'
                          htmlFor='Personal'
                        >
                          <span className='w-8-px h-8-px bg-success-600 rounded-circle' />
                          Personal
                        </label>
                      </div>
                      <div className='form-check checked-primary d-flex align-items-center gap-2'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='label'
                          id='Business'
                        />
                        <label
                          className='form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1'
                          htmlFor='Business'
                        >
                          <span className='w-8-px h-8-px bg-primary-600 rounded-circle' />
                          Business
                        </label>
                      </div>
                      <div className='form-check checked-warning d-flex align-items-center gap-2'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='label'
                          id='Family'
                        />
                        <label
                          className='form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1'
                          htmlFor='Family'
                        >
                          <span className='w-8-px h-8-px bg-warning-600 rounded-circle' />
                          Family
                        </label>
                      </div>
                      <div className='form-check checked-secondary d-flex align-items-center gap-2'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='label'
                          id='Important'
                        />
                        <label
                          className='form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1'
                          htmlFor='Important'
                        >
                          <span className='w-8-px h-8-px bg-lilac-600 rounded-circle' />
                          Important
                        </label>
                      </div>
                      <div className='form-check checked-danger d-flex align-items-center gap-2'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='label'
                          id='Holiday'
                        />
                        <label
                          className='form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1'
                          htmlFor='Holiday'
                        >
                          <span className='w-8-px h-8-px bg-danger-600 rounded-circle' />
                          Holiday
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 mb-20'>
                    <label
                      htmlFor='desc'
                      className='form-label fw-semibold text-primary-light text-sm mb-8'
                    >
                      Description
                    </label>
                    <textarea
                      className='form-control'
                      id='desc'
                      rows={4}
                      cols={50}
                      placeholder='Write some text'
                      defaultValue={""}
                    />
                  </div>
                  <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
                    <button
                      type='reset'
                      className='border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-40 py-11 radius-8'
                    >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      className='btn btn-primary border border-primary-600 text-md px-24 py-12 radius-8'
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal View Event */}
      <div
        className='modal fade'
        id='exampleModalView'
        tabIndex={-1}
        aria-labelledby='exampleModalViewLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg modal-dialog modal-dialog-centered'>
          <div className='modal-content radius-16 bg-base'>
            <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
              <h1 className='modal-title fs-5' id='exampleModalViewLabel'>
                View Details
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='modal-body p-24'>
              <div className='mb-12'>
                <span className='text-secondary-light txt-sm fw-medium'>
                  Title
                </span>
                <h6 className='text-primary-light fw-semibold text-md mb-0 mt-4'>
                  Design Conference
                </h6>
              </div>
              <div className='mb-12'>
                <span className='text-secondary-light txt-sm fw-medium'>
                  Start Date
                </span>
                <h6 className='text-primary-light fw-semibold text-md mb-0 mt-4'>
                  25 Jan 2024, 10:30AM
                </h6>
              </div>
              <div className='mb-12'>
                <span className='text-secondary-light txt-sm fw-medium'>
                  End Date
                </span>
                <h6 className='text-primary-light fw-semibold text-md mb-0 mt-4'>
                  25 Jan 2024, 2:30AM
                </h6>
              </div>
              <div className='mb-12'>
                <span className='text-secondary-light txt-sm fw-medium'>
                  Description
                </span>
                <h6 className='text-primary-light fw-semibold text-md mb-0 mt-4'>
                  N/A
                </h6>
              </div>
              <div className='mb-12'>
                <span className='text-secondary-light txt-sm fw-medium'>
                  Label
                </span>
                <h6 className='text-primary-light fw-semibold text-md mb-0 mt-4 d-flex align-items-center gap-2'>
                  <span className='w-8-px h-8-px bg-success-600 rounded-circle' />
                  Business
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Edit Event */}
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
                Edit Event
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
                  <div className='col-12 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Event Title :{" "}
                    </label>
                    <input
                      type='text'
                      className='form-control radius-8'
                      placeholder='Enter Event Title '
                    />
                  </div>
                  <div className='col-md-6 mb-20'>
                    <label
                      htmlFor='editstartDate'
                      className='form-label fw-semibold text-primary-light text-sm mb-8'
                    >
                      Start Date
                    </label>
                    <div className=' position-relative'>
                      <DatePicker
                        className='form-control radius-8 bg-base'
                        id='startDate'
                        placeholder='03/12/2024, 10:30 AM'
                      />
                      <span className='position-absolute end-0 top-50 translate-middle-y me-12 line-height-1'>
                        <Icon
                          icon='solar:calendar-linear'
                          className='icon text-lg'
                        />
                      </span>
                    </div>
                  </div>
                  <div className='col-md-6 mb-20'>
                    <label
                      htmlFor='editendDate'
                      className='form-label fw-semibold text-primary-light text-sm mb-8'
                    >
                      End Date
                    </label>
                    <div className=' position-relative'>
                      <DatePicker
                        className='form-control radius-8 bg-base'
                        id='endDate'
                        placeholder='03/12/2024, 2:30 PM'
                      />
                      <span className='position-absolute end-0 top-50 translate-middle-y me-12 line-height-1'>
                        <Icon
                          icon='solar:calendar-linear'
                          className='icon text-lg'
                        />
                      </span>
                    </div>
                  </div>
                  <div className='col-12 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Label{" "}
                    </label>
                    <div className='d-flex align-items-center flex-wrap gap-28'>
                      <div className='form-check checked-success d-flex align-items-center gap-2'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='label'
                          id='editPersonal'
                        />
                        <label
                          className='form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1'
                          htmlFor='editPersonal'
                        >
                          <span className='w-8-px h-8-px bg-success-600 rounded-circle' />
                          Personal
                        </label>
                      </div>
                      <div className='form-check checked-primary d-flex align-items-center gap-2'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='label'
                          id='editBusiness'
                        />
                        <label
                          className='form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1'
                          htmlFor='editBusiness'
                        >
                          <span className='w-8-px h-8-px bg-primary-600 rounded-circle' />
                          Business
                        </label>
                      </div>
                      <div className='form-check checked-warning d-flex align-items-center gap-2'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='label'
                          id='editFamily'
                        />
                        <label
                          className='form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1'
                          htmlFor='editFamily'
                        >
                          <span className='w-8-px h-8-px bg-warning-600 rounded-circle' />
                          Family
                        </label>
                      </div>
                      <div className='form-check checked-secondary d-flex align-items-center gap-2'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='label'
                          id='editImportant'
                        />
                        <label
                          className='form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1'
                          htmlFor='editImportant'
                        >
                          <span className='w-8-px h-8-px bg-lilac-600 rounded-circle' />
                          Important
                        </label>
                      </div>
                      <div className='form-check checked-danger d-flex align-items-center gap-2'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='label'
                          id='editHoliday'
                        />
                        <label
                          className='form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1'
                          htmlFor='editHoliday'
                        >
                          <span className='w-8-px h-8-px bg-danger-600 rounded-circle' />
                          Holiday
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 mb-20'>
                    <label
                      htmlFor='desc'
                      className='form-label fw-semibold text-primary-light text-sm mb-8'
                    >
                      Description
                    </label>
                    <textarea
                      className='form-control'
                      id='editdesc'
                      rows={4}
                      cols={50}
                      placeholder='Write some text'
                      defaultValue={""}
                    />
                  </div>
                  <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
                    <button
                      type='reset'
                      className='border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-40 py-11 radius-8'
                    >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      className='btn btn-primary border border-primary-600 text-md px-24 py-12 radius-8'
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Delete Event */}
      <div
        className='modal fade'
        id='exampleModalDelete'
        tabIndex={-1}
        aria-hidden='true'
      >
        <div className='modal-dialog modal-sm modal-dialog modal-dialog-centered'>
          <div className='modal-content radius-16 bg-base'>
            <div className='modal-body p-24 text-center'>
              <span className='mb-16 fs-1 line-height-1 text-danger'>
                <Icon icon='fluent:delete-24-regular' className='menu-icon' />
              </span>
              <h6 className='text-lg fw-semibold text-primary-light mb-0'>
                Are your sure you want to delete this event
              </h6>
              <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
                <button
                  type='reset'
                  className='w-50 border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-40 py-11 radius-8'
                >
                  Cancel
                </button>
                <button
                  type='button'
                  className='w-50 btn btn-primary border border-primary-600 text-md px-24 py-12 radius-8'
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarMainLayer;
