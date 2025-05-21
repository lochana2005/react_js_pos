import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";

const DefaultCard = () => {
  return (
    <div className='mb-40'>
      <div className='row gy-4'>
        <div className='col-xxl-3 col-sm-6'>
          <div className='card h-100 radius-12'>
            <img
              src='assets/images/card-component/card-img1.png'
              className='card-img-top'
              alt='WowDash React Vite'
            />
            <div className='card-body p-16'>
              <h5
                className='card-title text-lg text-primary-light
             mb-6'
              >
                This is Card title
              </h5>
              <p className='card-text text-neutral-600'>
                We quickly learn to fear and thus automatically avo id
                potentially stressful situations of all kinds, including the
                most common of all .
              </p>
              <Link
                to='#'
                className='btn text-primary-600 hover-text-primary px-0 py-10 d-inline-flex align-items-center gap-2'
              >
                Read More{" "}
                <Icon icon='iconamoon:arrow-right-2' className='text-xl' />
              </Link>
            </div>
          </div>
        </div>
        <div className='col-xxl-3 col-sm-6'>
          <div className='card h-100 radius-12'>
            <img
              src='assets/images/card-component/card-img2.png'
              className='card-img-top'
              alt='WowDash React Vite'
            />
            <div className='card-body p-16 text-center'>
              <h5
                className='card-title text-lg text-primary-light
             mb-6'
              >
                This is Card title
              </h5>
              <p className='card-text text-neutral-600'>
                We quickly learn to fear and thus automatically avo id
                potentially stressful situations of all kinds, including the
                most common of all .
              </p>
              <Link
                to='#'
                className='btn btn-primary-600 px-12 py-10 d-inline-flex align-items-center gap-2'
              >
                Read More{" "}
                <Icon icon='iconamoon:arrow-right-2' className='text-xl' />
              </Link>
            </div>
          </div>
        </div>
        <div className='col-xxl-3 col-sm-6'>
          <div className='card h-100 radius-12'>
            <img
              src='assets/images/card-component/card-img3.png'
              className='card-img-top'
              alt='WowDash React Vite'
            />
            <div className='card-body p-16 text-end'>
              <h5
                className='card-title text-lg text-primary-light
             mb-6'
              >
                This is Card title
              </h5>
              <p className='card-text text-neutral-600'>
                We quickly learn to fear and thus automatically avo id
                potentially stressful situations of all kinds, including the
                most common of all .
              </p>
              <div className='d-flex flex-wrap align-items-center justify-content-end gap-3'>
                <Link
                  to='#'
                  className='btn btn-primary-100 text-white text-primary-600 px-12 py-10 d-inline-flex align-items-center gap-2'
                >
                  Read More{" "}
                  <Icon icon='iconamoon:arrow-right-2' className='text-xl' />
                </Link>
                <button className='btn btn-warning-100 text-white text-warning-600 px-12 py-10 d-inline-flex align-items-center gap-2'>
                  Book Mark{" "}
                  <Icon icon='bx:bookmark-minus' className='text-xl' />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xxl-3 col-sm-6'>
          <div className='card h-100 radius-12'>
            <img
              src='assets/images/card-component/card-img4.png'
              className='card-img-top'
              alt='WowDash React Vite'
            />
            <div className='card-body p-16 text-center'>
              <h5
                className='card-title text-lg text-primary-light
             mb-6'
              >
                This is Card title
              </h5>
              <p className='card-text text-neutral-600'>
                We quickly learn to fear and thus automatically avo id
                potentially stressful situations of all kinds, including the
                most common of all .
              </p>
              <button className='btn btn-primary-600 px-12 py-10 d-inline-flex align-items-center gap-2'>
                <Icon icon='iconamoon:arrow-right-2' className='text-xl' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultCard;
