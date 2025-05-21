import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef, useState } from "react";

const ImageUpload = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files.length) {
      const src = URL.createObjectURL(e.target.files[0]);
      setImagePreview(src);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Image Upload</h6>
        </div>
        <div className='card-body p-24'>
          <div className='upload-image-wrapper d-flex align-items-center gap-3'>
            {/* Image preview section */}
            {imagePreview ? (
              <div className='uploaded-img position-relative h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50'>
                <button
                  type='button'
                  onClick={removeImage}
                  className='uploaded-img__remove position-absolute top-0 end-0 z-1 text-2xxl line-height-1 me-8 mt-8 d-flex'
                  aria-label='Remove uploaded image'
                >
                  <Icon
                    icon='radix-icons:cross-2'
                    className='text-xl text-danger-600'
                  ></Icon>
                </button>
                <img
                  id='uploaded-img__preview'
                  className='w-100 h-100 object-fit-cover'
                  src={imagePreview}
                  alt='Preview'
                />
              </div>
            ) : (
              <label
                className='upload-file h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1'
                htmlFor='upload-file'
              >
                <Icon
                  icon='solar:camera-outline'
                  className='text-xl text-secondary-light'
                ></Icon>
                <span className='fw-semibold text-secondary-light'>Upload</span>
              </label>
            )}

            {/* Always render the input, but hide it */}
            <input
              id='upload-file'
              type='file'
              onChange={handleFileChange}
              hidden
              ref={fileInputRef}
              accept='image/*' // Optional: restrict to image files
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
