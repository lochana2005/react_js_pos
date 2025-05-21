import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import VideoGeneratorLayer from "../components/VideoGeneratorLayer";

const VideoGeneratorPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Video Generator' />

        {/* VideoGeneratorLayer */}
        <VideoGeneratorLayer />
      </MasterLayout>
    </>
  );
};

export default VideoGeneratorPage;
