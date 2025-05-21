import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Link } from "react-router-dom";

const VideoGeneratorLayer = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
      if (selectedFile.type.startsWith("image")) {
        const objectURL = URL.createObjectURL(selectedFile);
        setPreview(objectURL);
      } else {
        setPreview(null);
      }
    }
  };

  const handleFileDelete = () => {
    setFile(null);
    setPreview(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("dragover");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove("dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove("dragover");
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const droppedFile = files[0];
      setFile(droppedFile);
      if (droppedFile.type.startsWith("image")) {
        const objectURL = URL.createObjectURL(droppedFile);
        setPreview(objectURL);
      } else {
        setPreview(null);
      }
    }
  };

  return (
    <div className='row gy-4'>
      <div className='col-xxl-3 col-lg-4'>
        <div className='card h-100 p-0'>
          <div className='card-body p-24'>
            <div className='mb-20'>
              <label
                htmlFor='Title'
                className='text-sm fw-semibold text-primary-light mb-8'
              >
                Title
              </label>
              <input
                type='text'
                className='form-control px-16 py-14 h-48-px'
                id='Title'
                placeholder='Enter Title'
              />
            </div>
            <div className='mb-20'>
              <label
                htmlFor='Voice'
                className='text-sm fw-semibold text-primary-light mb-8'
              >
                Voice
              </label>
              <select
                className='form-select form-control px-16 py-14 h-48-px'
                id='Voice'
                defaultValue='Select Voice'
              >
                <option value='Select Voice' disabled>
                  Select Voice
                </option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
              </select>
            </div>
            <div className='mb-20'>
              <label
                htmlFor='desc'
                className='text-sm fw-semibold text-primary-light mb-8'
              >
                Title
              </label>
              <textarea
                className='form-control px-16 py-14 '
                id='desc'
                placeholder='Write something... '
                defaultValue={""}
              />
            </div>
            <div className='mb-20'>
              <label
                htmlFor='fileUpload'
                className='text-sm fw-semibold text-primary-light mb-8'
              >
                Upload Avatar
              </label>
              <div
                id='fileUpload'
                className='fileUpload image-upload'
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <label
                  htmlFor='fileInput'
                  className='file-upload image-upload__box'
                >
                  <div className='image-upload__boxInner custom'>
                    {preview ? (
                      <>
                        <img
                          src={preview}
                          alt={file?.name}
                          className='image-upload__image'
                          height='30'
                        />
                        <button
                          type='button'
                          className='image-upload__deleteBtn'
                          onClick={handleFileDelete}
                        >
                          <i className='ri-close-line'></i>
                        </button>
                      </>
                    ) : (
                      <>
                        <i className='ri-gallery-line image-upload__icon'></i>
                        <p className='text-xs text-secondary-light mt-4 mb-0'>
                          Drag & drop image here
                        </p>
                      </>
                    )}
                  </div>
                  <input
                    type='file'
                    id='fileInput'
                    name='file'
                    hidden
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>

            <button
              type='button'
              className='btn btn-primary d-flex align-items-center gap-8 px-20 flex-shrink-0'
            >
              Generate
              <i className='ri-ai-generate' />
            </button>
          </div>
        </div>
      </div>
      <div className='col-xxl-9 col-lg-8'>
        <div className='chat-main card overflow-hidden'>
          <div className='chat-sidebar-single gap-8 justify-content-between cursor-default flex-nowrap'>
            <div className='d-flex align-items-center gap-16'>
              <Link
                to='/text-generator-new'
                className='text-primary-light text-2xl line-height-1'
              >
                <i className='ri-arrow-left-line' />
              </Link>
              <h6 className='text-lg mb-0 text-line-1'>
                Please, Make 4 variant of this image Quickly As Soon As possible
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
              <div className='d-flex align-items-start gap-16'>
                <div className='img overflow-hidden flex-shrink-0'>
                  <img
                    src='assets/images/chat/1.png'
                    alt='Wowdash'
                    className='w-44-px h-44-px rounded-circle object-fit-cover'
                  />
                </div>
                <div className='info'>
                  <h6 className='text-lg mb-4'>Adam Milner</h6>
                  <p className='mb-0 text-secondary-light text-sm'>
                    Alright guys, so I&apos;ve just seen this website, Fortunanest
                    website, it&apos;s an investment website and you invest there. So
                    I actually tried it some months, I tried it just for 3
                    months and I realized everything was working correct. I was
                    thinking it was this fake website, I never met this website.
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
                  alt='Wowdash'
                  className='w-44-px h-44-px rounded-circle object-fit-cover'
                />
              </div>
              <div className='info flex-grow-1'>
                <h6 className='text-lg mb-16 mt-8'>WowDash</h6>
                <div className='row g-3'>
                  <div className='col-xl-4 col-sm-6'>
                    <div className='generated-image-item radius-8 overflow-hidden position-relative'>
                      <img
                        src='assets/images/chatgpt/image-generator5.png'
                        alt='Wowdash'
                        className='w-100 h-100 object-fit-cover'
                      />
                      <button className='w-72-px h-72-px bg-primary-600 rounded-circle text-white text-2xxl d-flex align-items-center justify-content-center bg-hover-primary-700 position-absolute top-50 start-50 translate-middle'>
                        <i className='ri-play-large-fill' />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  type='button'
                  className='btn btn-primary d-flex align-items-center gap-8 px-20 flex-shrink-0 mt-16'
                >
                  Download
                  <i className='ri-download-2-line' />
                </button>
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
              <div className='d-flex align-items-start gap-16'>
                <div className='img overflow-hidden flex-shrink-0'>
                  <img
                    src='assets/images/chat/1.png'
                    alt='Wowdash'
                    className='w-44-px h-44-px rounded-circle object-fit-cover'
                  />
                </div>
                <div className='info'>
                  <h6 className='text-lg mb-4'>Adam Milner</h6>
                  <p className='mb-0 text-secondary-light text-sm'>
                    Alright guys, so I&apos;ve just seen this website, Fortunanest
                    website, it&apos;s an investment website and you invest there. So
                    I actually tried it some months, I tried it just for 3
                    months and I realized everything was working correct. I was
                    thinking it was this fake website, I never met this website.
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
                  alt='Wowdash'
                  className='w-44-px h-44-px rounded-circle object-fit-cover'
                />
              </div>
              <div className='info flex-grow-1'>
                <h6 className='text-lg mb-16 mt-8'>WowDash</h6>
                <div className='row g-3'>
                  <div className='col-xl-4 col-sm-6'>
                    <div className='generated-image-item radius-8 overflow-hidden position-relative'>
                      <img
                        src='assets/images/chatgpt/image-generator5.png'
                        alt='Wowdash'
                        className='w-100 h-100 object-fit-cover'
                      />
                      <button className='w-72-px h-72-px bg-primary-600 rounded-circle text-white text-2xxl d-flex align-items-center justify-content-center bg-hover-primary-700 position-absolute top-50 start-50 translate-middle'>
                        <i className='ri-play-large-fill' />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  type='button'
                  className='btn btn-primary d-flex align-items-center gap-8 px-20 flex-shrink-0 mt-16'
                >
                  Download
                  <i className='ri-download-2-line' />
                </button>
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

export default VideoGeneratorLayer;
