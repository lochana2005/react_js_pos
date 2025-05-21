import { Icon } from "@iconify/react/dist/iconify.js";

const ButtonsWithLabel = () => {
  return (
    <div className='col-xl-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Buttons with Label</h6>
        </div>
        <div className='card-body p-24'>
          <div className='d-flex flex-wrap align-items-center gap-3'>
            <button
              type='button'
              className='btn btn-primary-600 radius-8 px-20 py-11 d-flex align-items-center gap-2'
            >
              <Icon
                icon='mingcute:square-arrow-left-line'
                className='text-xl'
              />{" "}
              Left Icon
            </button>
            <button
              type='button'
              className='btn btn-outline-primary-600 radius-8 px-20 py-11 d-flex align-items-center gap-2'
            >
              <Icon
                icon='mingcute:square-arrow-left-line'
                className='text-xl'
              />{" "}
              Left Icon
            </button>
            <button
              type='button'
              className='btn btn-success-600 radius-8 px-20 py-11 d-flex align-items-center gap-2'
            >
              Right Icon{" "}
              <Icon
                icon='mingcute:square-arrow-right-line'
                className='text-xl'
              />
            </button>
            <button
              type='button'
              className='btn btn-outline-success-600 radius-8 px-20 py-11 d-flex align-items-center gap-2'
            >
              Right Icon{" "}
              <Icon
                icon='mingcute:square-arrow-right-line'
                className='text-xl'
              />
            </button>
            <button
              type='button'
              className='btn btn-warning-600 radius-8 p-20 w-60-px h-50-px d-flex align-items-center justify-content-center gap-2'
            >
              <Icon icon='mingcute:square-arrow-up-line' className='text-xl' />
            </button>
            <button
              type='button'
              className='btn btn-outline-info-600 radius-8 p-20 w-60-px h-50-px d-flex align-items-center justify-content-center gap-2'
            >
              <Icon
                icon='mingcute:square-arrow-down-line'
                className='text-xl'
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsWithLabel;
