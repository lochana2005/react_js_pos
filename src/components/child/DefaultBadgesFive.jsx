import { Icon } from "@iconify/react/dist/iconify.js";

const DefaultBadgesFive = () => {
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Default Badges</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex flex-wrap align-items-center gap-4'>
            <div className='d-flex flex-wrap align-items-center gap-3'>
              <button
                type='button'
                className='btn btn-primary-600 position-relative px-20 py-8 text-sm line-height-1 d-flex align-items-center'
              >
                Inbox
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary-600 border border-white'>
                  2
                </span>
              </button>
            </div>
            <div className='d-flex flex-wrap align-items-center gap-3'>
              <button
                type='button'
                className='btn btn-warning-600 position-relative px-20 py-8 text-sm line-height-1 d-flex align-items-center'
              >
                Inbox
                <span className='position-absolute top-0 end-0 translate-middle-y badge rounded-pill bg-danger-600'>
                  99+
                </span>
              </button>
            </div>
            <div className='d-flex flex-wrap align-items-center gap-3'>
              <button type='button' className='position-relative'>
                <img
                  src='assets/images/lang-flag.png'
                  alt='image_icon'
                  className='w-32-px h-32-px object-fit-cover rounded-circle'
                />
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger-600 border border-white'>
                  2
                </span>
              </button>
            </div>
            <button
              className='position-relative rounded-circle d-flex justify-content-center align-items-center'
              type='button'
            >
              <Icon
                icon='mage:email'
                className='text-primary-light text-2xxl'
              />
              <span className='position-absolute top-0 start-50 translate-middle-y badge rounded-pill bg-danger-600 border-0'>
                2
              </span>
            </button>
            <button
              className='position-relative rounded-circle d-flex justify-content-center align-items-center'
              type='button'
            >
              <Icon
                icon='iconoir:bell'
                className='text-primary-light text-2xxl'
              />
              <span className='position-absolute top-0 start-50 translate-middle-y badge rounded-pill bg-danger-600 border-0'>
                2
              </span>
            </button>
            <button
              className='position-relative rounded-circle d-flex justify-content-center align-items-center'
              type='button'
            >
              <Icon
                icon='iconoir:bell'
                className='text-primary-light text-2xxl'
              />
              <span className='position-absolute top-0 start-50 translate-middle-y rounded-pill bg-danger-600 border-0 w-8-px h-8-px' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultBadgesFive;
