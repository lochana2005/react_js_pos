import BasicUpload from "./child/BasicUpload";
import ImageUpload from "./child/ImageUpload";
import UploadWithImagePreview from "./child/UploadWithImagePreview";
import UploadWithImagePreviewList from "./child/UploadWithImagePreviewList";

const ImageUploadLayer = () => {
  return (
    <div className='row gy-4'>
      {/* BasicUpload */}
      <BasicUpload />

      {/* ImageUpload */}
      <ImageUpload />

      {/* UploadWithImagePreview */}
      <UploadWithImagePreview />

      {/* UploadWithImagePreviewList */}
      <UploadWithImagePreviewList />
    </div>
  );
};

export default ImageUploadLayer;
