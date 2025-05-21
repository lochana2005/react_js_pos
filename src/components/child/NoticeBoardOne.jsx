import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";

const NoticeBoardOne = () => {
  return (
    <div className='col-xxl-4'>
      <div className='card h-100'>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>Notice board</h6>
            <Link
              to='#'
              className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
            >
              View All
              <Icon icon='solar:alt-arrow-right-linear' className='icon' />
            </Link>
          </div>
          <div className='d-flex align-items-start gap-2 mb-20'>
            <img
              src='assets/images/notice/board-img1.png'
              alt='WowDash React Vite'
              className='flex-shrink-0 w-40-px h-40-px me-12 radius-8 me-12'
            />
            <div className='flex-grow-1'>
              <h6 className='text-md mb-1 fw-semibold'>Admin</h6>
              <p className='text-sm text-secondary-light fw-medium mb-1'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy.
              </p>
              <span className='text-sm text-secondary-light fw-normal'>
                25 Jan 2024
              </span>
            </div>
          </div>
          <div className='d-flex align-items-start gap-2 mb-20'>
            <img
              src='assets/images/notice/board-img2.png'
              alt='WowDash React Vite'
              className='flex-shrink-0 w-40-px h-40-px me-12 radius-8 me-12'
            />
            <div className='flex-grow-1'>
              <h6 className='text-md mb-1 fw-semibold'>Kathryn Murphy</h6>
              <p className='text-sm text-secondary-light fw-medium mb-1'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <span className='text-sm text-secondary-light fw-normal'>
                25 Jan 2024
              </span>
            </div>
          </div>
          <div className='d-flex align-items-start gap-2'>
            <img
              src='assets/images/notice/board-img3.png'
              alt='WowDash React Vite'
              className='flex-shrink-0 w-40-px h-40-px me-12 radius-8 me-12'
            />
            <div className='flex-grow-1'>
              <h6 className='text-md mb-1 fw-semibold'>Cameron Williamson</h6>
              <p className='text-sm text-secondary-light fw-medium mb-1'>
                Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
              </p>
              <span className='text-sm text-secondary-light fw-normal'>
                25 Jan 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoardOne;
