import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";

const CardTextIcon = () => {
  return (
    <div className='mb-40'>
      <h6 className='mb-24'>Card Text &amp; icon </h6>
      <div className='row gy-4'>
        <div className='col-xxl-3 col-sm-6'>
          <div className='card h-100 radius-12'>
            <div className='card-body p-24'>
              <div className='w-64-px h-64-px d-inline-flex align-items-center justify-content-center bg-gradient-purple text-lilac-600 mb-16 radius-12'>
                <Icon
                  icon='solar:medal-ribbons-star-bold'
                  className='h5 mb-0'
                />
              </div>
              <h6 className='mb-8'>Brand Identity</h6>
              <p className='card-text mb-8 text-secondary-light'>
                Random Text gateway to the Origin al the Works Platform, &amp;
                your unique block chain gateway identity.
              </p>
              <Link
                to='#'
                className='btn text-lilac-600 hover-text-lilac px-0 py-0 mt-16 d-inline-flex align-items-center gap-2'
              >
                Read More{" "}
                <Icon icon='iconamoon:arrow-right-2' className='text-xl' />
              </Link>
            </div>
          </div>
        </div>
        <div className='col-xxl-3 col-sm-6'>
          <div className='card h-100 radius-12 text-center'>
            <div className='card-body p-24'>
              <div className='w-64-px h-64-px d-inline-flex align-items-center justify-content-center bg-gradient-primary text-primary-600 mb-16 radius-12'>
                <Icon icon='ri:computer-fill' className='h5 mb-0' />
              </div>
              <h6 className='mb-8'>UI/UX Designer</h6>
              <p className='card-text mb-8 text-secondary-light'>
                Random Text gateway to the Origin al the Works Platform, &amp;
                your unique block chain gateway identity.
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
          <div className='card h-100 radius-12 text-end'>
            <div className='card-body p-24'>
              <div className='w-64-px h-64-px d-inline-flex align-items-center justify-content-center bg-gradient-success text-success-600 mb-16 radius-12'>
                <Icon icon='fluent:toolbox-20-filled' className='h5 mb-0' />
              </div>
              <h6 className='mb-8'>Business Strategy</h6>
              <p className='card-text mb-8 text-secondary-light'>
                Random Text gateway to the Origin al the Works Platform, &amp;
                your unique block chain gateway identity.
              </p>
              <Link
                to='#'
                className='btn text-success-600 hover-text-success px-0 py-10 d-inline-flex align-items-center gap-2'
              >
                Read More{" "}
                <Icon icon='iconamoon:arrow-right-2' className='text-xl' />
              </Link>
            </div>
          </div>
        </div>
        <div className='col-xxl-3 col-sm-6'>
          <div className='card h-100 radius-12 text-center'>
            <div className='card-body p-24'>
              <div className='w-64-px h-64-px d-inline-flex align-items-center justify-content-center bg-gradient-danger text-danger-600 mb-16 radius-12'>
                <Icon icon='ph:code-fill' className='h5 mb-0' />
              </div>
              <h6 className='mb-8'>Business Strategy</h6>
              <p className='card-text mb-8 text-secondary-light'>
                Random Text gateway to the Origin al the Works Platform, &amp;
                your unique block chain gateway identity.
              </p>
              <Link
                to='#'
                className='btn text-danger-600 hover-text-danger px-0 py-10 d-inline-flex align-items-center gap-2'
              >
                Read More{" "}
                <Icon icon='iconamoon:arrow-right-2' className='text-xl' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTextIcon;
