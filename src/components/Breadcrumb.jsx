import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Breadcrumb = ({ title }) => {
  return (
    <div className='d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24'>
      <h6 className='fw-semibold mb-0'>Dashboard</h6>
      <ul className='d-flex align-items-center gap-2'>
        <li className='fw-medium'>
          <Link
            to='/index'
            className='d-flex align-items-center gap-1 hover-text-primary'
          >
            <Icon
              icon='solar:home-smile-angle-outline'
              className='icon text-lg'
            />
            Dashboard
          </Link>
        </li>
        <li> - </li>
        <li className='fw-medium'>{title}</li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
