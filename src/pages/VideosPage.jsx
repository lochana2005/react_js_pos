import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import VideosLayer from "../components/VideosLayer";

const VideosPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Components / Videos' />

        {/* VideosLayer */}
        <VideosLayer />
      </MasterLayout>
    </>
  );
};

export default VideosPage;
