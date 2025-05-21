const DefaultTabs = () => {
  return (
    <div className='col-xxl-6'>
      <div className='card p-0 overflow-hidden position-relative radius-12 h-100'>
        <div className='card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0'>
          <h6 className='text-lg mb-0'>Default Tabs </h6>
        </div>
        <div className='card-body p-24 pt-10'>
          <ul
            className='nav bordered-tab border border-top-0 border-start-0 border-end-0 d-inline-flex nav-pills mb-16'
            id='pills-tab'
            role='tablist'
          >
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link px-16 py-10 active'
                id='pills-home-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-home'
                type='button'
                role='tab'
                aria-controls='pills-home'
                aria-selected='true'
              >
                Home
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link px-16 py-10'
                id='pills-details-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-details'
                type='button'
                role='tab'
                aria-controls='pills-details'
                aria-selected='false'
              >
                Details
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link px-16 py-10'
                id='pills-profile-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-profile'
                type='button'
                role='tab'
                aria-controls='pills-profile'
                aria-selected='false'
              >
                Profile
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link px-16 py-10'
                id='pills-settings-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-settings'
                type='button'
                role='tab'
                aria-controls='pills-settings'
                aria-selected='false'
              >
                Settings
              </button>
            </li>
          </ul>
          <div className='tab-content' id='pills-tabContent'>
            <div
              className='tab-pane fade show active'
              id='pills-home'
              role='tabpanel'
              aria-labelledby='pills-home-tab'
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
              id='pills-details'
              role='tabpanel'
              aria-labelledby='pills-details-tab'
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
              id='pills-profile'
              role='tabpanel'
              aria-labelledby='pills-profile-tab'
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
              id='pills-settings'
              role='tabpanel'
              aria-labelledby='pills-settings-tab'
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

export default DefaultTabs;
