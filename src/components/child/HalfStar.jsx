import { Icon } from "@iconify/react/dist/iconify.js";

const HalfStar = () => {
  return (
    <div className='col-sm-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Half Star</h6>
        </div>
        <div className='card-body p-24'>
          <ul className='d-flex flex-wrap align-items-center gap-12'>
            <li className='text-warning-600 text-2xxl line-height-1'>
              <Icon icon='material-symbols:star' />
            </li>
            <li className='text-warning-600 text-2xxl line-height-1'>
              <Icon icon='material-symbols:star' />
            </li>
            <li className='text-warning-600 text-2xxl line-height-1'>
              <Icon icon='material-symbols:star' />
            </li>
            <li className='text-warning-600 text-2xxl line-height-1'>
              <Icon icon='mdi:star-outline' />
            </li>
            <li className='text-warning-600 text-2xxl line-height-1'>
              <Icon icon='mdi:star-outline' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HalfStar;
