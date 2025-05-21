import AvatarSizes from "./child/AvatarSizes";
import AvatarWithContent from "./child/AvatarWithContent";
import AvatarShapeStyle from "./child/AvatarShapeStyle";
import StatusIndicator from "./child/StatusIndicator";
import AvatarGroup from "./child/AvatarGroup";
import ImagesWithContent from "./child/ImagesWithContent";

const AvatarLayer = () => {
  return (
    <div className='row gy-4'>
      {/* AvatarSizes */}
      <AvatarSizes />

      {/* AvatarWithContent */}
      <AvatarWithContent />

      {/* AvatarShapeStyle */}
      <AvatarShapeStyle />

      {/* StatusIndicator */}
      <StatusIndicator />

      {/* AvatarGroup */}
      <AvatarGroup />

      {/* ImagesWithContent */}
      <ImagesWithContent />
    </div>
  );
};

export default AvatarLayer;
