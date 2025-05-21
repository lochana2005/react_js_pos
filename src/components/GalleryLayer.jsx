const GalleryLayer = () => {
  return (
    <div className='card h-100 p-0 radius-12 overflow-hidden'>
      <div className='card-header border-bottom-0 pb-0 pt-0 px-0'>
        <ul
          className='nav border-gradient-tab nav-pills mb-0 border-top-0'
          id='pills-tab'
          role='tablist'
        >
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link active'
              id='pills-all-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-all'
              type='button'
              role='tab'
              aria-controls='pills-all'
              aria-selected='true'
            >
              All
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link'
              id='pills-ui-design-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-ui-design'
              type='button'
              role='tab'
              aria-controls='pills-ui-design'
              aria-selected='false'
              tabIndex={-1}
            >
              UI Design
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link'
              id='pills-web-design-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-web-design'
              type='button'
              role='tab'
              aria-controls='pills-web-design'
              aria-selected='false'
              tabIndex={-1}
            >
              Web Design
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link'
              id='pills-development-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-development'
              type='button'
              role='tab'
              aria-controls='pills-development'
              aria-selected='false'
              tabIndex={-1}
            >
              Development
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link'
              id='pills-presentation-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-presentation'
              type='button'
              role='tab'
              aria-controls='pills-presentation'
              aria-selected='false'
              tabIndex={-1}
            >
              Presentations
            </button>
          </li>
        </ul>
      </div>
      <div className='card-body p-24'>
        <div className='tab-content' id='pills-tabContent'>
          <div
            className='tab-pane fade show active'
            id='pills-all'
            role='tabpanel'
            aria-labelledby='pills-all-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img1.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img2.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img3.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img4.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img5.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img6.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img7.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img8.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img9.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img10.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img11.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img12.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='tab-pane fade'
            id='pills-ui-design'
            role='tabpanel'
            aria-labelledby='pills-ui-design-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img3.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img4.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img5.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img6.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img7.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img8.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img9.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img10.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img11.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img12.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='tab-pane fade'
            id='pills-web-design'
            role='tabpanel'
            aria-labelledby='pills-web-design-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img1.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img3.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img4.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img5.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img6.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img7.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img8.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img9.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img10.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img11.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img12.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='tab-pane fade'
            id='pills-development'
            role='tabpanel'
            aria-labelledby='pills-development-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img4.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img5.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img1.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img2.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img3.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img6.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img7.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img8.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img9.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img10.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img11.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img12.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='tab-pane fade'
            id='pills-presentation'
            role='tabpanel'
            aria-labelledby='pills-presentation-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img6.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img7.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img8.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img1.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img2.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img3.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img4.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img5.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img9.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img10.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img11.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xxl-3 col-md-4 col-sm-6'>
                <div className='hover-scale-img border radius-16 overflow-hidden'>
                  <div className='max-h-266-px overflow-hidden'>
                    <img
                      src='assets/images/gallery/gallery-img12.png'
                      alt='WowDash React Vite'
                      className='hover-scale-img__img w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='py-16 px-24'>
                    <h6 className='mb-4'>This is Image title</h6>
                    <p className='mb-0 text-sm text-secondary-light'>
                      UI Design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryLayer;
