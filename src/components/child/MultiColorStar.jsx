import { Icon } from "@iconify/react/dist/iconify.js";

const MultiColorStar = () => {
  return (
    <div className='col-sm-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Multi Color</h6>
        </div>
        <div className='card-body p-24'>
          <ul className='d-flex flex-wrap align-items-center gap-12'>
            <li className='text-2xxl line-height-1 text-primary-600'>
              <Icon icon='material-symbols:star' />
            </li>
            <li className='text-2xxl line-height-1 text-lilac-600'>
              <Icon icon='material-symbols:star' />
            </li>
            <li className='text-2xxl line-height-1 text-success-600'>
              <Icon icon='material-symbols:star' />
            </li>
            <li className='text-2xxl line-height-1 text-info-600'>
              <Icon icon='material-symbols:star' />
            </li>
            <li className='text-2xxl line-height-1 text-danger-600'>
              <Icon icon='material-symbols:star' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MultiColorStar;
