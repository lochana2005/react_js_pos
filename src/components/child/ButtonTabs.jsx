const ButtonTabs = () => {
  return (
    <div className='col-xxl-6'>
      <div className='card p-0 overflow-hidden position-relative radius-12 h-100'>
        <div className='card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0'>
          <h6 className='text-lg mb-0'>Button Tabs</h6>
        </div>
        <div className='card-body p-24 pt-10'>
          <ul
            className='nav button-tab nav-pills mb-16'
            id='pills-tab-three'
            role='tablist'
          >
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link fw-semibold text-primary-light radius-4 px-16 py-10 active'
                id='pills-button-home-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-button-home'
                type='button'
                role='tab'
                aria-controls='pills-button-home'
                aria-selected='true'
              >
                Home
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link fw-semibold text-primary-light radius-4 px-16 py-10'
                id='pills-button-details-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-button-details'
                type='button'
                role='tab'
                aria-controls='pills-button-details'
                aria-selected='false'
              >
                Details
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link fw-semibold text-primary-light radius-4 px-16 py-10'
                id='pills-button-profile-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-button-profile'
                type='button'
                role='tab'
                aria-controls='pills-button-profile'
                aria-selected='false'
              >
                Profile
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link fw-semibold text-primary-light radius-4 px-16 py-10'
                id='pills-button-settings-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-button-settings'
                type='button'
                role='tab'
                aria-controls='pills-button-settings'
                aria-selected='false'
              >
                Settings
              </button>
            </li>
          </ul>
          <div className='tab-content' id='pills-tab-threeContent'>
            <div
              className='tab-pane fade show active'
              id='pills-button-home'
              role='tabpanel'
              aria-labelledby='pills-button-home-tab'
              tabIndex={0}
            >
              <div className='d-flex align-items-center gap-3'>
                <div className='flex-shrink-0'>
                  <img
                    src='assets/images/tabs/tabs-image1.png'
                    className='radius-8'
                    alt='WowDash React Vite'
                  />
                </div>
                <div className='flex-grow-1'>
                  <h6 className='text-lg mb-8'>Title</h6>
                  <p className='text-secondary-light mb-16'>
                    Lorem Ipsum&nbsp;is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to{" "}
                  </p>
                  <p className='text-secondary-light mb-0'>
                    {" "}
                    make a type specimen book. It has survived not industry's
                    standard dummy
                  </p>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-button-details'
              role='tabpanel'
              aria-labelledby='pills-button-details-tab'
              tabIndex={0}
            >
              <div className='d-flex align-items-center gap-3'>
                <div className='flex-shrink-0'>
                  <img
                    src='assets/images/tabs/tabs-image2.png'
                    className='radius-8'
                    alt='WowDash React Vite'
                  />
                </div>
                <div className='flex-grow-1'>
                  <h6 className='text-lg mb-8'>Title</h6>
                  <p className='text-secondary-light mb-16'>
                    Lorem Ipsum&nbsp;is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to{" "}
                  </p>
                  <p className='text-secondary-light mb-0'>
                    {" "}
                    make a type specimen book. It has survived not industry's
                    standard dummy
                  </p>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-button-profile'
              role='tabpanel'
              aria-labelledby='pills-button-profile-tab'
              tabIndex={0}
            >
              <div className='d-flex align-items-center gap-3'>
                <div className='flex-shrink-0'>
                  <img
                    src='assets/images/tabs/tabs-image1.png'
                    className='radius-8'
                    alt='WowDash React Vite'
                  />
                </div>
                <div className='flex-grow-1'>
                  <h6 className='text-lg mb-8'>Title</h6>
                  <p className='text-secondary-light mb-16'>
                    Lorem Ipsum&nbsp;is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to{" "}
                  </p>
                  <p className='text-secondary-light mb-0'>
                    {" "}
                    make a type specimen book. It has survived not industry's
                    standard dummy
                  </p>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-button-settings'
              role='tabpanel'
              aria-labelledby='pills-button-settings-tab'
              tabIndex={0}
            >
              <div className='d-flex align-items-center gap-3'>
                <div className='flex-shrink-0'>
                  <img
                    src='assets/images/tabs/tabs-image2.png'
                    className='radius-8'
                    alt='WowDash React Vite'
                  />
                </div>
                <div className='flex-grow-1'>
                  <h6 className='text-lg mb-8'>Title</h6>
                  <p className='text-secondary-light mb-16'>
                    Lorem Ipsum&nbsp;is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to{" "}
                  </p>
                  <p className='text-secondary-light mb-0'>
                    {" "}
                    make a type specimen book. It has survived not industry's
                    standard dummy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonTabs;
