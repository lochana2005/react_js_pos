import { Icon } from "@iconify/react/dist/iconify.js";

import { Link } from "react-router-dom";

const StudentProgressOne = () => {
  return (
    <div className='col-xxl-4 col-md-6'>
      <div className='card'>
        <div className='card-header'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>Student Progress</h6>
            <Link
              to='#'
              className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
            >
              View All
              <Icon icon='solar:alt-arrow-right-linear' className='icon' />
            </Link>
          </div>
        </div>
        <div className='card-body'>
          <div className='d-flex align-items-center justify-content-between gap-3 mb-24'>
            <div className='d-flex align-items-center'>
              <img
                src='assets/images/home-six/student-img1.png'
                alt='WowDash React Vite'
                className='w-40-px h-40-px radius-8 flex-shrink-0 me-12 overflow-hidden'
              />
              <div className='flex-grow-1'>
                <h6 className='text-md mb-0 fw-medium'>Theresa Webb</h6>
                <span className='text-sm text-secondary-light fw-medium'>
                  UI/UX Design Course
                </span>
              </div>
            </div>
            <div className=''>
              <span className='text-primary-light text-sm d-block text-end'>
                <svg
                  className='radial-progress'
                  data-percentage={33}
                  viewBox='0 0 80 80'
                >
                  <circle className='incomplete' cx={40} cy={40} r={35} />
                  <circle
                    className='complete'
                    cx={40}
                    cy={40}
                    r={35}
                    style={{ strokeDashoffset: "39.58406743523136" }}
                  ></circle>
                  <text
                    className='percentage'
                    x='50%'
                    y='57%'
                    transform='matrix(0, 1, -1, 0, 80, 0)'
                  >
                    33
                  </text>
                </svg>
              </span>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-between gap-3 mb-24'>
            <div className='d-flex align-items-center'>
              <img
                src='assets/images/home-six/student-img2.png'
                alt='WowDash React Vite'
                className='w-40-px h-40-px radius-8 flex-shrink-0 me-12 overflow-hidden'
              />
              <div className='flex-grow-1'>
                <h6 className='text-md mb-0 fw-medium'>Robert Fox</h6>
                <span className='text-sm text-secondary-light fw-medium'>
                  Graphic Design Course
                </span>
              </div>
            </div>
            <div className=''>
              <span className='text-primary-light text-sm d-block text-end'>
                <svg
                  className='radial-progress'
                  data-percentage={70}
                  viewBox='0 0 80 80'
                >
                  <circle className='incomplete' cx={40} cy={40} r={35} />
                  <circle
                    className='complete'
                    cx={40}
                    cy={40}
                    r={35}
                    style={{ strokeDashoffset: "39.58406743523136" }}
                  ></circle>
                  <text
                    className='percentage'
                    x='50%'
                    y='57%'
                    transform='matrix(0, 1, -1, 0, 80, 0)'
                  >
                    70
                  </text>
                </svg>
              </span>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-between gap-3 mb-24'>
            <div className='d-flex align-items-center'>
              <img
                src='assets/images/home-six/student-img3.png'
                alt='WowDash React Vite'
                className='w-40-px h-40-px radius-8 flex-shrink-0 me-12 overflow-hidden'
              />
              <div className='flex-grow-1'>
                <h6 className='text-md mb-0 fw-medium'>Guy Hawkins</h6>
                <span className='text-sm text-secondary-light fw-medium'>
                  Web developer Course
                </span>
              </div>
            </div>
            <div className=''>
              <span className='text-primary-light text-sm d-block text-end'>
                <svg
                  className='radial-progress'
                  data-percentage={80}
                  viewBox='0 0 80 80'
                >
                  <circle className='incomplete' cx={40} cy={40} r={35} />
                  <circle
                    className='complete'
                    cx={40}
                    cy={40}
                    r={35}
                    style={{ strokeDashoffset: "39.58406743523136" }}
                  ></circle>
                  <text
                    className='percentage'
                    x='50%'
                    y='57%'
                    transform='matrix(0, 1, -1, 0, 80, 0)'
                  >
                    80
                  </text>
                </svg>
              </span>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-between gap-3 mb-24'>
            <div className='d-flex align-items-center'>
              <img
                src='assets/images/home-six/student-img4.png'
                alt='WowDash React Vite'
                className='w-40-px h-40-px radius-8 flex-shrink-0 me-12 overflow-hidden'
              />
              <div className='flex-grow-1'>
                <h6 className='text-md mb-0 fw-medium'>Cody Fisher</h6>
                <span className='text-sm text-secondary-light fw-medium'>
                  UI/UX Design Course
                </span>
              </div>
            </div>
            <div className=''>
              <span className='text-primary-light text-sm d-block text-end'>
                <svg
                  className='radial-progress'
                  data-percentage={20}
                  viewBox='0 0 80 80'
                >
                  <circle className='incomplete' cx={40} cy={40} r={35} />
                  <circle
                    className='complete'
                    cx={40}
                    cy={40}
                    r={35}
                    style={{ strokeDashoffset: "39.58406743523136" }}
                  ></circle>
                  <text
                    className='percentage'
                    x='50%'
                    y='57%'
                    transform='matrix(0, 1, -1, 0, 80, 0)'
                  >
                    20
                  </text>
                </svg>
              </span>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-between gap-3 mb-24'>
            <div className='d-flex align-items-center'>
              <img
                src='assets/images/home-six/student-img5.png'
                alt='WowDash React Vite'
                className='w-40-px h-40-px radius-8 flex-shrink-0 me-12 overflow-hidden'
              />
              <div className='flex-grow-1'>
                <h6 className='text-md mb-0 fw-medium'>Jacob Jones</h6>
                <span className='text-sm text-secondary-light fw-medium'>
                  UI/UX Design Course
                </span>
              </div>
            </div>
            <div className=''>
              <span className='text-primary-light text-sm d-block text-end'>
                <svg
                  className='radial-progress'
                  data-percentage={40}
                  viewBox='0 0 80 80'
                >
                  <circle className='incomplete' cx={40} cy={40} r={35} />
                  <circle
                    className='complete'
                    cx={40}
                    cy={40}
                    r={35}
                    style={{ strokeDashoffset: "39.58406743523136" }}
                  ></circle>
                  <text
                    className='percentage'
                    x='50%'
                    y='57%'
                    transform='matrix(0, 1, -1, 0, 80, 0)'
                  >
                    40
                  </text>
                </svg>
              </span>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-between gap-3 mb-0'>
            <div className='d-flex align-items-center'>
              <img
                src='assets/images/home-six/student-img6.png'
                alt='WowDash React Vite'
                className='w-40-px h-40-px radius-8 flex-shrink-0 me-12 overflow-hidden'
              />
              <div className='flex-grow-1'>
                <h6 className='text-md mb-0 fw-medium'>Darlene Robertson</h6>
                <span className='text-sm text-secondary-light fw-medium'>
                  UI/UX Design Course
                </span>
              </div>
            </div>
            <div className=''>
              <span className='text-primary-light text-sm d-block text-end'>
                <svg
                  className='radial-progress'
                  data-percentage={24}
                  viewBox='0 0 80 80'
                >
                  <circle className='incomplete' cx={40} cy={40} r={35} />
                  <circle
                    className='complete'
                    cx={40}
                    cy={40}
                    r={35}
                    style={{ strokeDashoffset: "39.58406743523136" }}
                  ></circle>
                  <text
                    className='percentage'
                    x='50%'
                    y='57%'
                    transform='matrix(0, 1, -1, 0, 80, 0)'
                  >
                    24
                  </text>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProgressOne;
