import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import GalleryMasonryLayer from "../components/GalleryMasonryLayer";

const GalleryMasonryPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Gallery Grid' />

        {/* GalleryLayer */}
        <GalleryMasonryLayer />
      </MasterLayout>
    </>
  );
};

export default GalleryMasonryPage;
