import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import GalleryGridLayer from "../components/GalleryGridLayer";

const GalleryGridPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Gallery Grid' />

        {/* GalleryLayer */}
        <GalleryGridLayer />
      </MasterLayout>
    </>
  );
};

export default GalleryGridPage;
