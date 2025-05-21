import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const UploadWithImagePreview = () => {
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      src: URL.createObjectURL(file),
      file,
    }));
    setUploadedImages((prev) => [...prev, ...newImages]);
    e.target.value = "";
  };

  const removeImage = (src) => {
    setUploadedImages((prev) => prev.filter((image) => image.src !== src));
    URL.revokeObjectURL(src);
  };
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>
            Upload With Image Preview
          </h6>
        </div>
        <div className='card-body p-24'>
          <div className='upload-image-wrapper d-flex align-items-center gap-3 flex-wrap'>
            <div className='uploaded-imgs-container d-flex gap-3 flex-wrap'>
              {uploadedImages.map((image, index) => (
                <div
                  key={index}
                  className='position-relative h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50'
                >
                  <button
                    type='button'
                    className='uploaded-img__remove position-absolute top-0 end-0 z-1 text-2xxl line-height-1 me-8 mt-8 d-flex'
                    onClick={() => removeImage(image.src)}
                  >
                    <Icon
                      icon='radix-icons:cross-2'
                      className='text-xl text-danger-600'
                    ></Icon>
                  </button>
                  <img
                    className='w-100 h-100 object-fit-cover'
                    src={image.src}
                    alt='Uploaded Preview'
                  />
                </div>
              ))}
            </div>

            <label
              className='upload-file-multiple h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1'
              htmlFor='upload-file-multiple'
            >
              <Icon
                icon='solar:camera-outline'
                className='text-xl text-secondary-light'
              ></Icon>
              <span className='fw-semibold text-secondary-light'>Upload</span>
              <input
                id='upload-file-multiple'
                type='file'
                hidden
                multiple
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadWithImagePreview;
