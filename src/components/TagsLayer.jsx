import DefaultTags from "./child/DefaultTags";
import ColorsTags from "./child/ColorsTags";
import TagsWithImage from "./child/TagsWithImage";
import TagsIndicator from "./child/TagsIndicator";

const TagsLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultTags */}
      <DefaultTags />

      {/* ColorsTags */}
      <ColorsTags />

      {/* TagsWithImage */}
      <TagsWithImage />

      {/* TagsIndicator */}
      <TagsIndicator />
    </div>
  );
};

export default TagsLayer;
