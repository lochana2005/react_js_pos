import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";

const ViewDetailsLayer = () => {
  return (
    <div className='row gy-4'>
      <div className='col-xxl-3'>
        <div className='card h-100 p-0'>
          <div className='card-body p-24'>
            <button
              type='button'
              className='btn btn-primary text-sm btn-sm px-12 py-12 w-100 radius-8 d-flex align-items-center gap-2 mb-16'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
            >
              <Icon
                icon='fa6-regular:square-plus'
                className='icon text-lg line-height-1'
              />
              Compose
            </button>
            <div className='mt-16'>
              <ul>
                <li className='item-active mb-4'>
                  <Link
                    to='/email'
                    className='bg-hover-primary-50 px-12 py-8 w-100 radius-8 text-secondary-light'
                  >
                    <span className='d-flex align-items-center gap-10 justify-content-between w-100'>
                      <span className='d-flex align-items-center gap-10'>
                        <span className='icon text-xxl line-height-1 d-flex'>
                          <Icon
                            icon='uil:envelope'
                            className='icon line-height-1'
                          />
                        </span>
                        <span className='fw-semibold'>Inbox</span>
                      </span>
                      <span className='fw-medium'>800</span>
                    </span>
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    to='/starred'
                    className='bg-hover-primary-50 px-12 py-8 w-100 radius-8 text-secondary-light'
                  >
                    <span className='d-flex align-items-center gap-10 justify-content-between w-100'>
                      <span className='d-flex align-items-center gap-10'>
                        <span className='icon text-xxl line-height-1 d-flex'>
                          <Icon
                            icon='ph:star-bold'
                            className='icon line-height-1'
                          />
                        </span>
                        <span className='fw-semibold'>Starred</span>
                      </span>
                      <span className='fw-medium'>250</span>
                    </span>
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    to='/email'
                    className='bg-hover-primary-50 px-12 py-8 w-100 radius-8 text-secondary-light'
                  >
                    <span className='d-flex align-items-center gap-10 justify-content-between w-100'>
                      <span className='d-flex align-items-center gap-10'>
                        <span className='icon text-xxl line-height-1 d-flex'>
                          <Icon
                            icon='ion:paper-plane-outline'
                            className='icon line-height-1'
                          />
                        </span>
                        <span className='fw-semibold'>Sent</span>
                      </span>
                      <span className='fw-medium'>80</span>
                    </span>
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    to='/email'
                    className='bg-hover-primary-50 px-12 py-8 w-100 radius-8 text-secondary-light'
                  >
                    <span className='d-flex align-items-center gap-10 justify-content-between w-100'>
                      <span className='d-flex align-items-center gap-10'>
                        <span className='icon text-xxl line-height-1 d-flex'>
                          <Icon
                            icon='lucide:pencil'
                            className='icon line-height-1'
                          />
                        </span>
                        <span className='fw-semibold'>Draft</span>
                      </span>
                      <span className='fw-medium'>50</span>
                    </span>
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    to='/email'
                    className='bg-hover-primary-50 px-12 py-8 w-100 radius-8 text-secondary-light'
                  >
                    <span className='d-flex align-items-center gap-10 justify-content-between w-100'>
                      <span className='d-flex align-items-center gap-10'>
                        <span className='icon text-xxl line-height-1 d-flex'>
                          <Icon
                            icon='ph:warning-bold'
                            className='icon line-height-1'
                          />
                        </span>
                        <span className='fw-semibold'>Spam</span>
                      </span>
                      <span className='fw-medium'>30</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/email'
                    className='bg-hover-primary-50 px-12 py-8 w-100 radius-8 text-secondary-light'
                  >
                    <span className='d-flex align-items-center gap-10 justify-content-between w-100'>
                      <span className='d-flex align-items-center gap-10'>
                        <span className='icon text-xxl line-height-1 d-flex'>
                          <Icon
                            icon='material-symbols:delete-outline'
                            className='icon line-height-1'
                          />
                        </span>
                        <span className='fw-semibold'>Bin</span>
                      </span>
                      <span className='fw-medium'>20</span>
                    </span>
                  </Link>
                </li>
              </ul>
              <div className='mt-24'>
                <h6 className='text-lg fw-semibold text-primary-light mb-16'>
                  TAGS
                </h6>
                <ul>
                  <li className='mb-20'>
                    <span className='line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-10'>
                      <span className='w-8-px h-8-px bg-primary-600 rounded-circle' />
                      Personal
                    </span>
                  </li>
                  <li className='mb-20'>
                    <span className='line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-10'>
                      <span className='w-8-px h-8-px bg-lilac-600 rounded-circle' />
                      Social
                    </span>
                  </li>
                  <li className='mb-20'>
                    <span className='line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-10'>
                      <span className='w-8-px h-8-px bg-success-600 rounded-circle' />
                      Promotions
                    </span>
                  </li>
                  <li className='mb-20'>
                    <span className='line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-10'>
                      <span className='w-8-px h-8-px bg-warning-600 rounded-circle' />
                      Business
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-xxl-9'>
        <div className='card h-100 p-0 email-card overflow-x-auto d-block'>
          <div className='min-w-450-px d-flex flex-column justify-content-between h-100'>
            <div className='card-header border-bottom bg-base py-16 px-24 d-flex align-items-center gap-3 justify-content-between flex-wrap'>
              <div className='d-flex align-items-center gap-2'>
                <button className='text-secondary-light d-flex me-8'>
                  <Icon
                    icon='mingcute:arrow-left-line'
                    className='icon fs-3 line-height-1'
                  />
                </button>
                <h6 className='mb-0 text-lg'>Kathryn Murphy</h6>
                <span className='bg-primary-50 text-primary-600 text-sm radius-4 px-8'>
                  Personal
                </span>
              </div>
              <div className='d-flex align-items-center gap-3'>
                <button className='text-secondary-light d-flex'>
                  <Icon
                    icon='mi:print'
                    className='icon text-xxl line-height-1'
                  />
                </button>
                <button className='text-secondary-light d-flex'>
                  <Icon
                    icon='mdi:star-outline'
                    className='icon text-xxl line-height-1'
                  />
                </button>
                <button className='text-secondary-light d-flex'>
                  <Icon
                    icon='material-symbols:delete-outline'
                    className='icon text-xxl line-height-1'
                  />
                </button>
              </div>
            </div>
            <div className='card-body p-0'>
              <div className='py-16 px-24 border-bottom'>
                <div className='d-flex align-items-start gap-3'>
                  <img
                    src='assets/images/user-list/user-list1.png'
                    alt='Wowdash'
                    className='w-40-px h-40-px rounded-pill'
                  />
                  <div className=''>
                    <div className='d-flex align-items-center flex-wrap gap-2'>
                      <h6 className='mb-0 text-lg'>Kathryn Murphy</h6>
                      <span className='text-secondary-light text-md'>
                        kathrynmurphy@gmail.com
                      </span>
                    </div>
                    <div className='mt-20'>
                      <p className='mb-16 text-primary-light'>Hi William</p>
                      <p className='mb-16 text-primary-light'>
                        Just confirming that we transferred $63.86 to you via
                        PayPal
                        <Link
                          to='#'
                          className='text-primary-600 text-decoration-underline'
                        >
                          (info367@gmail.com)
                        </Link>{" "}
                        which you earned on the themewow Market since your last
                        payout.
                      </p>
                      <p className='mb-0 text-primary-light'>
                        Thank you for selling with us!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-16 px-24 border-bottom'>
                <div className='d-flex align-items-start gap-3'>
                  <img
                    src='assets/images/user-list/user-list2.png'
                    alt='Wowdash'
                    className='w-40-px h-40-px rounded-pill'
                  />
                  <div className=''>
                    <div className='d-flex align-items-center flex-wrap gap-2'>
                      <h6 className='mb-0 text-lg'>Subrata Sen</h6>
                      <span className='text-secondary-light text-md'>
                        subratasen@gmail.com
                      </span>
                    </div>
                    <div className='mt-20'>
                      <p className='mb-0 text-primary-light'>
                        Awesome, thank you so much!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card-footer py-16 px-24 bg-base shadow-top'>
              <form action='#'>
                <div className='d-flex align-items-center justify-content-between'>
                  <textarea
                    className='textarea-max-height form-control p-0 border-0 py-8 pe-16 resize-none scroll-sm'
                    oninput='adjustHeight(this)'
                    placeholder='Write massage'
                    defaultValue={""}
                  />
                  <div className='d-flex align-items-center gap-4 ms-16'>
                    <div className=''>
                      <label
                        htmlFor='attatchment'
                        className='text-secondary-light text-xl'
                      >
                        <Icon
                          icon='octicon:link-16'
                          className='icon line-height-1'
                        />
                      </label>
                      <input type='file' id='attatchment' hidden={true} />
                    </div>
                    <div className=''>
                      <label
                        htmlFor='gallery'
                        className='text-secondary-light text-xl'
                      >
                        <Icon
                          icon='solar:gallery-bold'
                          className='icon line-height-1'
                        />
                      </label>
                      <input type='file' id='gallery' hidden={true} />
                    </div>
                    <button
                      type='submit'
                      className='btn btn-primary text-sm btn-sm px-12 py-12 w-100 radius-8 d-flex align-items-center justify-content-center gap-1 h-44-px'
                    >
                      <Icon
                        icon='ion:paper-plane-outline'
                        className='icon text-lg line-height-1'
                      />
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsLayer;
