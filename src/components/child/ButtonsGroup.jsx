import { Icon } from "@iconify/react/dist/iconify.js";

const ButtonsGroup = () => {
  return (
    <div className='col-xl-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Buttons Group</h6>
        </div>
        <div className='card-body py-16 px-24 d-flex flex-wrap align-items-center gap-3'>
          <div
            className='btn-group radius-8'
            role='group'
            aria-label='Default button group'
          >
            <button
              type='button'
              className='btn btn-primary-600 px-20 py-11 radius-8'
            >
              Left
            </button>
            <button type='button' className='btn btn-primary-600 px-20 py-11'>
              Middle
            </button>
            <button
              type='button'
              className='btn btn-primary-600 px-20 py-11 radius-8'
            >
              Right
            </button>
          </div>
          <div
            className='btn-group radius-8'
            role='group'
            aria-label='Default button group'
          >
            <button
              type='button'
              className='btn btn-primary-600 px-20 py-11 radius-50'
            >
              Left
            </button>
            <button type='button' className='btn btn-primary-600 px-20 py-11'>
              Middle
            </button>
            <button
              type='button'
              className='btn btn-primary-600 px-20 py-11 radius-50'
            >
              Right
            </button>
          </div>
          <div
            className='btn-group'
            role='group'
            aria-label='Default button group'
          >
            <button
              type='button'
              className='btn btn-light-100 px-20 py-13 radius-8 text-dark d-flex'
            >
              {" "}
              <Icon
                icon='heroicons:bars-3-bottom-left-16-solid'
                className='text-xl'
              />
            </button>
            <button
              type='button'
              className='btn btn-light-100 px-20 py-13 radius-8 text-dark d-flex'
            >
              {" "}
              <Icon icon='fe:bar' className='text-xl' />{" "}
            </button>
            <button
              type='button'
              className='btn btn-light-100 px-20 py-13 radius-8 text-dark d-flex'
            >
              <Icon
                icon='heroicons:bars-3-bottom-right-16-solid'
                className='text-xl'
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsGroup;
