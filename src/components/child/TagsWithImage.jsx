import { Icon } from "@iconify/react/dist/iconify.js";

const TagsWithImage = () => {
  return (
    <div className='col-sm-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Tags With Image</h6>
        </div>
        <div className='card-body p-24'>
          <ul className='d-flex flex-wrap align-items-center gap-20 mt-20'>
            <li className='text-secondary-light border radius-4 px-8 py-4 text-sm line-height-1 fw-medium d-flex align-items-center gap-1'>
              <img
                src='assets/images/flags/flag-tag.png'
                className='w-16-px h-16-px rounded-circle'
                alt='WowDash React Vite'
              />
              Label
            </li>
            <li className='text-secondary-light border radius-4 px-8 py-4 text-sm line-height-1 fw-medium d-flex align-items-center gap-1'>
              <img
                src='assets/images/flags/flag-tag.png'
                className='w-16-px h-16-px rounded-circle'
                alt='WowDash React Vite'
              />
              Label
            </li>
            <li className='text-secondary-light border radius-4 px-8 py-4 text-sm line-height-1 fw-medium d-flex align-items-center gap-1'>
              <img
                src='assets/images/flags/flag-tag.png'
                className='w-16-px h-16-px rounded-circle'
                alt='WowDash React Vite'
              />
              Label
            </li>
          </ul>
          <ul className='tag-list d-flex flex-wrap align-items-center gap-20 mt-20'>
            <li className='text-secondary-light border radius-4 px-8 py-4 text-sm line-height-1 fw-medium d-flex align-items-center gap-1'>
              <img
                src='assets/images/flags/flag-tag.png'
                className='w-16-px h-16-px rounded-circle'
                alt='WowDash React Vite'
              />
              Label
              <button
                className='remove-tag text-lg d-flex justify-content-center align-items-center'
                type='button'
              >
                <Icon
                  icon='iconamoon:sign-times-light'
                  className='icon line-height-1'
                />
              </button>
            </li>
            <li className='text-secondary-light border radius-4 px-8 py-4 text-sm line-height-1 fw-medium d-flex align-items-center gap-1'>
              <img
                src='assets/images/flags/flag-tag.png'
                className='w-16-px h-16-px rounded-circle'
                alt='WowDash React Vite'
              />
              Label
              <button
                className='remove-tag text-lg d-flex justify-content-center align-items-center'
                type='button'
              >
                <Icon
                  icon='iconamoon:sign-times-light'
                  className='icon line-height-1'
                />
              </button>
            </li>
            <li className='text-secondary-light border radius-4 px-8 py-4 text-sm line-height-1 fw-medium d-flex align-items-center gap-1'>
              <img
                src='assets/images/flags/flag-tag.png'
                className='w-16-px h-16-px rounded-circle'
                alt='WowDash React Vite'
              />
              Label
              <button
                className='remove-tag text-lg d-flex justify-content-center align-items-center'
                type='button'
              >
                <Icon
                  icon='iconamoon:sign-times-light'
                  className='icon line-height-1'
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TagsWithImage;
