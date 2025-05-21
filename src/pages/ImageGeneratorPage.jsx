import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ImageGeneratorLayer from "../components/ImageGeneratorLayer";

const ImageGeneratorPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Image Generator' />

        {/* ImageGeneratorLayer */}
        <ImageGeneratorLayer />
      </MasterLayout>
    </>
  );
};

export default ImageGeneratorPage;
