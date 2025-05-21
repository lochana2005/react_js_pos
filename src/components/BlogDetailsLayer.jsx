import { Link } from "react-router-dom";

const BlogDetailsLayer = () => {
  return (
    <div className='row gy-4'>
      <div className='col-lg-8'>
        <div className='card p-0 radius-12 overflow-hidden'>
          <div className='card-body p-0'>
            <img
              src='assets/images/blog/blog-details.png'
              alt='WowDash React Vite'
              className='w-100 h-100 object-fit-cover'
            />
            <div className='p-32'>
              <div className='d-flex align-items-center gap-16 justify-content-between flex-wrap mb-24'>
                <div className='d-flex align-items-center gap-8'>
                  <img
                    src='assets/images/user-list/user-list1.png'
                    alt='WowDash React Vite'
                    className='w-48-px h-48-px rounded-circle object-fit-cover'
                  />
                  <div className='d-flex flex-column'>
                    <h6 className='text-lg mb-0'>John Doe</h6>
                    <span className='text-sm text-neutral-500'>1 day ago</span>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-md-3 gap-2 flex-wrap'>
                  <div className='d-flex align-items-center gap-8 text-neutral-500 text-lg fw-medium'>
                    <i className='ri-chat-3-line' />
                    10 Comments
                  </div>
                  <div className='d-flex align-items-center gap-8 text-neutral-500 text-lg fw-medium'>
                    <i className='ri-calendar-2-line' />
                    Jan 17, 2024
                  </div>
                </div>
              </div>
              <h3 className='mb-16'>
                {" "}
                How to hire a right business executive for your company{" "}
              </h3>
              <p className='text-neutral-500 mb-16'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                voluptate quaerat possimus neque animi ex placeat ducimus
                reiciendis saepe mollitia tenetur aspernatur unde illum fugiat
              </p>
              <p className='text-neutral-500 mb-16'>
                reprehenderit repellendus dicta accusantium laborum eum et
                inventore. Perferendis temporibus reiciendis ut magni numquam
                molestiae fugit, laboriosam adipisci modi, quisquam, rem
                aspernatur fugiat neque velit ratione? Ipsum maxime aperiam
                minus dolorem voluptatibus suscipit debitis delectus numquam.
              </p>
              <p className='text-neutral-500 mb-16'>
                reprehenderit repellendus dicta accusantium laborum eum et
                inventore. Perferendis temporibus reiciendis ut magni numquam
                molestiae fugit, laboriosam adipisci modi, quisquam, rem
                aspernatur fugiat neque velit ratione? Ipsum maxime aperiam
                minus dolorem voluptatibus suscipit debitis delectus numquam.
                Illum delectus dicta sit soluta dolores odit facilis
                exercitationem animi quibusdam, autem nulla omnis harum magnam
                est ad aperiam quasi qui? Enim, natus porro debitis maiores ad
                soluta totam nesciunt deleniti tempora ipsum id consectetur?
                Alias dignissimos vel corrupti!
              </p>
            </div>
          </div>
        </div>
        <div className='card mt-24'>
          <div className='card-header border-bottom'>
            <h6 className='text-xl mb-0'>Comments</h6>
          </div>
          <div className='card-body p-24'>
            <div className='comment-list d-flex flex-column'>
              <div className='comment-list__item'>
                <div className='d-flex align-items-start gap-16'>
                  <div className='flex-shrink-0'>
                    <img
                      src='assets/images/user-list/user-list1.png'
                      alt='WowDash React Vite'
                      className='w-60-px h-60-px rounded-circle object-fit-cover'
                    />
                  </div>
                  <div className='flex-grow-1 border-bottom pb-40 mb-40 border-dashed'>
                    <h6 className='text-lg mb-4'>Jenny Wilson</h6>
                    <span className='text-neutral-500 text-sm'>
                      Jan 21, 2024 at 11:25 pm
                    </span>
                    <p className='text-neutral-600 text-md my-16'>
                      Lorem ipsum dolor sit amet consectetur. Nec nunc
                      pellentesque massa pretium. Quam sapien nec venenatis
                      vivamus sed cras faucibus mi viverra. Quam faucibus morbi
                      cras vitae neque. Necnunc pellentesque massa pretium.
                    </p>
                    <div className='d-flex align-items-center gap-8'>
                      <Link
                        href='#'
                        className='btn btn-sm btn-danger-600 d-flex align-items-center gap-1 text-xxs px-8 py-6'
                      >
                        <i className='ri-heart-3-line text-xs line-height-1' />
                        Like
                      </Link>
                      <Link
                        href='#comment-form'
                        className='btn btn-sm btn-primary-600 d-flex align-items-center gap-1 text-xxs px-8 py-6'
                      >
                        <i className='ri-reply-line text-xs line-height-1' />
                        Reply
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='comment-list__item ms--48'>
                <div className='d-flex align-items-start gap-16'>
                  <div className='flex-shrink-0'>
                    <img
                      src='assets/images/user-list/user-list2.png'
                      alt='WowDash React Vite'
                      className='w-60-px h-60-px rounded-circle object-fit-cover'
                    />
                  </div>
                  <div className='flex-grow-1 border-bottom pb-40 mb-40 border-dashed'>
                    <h6 className='text-lg mb-4'>Robiul Hasan</h6>
                    <span className='text-neutral-500 text-sm'>
                      Jan 21, 2024 at 11:25 pm
                    </span>
                    <p className='text-neutral-600 text-md my-16'>
                      Lorem ipsum dolor sit amet consectetur. Nec nunc
                      pellentesque massa pretium. Quam sapien nec venenatis
                      vivamus sed cras faucibus mi viverra. Quam faucibus morbi
                      cras vitae neque. Necnunc pellentesque massa pretium.
                    </p>
                    <div className='d-flex align-items-center gap-8'>
                      <Link
                        href='#'
                        className='btn btn-sm btn-danger-600 d-flex align-items-center gap-1 text-xxs px-8 py-6'
                      >
                        <i className='ri-heart-3-line text-xs line-height-1' />
                        Like
                      </Link>
                      <Link
                        href='#comment-form'
                        className='btn btn-sm btn-primary-600 d-flex align-items-center gap-1 text-xxs px-8 py-6'
                      >
                        <i className='ri-reply-line text-xs line-height-1' />
                        Reply
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='comment-list__item ms--48'>
                <div className='d-flex align-items-start gap-16'>
                  <div className='flex-shrink-0'>
                    <img
                      src='assets/images/user-list/user-list3.png'
                      alt='WowDash React Vite'
                      className='w-60-px h-60-px rounded-circle object-fit-cover'
                    />
                  </div>
                  <div className='flex-grow-1 border-bottom pb-40 mb-40 border-dashed'>
                    <h6 className='text-lg mb-4'>John Doe</h6>
                    <span className='text-neutral-500 text-sm'>
                      Jan 21, 2024 at 11:25 pm
                    </span>
                    <p className='text-neutral-600 text-md my-16'>
                      Lorem ipsum dolor sit amet consectetur. Nec nunc
                      pellentesque massa pretium. Quam sapien nec venenatis
                      vivamus sed cras faucibus mi viverra. Quam faucibus morbi
                      cras vitae neque. Necnunc pellentesque massa pretium.
                    </p>
                    <div className='d-flex align-items-center gap-8'>
                      <Link
                        href='#'
                        className='btn btn-sm btn-danger-600 d-flex align-items-center gap-1 text-xxs px-8 py-6'
                      >
                        <i className='ri-heart-3-line text-xs line-height-1' />
                        Like
                      </Link>
                      <Link
                        href='#comment-form'
                        className='btn btn-sm btn-primary-600 d-flex align-items-center gap-1 text-xxs px-8 py-6'
                      >
                        <i className='ri-reply-line text-xs line-height-1' />
                        Reply
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='comment-list__item'>
                <div className='d-flex align-items-start gap-16'>
                  <div className='flex-shrink-0'>
                    <img
                      src='assets/images/user-list/user-list4.png'
                      alt='WowDash React Vite'
                      className='w-60-px h-60-px rounded-circle object-fit-cover'
                    />
                  </div>
                  <div className='flex-grow-1 border-bottom pb-40 mb-40 border-dashed'>
                    <h6 className='text-lg mb-4'>Mariam Akter</h6>
                    <span className='text-neutral-500 text-sm'>
                      Jan 21, 2024 at 11:25 pm
                    </span>
                    <p className='text-neutral-600 text-md my-16'>
                      Lorem ipsum dolor sit amet consectetur. Nec nunc
                      pellentesque massa pretium. Quam sapien nec venenatis
                      vivamus sed cras faucibus mi viverra. Quam faucibus morbi
                      cras vitae neque. Necnunc pellentesque massa pretium.
                    </p>
                    <div className='d-flex align-items-center gap-8'>
                      <Link
                        href='#'
                        className='btn btn-sm btn-danger-600 d-flex align-items-center gap-1 text-xxs px-8 py-6'
                      >
                        <i className='ri-heart-3-line text-xs line-height-1' />
                        Like
                      </Link>
                      <Link
                        href='#comment-form'
                        className='btn btn-sm btn-primary-600 d-flex align-items-center gap-1 text-xxs px-8 py-6'
                      >
                        <i className='ri-reply-line text-xs line-height-1' />
                        Reply
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='comment-list__item ms--48'>
                <div className='d-flex align-items-start gap-16'>
                  <div className='flex-shrink-0'>
                    <img
                      src='assets/images/user-list/user-list6.png'
                      alt='WowDash React Vite'
                      className='w-60-px h-60-px rounded-circle object-fit-cover'
                    />
                  </div>
                  <div className='flex-grow-1'>
                    <h6 className='text-lg mb-4'>Dainel Defoe</h6>
                    <span className='text-neutral-500 text-sm'>
                      Jan 21, 2024 at 11:25 pm
                    </span>
                    <p className='text-neutral-600 text-md my-16'>
                      Lorem ipsum dolor sit amet consectetur. Nec nunc
                      pellentesque massa pretium. Quam sapien nec venenatis
                      vivamus sed cras faucibus mi viverra. Quam faucibus morbi
                      cras vitae neque. Necnunc pellentesque massa pretium.
                    </p>
                    <div className='d-flex align-items-center gap-8'>
                      <Link
                        href='#'
                        className='btn btn-sm btn-danger-600 d-flex align-items-center gap-1 text-xxs px-8 py-6'
                      >
                        <i className='ri-heart-3-line text-xs line-height-1' />
                        Like
                      </Link>
                      <Link
                        href='#comment-form'
                        className='btn btn-sm btn-primary-600 d-flex align-items-center gap-1 text-xxs px-8 py-6'
                      >
                        <i className='ri-reply-line text-xs line-height-1' />
                        Reply
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card mt-24' id='comment-form'>
          <div className='card-header border-bottom'>
            <h6 className='text-xl mb-0'>Add A Comment</h6>
          </div>
          <div className='card-body p-24'>
            <form action='#' className='d-flex flex-column gap-16'>
              <div>
                <label className='form-label fw-semibold' htmlFor='username'>
                  Username{" "}
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='username'
                  placeholder='Enter your username'
                />
              </div>
              <div>
                <label className='form-label fw-semibold' htmlFor='email'>
                  Email{" "}
                </label>
                <input
                  type='email'
                  className='form-control border border-neutral-200 radius-8'
                  id='email'
                  placeholder='Enter your email'
                />
              </div>
              <div>
                <label className='form-label fw-semibold' htmlFor='desc'>
                  Email{" "}
                </label>
                <textarea
                  className='form-control border border-neutral-200 radius-8'
                  rows={4}
                  cols={50}
                  id='desc'
                  placeholder='Enter a description...'
                  defaultValue={""}
                />
              </div>
              <button type='submit' className='btn btn-primary-600 radius-8'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Sidebar Start */}
      <div className='col-lg-4'>
        <div className='d-flex flex-column gap-24'>
          {/* Search */}
          <div className='card'>
            <div className='card-header border-bottom'>
              <h6 className='text-xl mb-0'>Search Here</h6>
            </div>
            <div className='card-body p-24'>
              <form className='position-relative'>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8 ps-40'
                  name='search'
                  placeholder='Search'
                />
                <iconify-icon
                  icon='ion:search-outline'
                  className='icon position-absolute positioned-icon top-50 translate-middle-y'
                />
              </form>
            </div>
          </div>
          {/* Latest Blog */}
          <div className='card'>
            <div className='card-header border-bottom'>
              <h6 className='text-xl mb-0'>Latest Posts</h6>
            </div>
            <div className='card-body d-flex flex-column gap-24 p-24'>
              <div className='d-flex flex-wrap'>
                <Link
                  to='/blog-details'
                  className='blog__thumb w-100 radius-12 overflow-hidden'
                >
                  <img
                    src='assets/images/blog/blog5.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </Link>
                <div className='blog__content'>
                  <h6 className='mb-8'>
                    <Link
                      to='/blog-details'
                      className='text-line-2 text-hover-primary-600 text-md transition-2'
                    >
                      How to hire a right business executive for your company
                    </Link>
                  </h6>
                  <p className='text-line-2 text-sm text-neutral-500 mb-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis dolores explicabo corrupti, fuga necessitatibus fugiat
                    adipisci quidem eveniet enim minus.
                  </p>
                </div>
              </div>
              <div className='d-flex flex-wrap'>
                <Link
                  to='/blog-details'
                  className='blog__thumb w-100 radius-12 overflow-hidden'
                >
                  <img
                    src='assets/images/blog/blog6.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </Link>
                <div className='blog__content'>
                  <h6 className='mb-8'>
                    <Link
                      to='/blog-details'
                      className='text-line-2 text-hover-primary-600 text-md transition-2'
                    >
                      The Gig Economy: Adapting to a Flexible Workforce
                    </Link>
                  </h6>
                  <p className='text-line-2 text-sm text-neutral-500 mb-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis dolores explicabo corrupti, fuga necessitatibus fugiat
                    adipisci quidem eveniet enim minus.
                  </p>
                </div>
              </div>
              <div className='d-flex flex-wrap'>
                <Link
                  to='/blog-details'
                  className='blog__thumb w-100 radius-12 overflow-hidden'
                >
                  <img
                    src='assets/images/blog/blog7.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </Link>
                <div className='blog__content'>
                  <h6 className='mb-8'>
                    <Link
                      to='/blog-details'
                      className='text-line-2 text-hover-primary-600 text-md transition-2'
                    >
                      The Future of Remote Work: Strategies for Success
                    </Link>
                  </h6>
                  <p className='text-line-2 text-sm text-neutral-500 mb-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis dolores explicabo corrupti, fuga necessitatibus fugiat
                    adipisci quidem eveniet enim minus.
                  </p>
                </div>
              </div>
              <div className='d-flex flex-wrap'>
                <Link
                  to='/blog-details'
                  className='blog__thumb w-100 radius-12 overflow-hidden'
                >
                  <img
                    src='assets/images/blog/blog6.png'
                    alt='WowDash React Vite'
                    className='w-100 h-100 object-fit-cover'
                  />
                </Link>
                <div className='blog__content'>
                  <h6 className='mb-8'>
                    <Link
                      to='/blog-details'
                      className='text-line-2 text-hover-primary-600 text-md transition-2'
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </Link>
                  </h6>
                  <p className='text-line-2 text-sm text-neutral-500 mb-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis dolores explicabo corrupti, fuga necessitatibus fugiat
                    adipisci quidem eveniet enim minus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Category */}
          <div className='card'>
            <div className='card-header border-bottom'>
              <h6 className='text-xl mb-0'>Tags</h6>
            </div>
            <div className='card-body p-24'>
              <ul>
                <li className='w-100 d-flex align-items-center justify-content-between flex-wrap gap-8 border-bottom border-dashed pb-12 mb-12'>
                  <Link
                    to='/blog'
                    className='text-hover-primary-600 transition-2'
                  >
                    {" "}
                    Techbology{" "}
                  </Link>
                  <span className='text-neutral-500 w-28-px h-28-px rounded-circle bg-neutral-100 d-flex justify-content-center align-items-center transition-2 text-xs fw-semibold'>
                    01{" "}
                  </span>
                </li>
                <li className='w-100 d-flex align-items-center justify-content-between flex-wrap gap-8 border-bottom border-dashed pb-12 mb-12'>
                  <Link
                    to='/blog'
                    className='text-hover-primary-600 transition-2'
                  >
                    {" "}
                    Business{" "}
                  </Link>
                  <span className='text-neutral-500 w-28-px h-28-px rounded-circle bg-neutral-100 d-flex justify-content-center align-items-center transition-2 text-xs fw-semibold'>
                    01{" "}
                  </span>
                </li>
                <li className='w-100 d-flex align-items-center justify-content-between flex-wrap gap-8 border-bottom border-dashed pb-12 mb-12'>
                  <Link
                    to='/blog'
                    className='text-hover-primary-600 transition-2'
                  >
                    {" "}
                    Consulting{" "}
                  </Link>
                  <span className='text-neutral-500 w-28-px h-28-px rounded-circle bg-neutral-100 d-flex justify-content-center align-items-center transition-2 text-xs fw-semibold'>
                    01{" "}
                  </span>
                </li>
                <li className='w-100 d-flex align-items-center justify-content-between flex-wrap gap-8 border-bottom border-dashed pb-12 mb-12'>
                  <Link
                    to='/blog'
                    className='text-hover-primary-600 transition-2'
                  >
                    {" "}
                    Course{" "}
                  </Link>
                  <span className='text-neutral-500 w-28-px h-28-px rounded-circle bg-neutral-100 d-flex justify-content-center align-items-center transition-2 text-xs fw-semibold'>
                    01{" "}
                  </span>
                </li>
                <li className='w-100 d-flex align-items-center justify-content-between flex-wrap gap-8'>
                  <Link
                    to='/blog'
                    className='text-hover-primary-600 transition-2'
                  >
                    {" "}
                    Real Estate{" "}
                  </Link>
                  <span className='text-neutral-500 w-28-px h-28-px rounded-circle bg-neutral-100 d-flex justify-content-center align-items-center transition-2 text-xs fw-semibold'>
                    01{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Tags */}
          <div className='card'>
            <div className='card-header border-bottom'>
              <h6 className='text-xl mb-0'>Tags</h6>
            </div>
            <div className='card-body p-24'>
              <div className='d-flex align-items-center flex-wrap gap-8'>
                <Link
                  to='/blog'
                  className='btn btn-sm btn-primary-600 bg-primary-50 bg-hover-primary-600 text-primary-600 border-0 d-inline-flex align-items-center gap-1 text-sm px-16 py-6'
                >
                  Development{" "}
                </Link>
                <Link
                  to='/blog'
                  className='btn btn-sm btn-primary-600 bg-primary-50 bg-hover-primary-600 text-primary-600 border-0 d-inline-flex align-items-center gap-1 text-sm px-16 py-6'
                >
                  Design{" "}
                </Link>
                <Link
                  to='/blog'
                  className='btn btn-sm btn-primary-600 bg-primary-50 bg-hover-primary-600 text-primary-600 border-0 d-inline-flex align-items-center gap-1 text-sm px-16 py-6'
                >
                  Technology{" "}
                </Link>
                <Link
                  to='/blog'
                  className='btn btn-sm btn-primary-600 bg-primary-50 bg-hover-primary-600 text-primary-600 border-0 d-inline-flex align-items-center gap-1 text-sm px-16 py-6'
                >
                  Popular{" "}
                </Link>
                <Link
                  to='/blog'
                  className='btn btn-sm btn-primary-600 bg-primary-50 bg-hover-primary-600 text-primary-600 border-0 d-inline-flex align-items-center gap-1 text-sm px-16 py-6'
                >
                  Codignator{" "}
                </Link>
                <Link
                  to='/blog'
                  className='btn btn-sm btn-primary-600 bg-primary-50 bg-hover-primary-600 text-primary-600 border-0 d-inline-flex align-items-center gap-1 text-sm px-16 py-6'
                >
                  Javascript{" "}
                </Link>
                <Link
                  to='/blog'
                  className='btn btn-sm btn-primary-600 bg-primary-50 bg-hover-primary-600 text-primary-600 border-0 d-inline-flex align-items-center gap-1 text-sm px-16 py-6'
                >
                  Bootstrap{" "}
                </Link>
                <Link
                  to='/blog'
                  className='btn btn-sm btn-primary-600 bg-primary-50 bg-hover-primary-600 text-primary-600 border-0 d-inline-flex align-items-center gap-1 text-sm px-16 py-6'
                >
                  PHP{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsLayer;
