import DefaultVideo from "./child/DefaultVideo";
import VideosWithContent from "./child/VideosWithContent";
import VideoContent from "./child/VideoContent";

const VideosLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultVideo */}
      <DefaultVideo />

      {/* VideosWithContent */}
      <VideosWithContent />

      {/* VideoContent */}
      <VideoContent />
    </div>
  );
};

export default VideosLayer;
