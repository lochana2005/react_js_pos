import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const CodeGeneratorLayer = () => {
  return (
    <div className='row gy-4 flex-wrap-reverse'>
      <div className='col-xxl-3 col-lg-4'>
        <div className='card h-100 p-0'>
          <div className='card-body p-0'>
            <div className='p-24'>
              <Link
                to='/code-generator-new'
                className='btn btn-primary text-sm btn-sm px-12 py-12 w-100 radius-8 d-flex align-items-center justify-content-center gap-2'
              >
                <i className='ri-messenger-line' />
                New Page
              </Link>
            </div>
            <ul className='ai-chat-list scroll-sm pe-24 ps-24 pb-24'>
              <li className='mb-16 mt-0'>
                <span className='text-primary-600 text-sm fw-semibold'>
                  Today
                </span>
              </li>
              <li className='mb-16'>
                <Link
                  to='/code-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Please create a 5 Column table with HTML Css and js{" "}
                </Link>
              </li>
              <li className='mb-16'>
                <Link
                  to='/code-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Calorie-dense foods: Needs, healthy
                </Link>
              </li>
              <li className='mb-16'>
                <Link
                  to='/code-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Calorie-dense foods: Needs, healthy
                </Link>
              </li>
              <li className='mb-16'>
                <Link
                  to='/code-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Calorie-dense foods: Needs, healthy
                </Link>
              </li>
              <li className='mb-16 mt-24'>
                <span className='text-primary-600 text-sm fw-semibold'>
                  Yesterday
                </span>
              </li>
              <li className='mb-16'>
                <Link
                  to='/code-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Online School Education Learning
                </Link>
              </li>
              <li className='mb-16'>
                <Link
                  to='/code-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Calorie-dense foods: Needs, healthy
                </Link>
              </li>
              <li className='mb-16'>
                <Link
                  to='/code-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Calorie-dense foods: Needs, healthy
                </Link>
              </li>
              <li className='mb-16'>
                <Link
                  to='/code-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Calorie-dense foods: Needs, healthy
                </Link>
              </li>
              <li className='mb-16 mt-24'>
                <span className='text-primary-600 text-sm fw-semibold'>
                  17/06/2024
                </span>
              </li>
              <li className='mb-16'>
                <Link
                  to='/code-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Online School Education Learning
                </Link>
              </li>
              <li className='mb-16'>
                <Link
                  to='/code-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Calorie-dense foods: Needs, healthy
                </Link>
              </li>
              <li className='mb-16'>
                <Link
                  to='/code-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Calorie-dense foods: Needs, healthy
                </Link>
              </li>
              <li className='mb-16'>
                <Link
                  to='/code-generator'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Calorie-dense foods: Needs, healthy
                </Link>
              </li>
              <li className='mb-16 mt-24'>
                <span className='text-primary-600 text-sm fw-semibold'>
                  15/06/2024
                </span>
              </li>
              <li className='mb-0'>
                <Link
                  to='/index'
                  className='text-line-1 text-secondary-light text-hover-primary-600'
                >
                  Calorie-dense foods: Needs, healthy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='col-xxl-9 col-lg-8'>
        <div className='chat-main card overflow-hidden'>
          <div className='chat-sidebar-single gap-8 justify-content-between cursor-default flex-nowrap'>
            <div className='d-flex align-items-center gap-16'>
              <Link
                to='/code-generator-new'
                className='text-primary-light text-2xl line-height-1'
              >
                <i className='ri-arrow-left-line' />
              </Link>
              <h6 className='text-lg mb-0 text-line-1'>
                Please create a 5 Column table with HTML Css and js
              </h6>
            </div>
            <div className='d-flex align-items-center gap-16 flex-shrink-0'>
              <button
                type='button'
                className='text-secondary-light text-xl line-height-1 text-hover-primary-600'
              >
                <i className='ri-edit-2-line' />
              </button>
              <button
                type='button'
                className='text-secondary-light text-xl line-height-1 text-hover-primary-600'
              >
                <i className='ri-delete-bin-6-line' />
              </button>
            </div>
          </div>
          {/* chat-sidebar-single end */}
          <div className='chat-message-list max-h-612-px min-h-612-px'>
            {/* User generated Text Start */}
            <div className='d-flex align-items-start justify-content-between gap-16 border-bottom border-neutral-200 pb-16 mb-16'>
              <div className='d-flex align-items-center gap-16'>
                <div className='img overflow-hidden flex-shrink-0'>
                  <img
                    src='assets/images/chat/1.png'
                    alt='image_icon'
                    className='w-44-px h-44-px rounded-circle object-fit-cover'
                  />
                </div>
                <div className='info flex-grow-1'>
                  <h6 className='text-lg mb-4'>Adam Milner</h6>
                  <p className='mb-0 text-secondary-light text-sm'>
                    Please create a 5 Column table with HTML Css and js
                  </p>
                </div>
              </div>
              <button
                type='button'
                className='d-flex align-items-center gap-6 px-8 py-4 bg-primary-50 radius-4 bg-hover-primary-100 flex-shrink-0'
              >
                <i className='ri-edit-2-fill' /> Edit
              </button>
            </div>
            {/* User generated Text End */}
            {/* WowDash generated Text Start */}
            <div className='d-flex align-items-start gap-16 border-bottom border-neutral-200 pb-16 mb-16'>
              <div className='img overflow-hidden flex-shrink-0'>
                <img
                  src='assets/images/wow-dash-favicon.png'
                  alt='image_icon'
                  className='w-44-px h-44-px rounded-circle object-fit-cover'
                />
              </div>
              <div className='info flex-grow-1'>
                <h6 className='text-lg mb-16 mt-8'>WowDash</h6>
                <pre className='language-html mb-16 text-secondary-light text-sm'>
                  {"        "}
                  <code>
                    {"\n"}&lt;html lang="en"&gt;{"\n"}
                    {"    "}&lt;head&gt;{"\n"}
                    {"        "}&lt;meta charset="UTF-8"&gt;{"\n"}
                    {"        "}&lt;meta name="viewport"
                    content="width=device-width, initial-scale=1.0"&gt;{"\n"}
                    {"        "}&lt;link rel="stylesheet" to="/styles.css"&gt;
                    {"\n"}
                    {"        "}&lt;title&gt;5 Column Table&lt;/title&gt;{"\n"}
                    {"    "}&lt;/head&gt;{"\n"}
                    {"    "}&lt;body&gt;{"\n"}
                    {"        "}&lt;div class="table-container"&gt;{"\n"}
                    {"            "}&lt;table id="data-table"&gt;{"\n"}
                    {"                "}&lt;thead&gt;{"\n"}
                    {"                "}&lt;tr&gt;{"\n"}
                    {"                    "}&lt;th&gt;Column 1&lt;/th&gt;{"\n"}
                    {"                    "}&lt;th&gt;Column 2&lt;/th&gt;{"\n"}
                    {"                    "}&lt;th&gt;Column 3&lt;/th&gt;{"\n"}
                    {"                    "}&lt;th&gt;Column 4&lt;/th&gt;{"\n"}
                    {"                    "}&lt;th&gt;Column 5&lt;/th&gt;{"\n"}
                    {"                "}&lt;/tr&gt;{"\n"}
                    {"                "}&lt;/thead&gt;{"\n"}
                    {"                "}&lt;tbody&gt;{"\n"}
                    {"                "}&lt;!-- Table content goes here --&gt;
                    {"            "}
                    {"\n"}
                    {"                "}&lt;/tbody&gt;{"\n"}
                    {"            "}&lt;/table&gt;{"\n"}
                    {"        "}&lt;/div&gt;{"\n"}
                    {"        "}&lt;script src="script.js"&gt;&lt;/script&gt;
                    {"\n"}
                    {"    "}&lt;/body&gt;{"\n"}&lt;/html&gt;{"\n"}
                    {"        "}
                  </code>
                  {"\n"}
                  {"    "}
                </pre>
                <div className='mt-24 d-flex align-items-center justify-content-between gap-16'>
                  <div className='d-flex align-items-center gap-20 bg-neutral-50 radius-8 px-16 py-10 line-height-1'>
                    <button
                      type='button'
                      className='text-secondary-light text-2xl d-flex text-hover-info-600'
                    >
                      <i className='ri-thumb-up-line line-height-1' />
                    </button>
                    <button
                      type='button'
                      className='text-secondary-light text-2xl d-flex text-hover-info-600'
                    >
                      <i className='ri-thumb-down-line' />
                    </button>
                    <button
                      type='button'
                      className='text-secondary-light text-2xl d-flex text-hover-info-600'
                    >
                      <i className='ri-share-forward-line' />
                    </button>
                    <button
                      type='button'
                      className='text-secondary-light text-2xl d-flex text-hover-info-600'
                    >
                      <i className='ri-file-copy-line' />
                    </button>
                  </div>
                  <button
                    type='button'
                    className='btn btn-outline-primary d-flex align-items-center gap-8'
                  >
                    {" "}
                    <i className='ri-repeat-2-line' /> Regenerate
                  </button>
                </div>
              </div>
            </div>
            {/* WowDash generated Text End */}
            {/* User generated Text Start */}
            <div className='d-flex align-items-start justify-content-between gap-16 border-bottom border-neutral-200 pb-16 mb-16'>
              <div className='d-flex align-items-center gap-16'>
                <div className='img overflow-hidden flex-shrink-0'>
                  <img
                    src='assets/images/chat/1.png'
                    alt='image_icon'
                    className='w-44-px h-44-px rounded-circle object-fit-cover'
                  />
                </div>
                <div className='info flex-grow-1'>
                  <h6 className='text-lg mb-4'>Adam Milner</h6>
                  <p className='mb-0 text-secondary-light text-sm'>
                    Please create a 5 Column table with HTML Css and js
                  </p>
                </div>
              </div>
              <button
                type='button'
                className='d-flex align-items-center gap-6 px-8 py-4 bg-primary-50 radius-4 bg-hover-primary-100 flex-shrink-0'
              >
                <i className='ri-edit-2-fill' /> Edit
              </button>
            </div>
            {/* User generated Text End */}
          </div>
          <form className='chat-message-box'>
            <input
              type='text'
              name='chatMessage'
              placeholder='Message wowdash...'
            />
            <button
              type='submit'
              className='w-44-px h-44-px d-flex justify-content-center align-items-center radius-8 bg-primary-600 text-white bg-hover-primary-700 text-xl'
            >
              <Icon icon='f7:paperplane' />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CodeGeneratorLayer;
