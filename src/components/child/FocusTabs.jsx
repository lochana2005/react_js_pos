const FocusTabs = () => {
  return (
    <div className='col-xxl-6'>
      <div className='card p-0 overflow-hidden position-relative radius-12 h-100'>
        <div className='card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0'>
          <h6 className='text-lg mb-0'>Focus Tabs </h6>
        </div>
        <div className='card-body p-24 pt-10'>
          <ul
            className='nav focus-tab nav-pills mb-16'
            id='pills-tab-two'
            role='tablist'
          >
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link fw-semibold text-primary-light radius-4 px-16 py-10 active'
                id='pills-focus-home-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-focus-home'
                type='button'
                role='tab'
                aria-controls='pills-focus-home'
                aria-selected='true'
              >
                Home
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link fw-semibold text-primary-light radius-4 px-16 py-10'
                id='pills-focus-details-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-focus-details'
                type='button'
                role='tab'
                aria-controls='pills-focus-details'
                aria-selected='false'
              >
                Details
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link fw-semibold text-primary-light radius-4 px-16 py-10'
                id='pills-focus-profile-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-focus-profile'
                type='button'
                role='tab'
                aria-controls='pills-focus-profile'
                aria-selected='false'
              >
                Profile
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link fw-semibold text-primary-light radius-4 px-16 py-10'
                id='pills-focus-settings-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-focus-settings'
                type='button'
                role='tab'
                aria-controls='pills-focus-settings'
                aria-selected='false'
              >
                Settings
              </button>
            </li>
          </ul>
          <div className='tab-content' id='pills-tab-twoContent'>
            <div
              className='tab-pane fade show active'
              id='pills-focus-home'
              role='tabpanel'
              aria-labelledby='pills-focus-home-tab'
              tabIndex={0}
            >
              <div>
                <h6 className='text-lg mb-8'>Title</h6>
                <p className='text-secondary-light mb-16'>
                  Lorem Ipsum&nbsp;is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not{" "}
                </p>
                <p className='text-secondary-light mb-0'>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop
                </p>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-focus-details'
              role='tabpanel'
              aria-labelledby='pills-focus-details-tab'
              tabIndex={0}
            >
              <div>
                <h6 className='text-lg mb-8'>Title</h6>
                <p className='text-secondary-light mb-16'>
                  Lorem Ipsum&nbsp;is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not{" "}
                </p>
                <p className='text-secondary-light mb-0'>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop
                </p>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-focus-profile'
              role='tabpanel'
              aria-labelledby='pills-focus-profile-tab'
              tabIndex={0}
            >
              <div>
                <h6 className='text-lg mb-8'>Title</h6>
                <p className='text-secondary-light mb-16'>
                  Lorem Ipsum&nbsp;is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not{" "}
                </p>
                <p className='text-secondary-light mb-0'>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop
                </p>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-focus-settings'
              role='tabpanel'
              aria-labelledby='pills-focus-settings-tab'
              tabIndex={0}
            >
              <div>
                <h6 className='text-lg mb-8'>Title</h6>
                <p className='text-secondary-light mb-16'>
                  Lorem Ipsum&nbsp;is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not{" "}
                </p>
                <p className='text-secondary-light mb-0'>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusTabs;
