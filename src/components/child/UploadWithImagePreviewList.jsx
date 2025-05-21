import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const UploadWithImagePreviewList = () => {
  const [fileNames, setFileNames] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newFileNames = files.map((file) => file.name);
    setFileNames((prev) => [...prev, ...newFileNames]);
  };

  const removeFileName = (name) => {
    setFileNames((prev) => prev.filter((fileName) => fileName !== name));
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
          <label
            htmlFor='file-upload-name'
            className='mb-16 border border-neutral-600 fw-medium text-secondary-light px-16 py-12 radius-12 d-inline-flex align-items-center gap-2 bg-hover-neutral-200'
          >
            <Icon icon='solar:upload-linear' className='text-xl'></Icon>
            Click to upload
            <input
              type='file'
              className='form-control w-auto mt-24 form-control-lg'
              id='file-upload-name'
              multiple
              hidden
              onChange={handleFileChange}
            />
          </label>

          {fileNames.length > 0 && (
            <ul id='uploaded-img-names' className='show-uploaded-img-name'>
              {fileNames.map((fileName, index) => (
                <li
                  key={index}
                  className='uploaded-image-name-list text-primary-600 fw-semibold d-flex align-items-center gap-2'
                >
                  <Icon
                    icon='ph:link-break-light'
                    className='text-xl text-secondary-light'
                  ></Icon>
                  {fileName}
                  <Icon
                    icon='radix-icons:cross-2'
                    className='remove-image text-xl text-secondary-light text-hover-danger-600'
                    onClick={() => removeFileName(fileName)}
                  ></Icon>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadWithImagePreviewList;
