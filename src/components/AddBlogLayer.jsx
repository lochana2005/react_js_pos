import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import ReactQuill from "react-quill-new";
import { Link } from "react-router-dom";

const AddBlogLayer = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const src = URL.createObjectURL(e.target.files[0]);
      setImagePreview(src);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
  };
  const quillRef = useRef(null);
  const [value, setValue] = useState(``);
  // eslint-disable-next-line no-unused-vars
  const [isHighlightReady, setIsHighlightReady] = useState(false);

  useEffect(() => {
    // Load highlight.js configuration and signal when ready
    hljs?.configure({
      languages: [
        "javascript",
        "ruby",
        "python",
        "java",
        "csharp",
        "cpp",
        "go",
        "php",
        "swift",
      ],
    });
  }, []);

  // eslint-disable-next-line no-unused-vars
  const handleSave = () => {
    const editorContent = quillRef.current.getEditor().root.innerHTML;
    console.log("Editor content:", editorContent);
  };

  // Quill editor modules with syntax highlighting (only load if highlight.js is ready)
  const modules = isHighlightReady
    ? {
        syntax: {
          highlight: (text) => hljs?.highlightAuto(text).value, // Enable highlight.js in Quill
        },
        toolbar: {
          container: "#toolbar-container", // Custom toolbar container
        },
      }
    : {
        toolbar: {
          container: "#toolbar-container", // Custom toolbar container
        },
      };

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "list",
    "indent",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];

  return (
    <div className='row gy-4'>
      <div className='col-lg-8'>
        <div className='card mt-24'>
          <div className='card-header border-bottom'>
            <h6 className='text-xl mb-0'>Add New Post</h6>
          </div>
          <div className='card-body p-24'>
            <form action='#' className='d-flex flex-column gap-20'>
              <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='title'
                >
                  Post Title:{" "}
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='title'
                  placeholder='Enter Post Title'
                />
              </div>
              <div>
                <label className='form-label fw-bold text-neutral-900'>
                  Post Category:{" "}
                </label>
                <select className='form-control border border-neutral-200 radius-8'>
                  <option value=''>Technology</option>
                  <option value=''>Business</option>
                  <option value=''>Course</option>
                  <option value=''>Fashion</option>
                </select>
              </div>
              <div>
                <label className='form-label fw-bold text-neutral-900'>
                  Post Description
                </label>
                <div className='border border-neutral-200 radius-8 overflow-hidden'>
                  <div className='height-200'>
                    {/* Toolbar */}
                    <div id='toolbar-container'>
                      <span className='ql-formats'>
                        <select className='ql-font'></select>
                        <select className='ql-size'></select>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-bold'></button>
                        <button className='ql-italic'></button>
                        <button className='ql-underline'></button>
                        <button className='ql-strike'></button>
                      </span>
                      <span className='ql-formats'>
                        <select className='ql-color'></select>
                        <select className='ql-background'></select>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-script' value='sub'></button>
                        <button className='ql-script' value='super'></button>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-header' value='1'></button>
                        <button className='ql-header' value='2'></button>
                        <button className='ql-blockquote'></button>
                        <button className='ql-code-block'></button>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-list' value='ordered'></button>
                        <button className='ql-list' value='bullet'></button>
                        <button className='ql-indent' value='-1'></button>
                        <button className='ql-indent' value='+1'></button>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-direction' value='rtl'></button>
                        <select className='ql-align'></select>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-link'></button>
                        <button className='ql-image'></button>
                        <button className='ql-video'></button>
                        <button className='ql-formula'></button>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-clean'></button>
                      </span>
                    </div>

                    {/* Editor */}
                    <ReactQuill
                      ref={quillRef}
                      theme='snow'
                      value={value}
                      onChange={setValue}
                      modules={modules}
                      formats={formats}
                      placeholder='Compose an epic...'
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className='form-label fw-bold text-neutral-900'>
                  Upload Thumbnail
                </label>
                <div className='upload-image-wrapper'>
                  {imagePreview ? (
                    <div className='uploaded-img position-relative h-160-px w-100 border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50'>
                      <button
                        type='button'
                        className='uploaded-img__remove position-absolute top-0 end-0 z-1 text-2xxl line-height-1 me-8 mt-8 d-flex bg-danger-600 w-40-px h-40-px justify-content-center align-items-center rounded-circle'
                        onClick={handleRemoveImage}
                      >
                        <iconify-icon
                          icon='radix-icons:cross-2'
                          className='text-2xl text-white'
                        ></iconify-icon>
                      </button>
                      <img
                        id='uploaded-img__preview'
                        className='w-100 h-100 object-fit-cover'
                        src={imagePreview}
                        alt='Uploaded'
                      />
                    </div>
                  ) : (
                    <label
                      className='upload-file h-160-px w-100 border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1'
                      htmlFor='upload-file'
                    >
                      <iconify-icon
                        icon='solar:camera-outline'
                        className='text-xl text-secondary-light'
                      ></iconify-icon>
                      <span className='fw-semibold text-secondary-light'>
                        Upload
                      </span>
                      <input
                        id='upload-file'
                        type='file'
                        hidden
                        onChange={handleFileChange}
                      />
                    </label>
                  )}
                </div>
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
                    src='assets/images/blog/blog1.png'
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
                    src='assets/images/blog/blog2.png'
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
                    src='assets/images/blog/blog3.png'
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
                    src='assets/images/blog/blog4.png'
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlogLayer;
