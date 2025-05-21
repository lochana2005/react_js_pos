import { Icon } from "@iconify/react/dist/iconify.js";

const ColorsTags = () => {
  return (
    <div className='col-sm-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Colors tags</h6>
        </div>
        <div className='card-body p-24'>
          <ul className='d-flex flex-wrap align-items-center gap-32'>
            <li className='text-white bg-primary-600 border border-primary-600 radius-4 px-8 py-4 text-sm line-height-1 fw-medium'>
              Label
            </li>
            <li className='text-white bg-lilac-600 border border-lilac-600 radius-4 px-8 py-4 text-sm line-height-1 fw-medium'>
              Label
            </li>
            <li className='text-white bg-warning-600 border border-warning-600 radius-4 px-8 py-4 text-sm line-height-1 fw-medium'>
              Label
            </li>
          </ul>
          <ul className='tag-list d-flex flex-wrap align-items-center gap-20 mt-20'>
            <li className='text-primary-600 border border-primary-600 radius-4 px-8 py-2 text-sm line-height-1 fw-medium d-flex align-items-center gap-1'>
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
            <li className='text-lilac-600 border border-lilac-600 radius-4 px-8 py-2 text-sm line-height-1 fw-medium d-flex align-items-center gap-1'>
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
            <li className='text-warning-600 border border-warning-600 radius-4 px-8 py-2 text-sm line-height-1 fw-medium d-flex align-items-center gap-1'>
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

export default ColorsTags;
