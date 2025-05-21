import DefaultStarRatings from "./child/DefaultStarRatings";
import HalfStar from "./child/HalfStar";
import MultiColorStar from "./child/MultiColorStar";
import RatingStar from "./child/RatingStar";

const StarRatingLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultStarRatings */}
      <DefaultStarRatings />

      {/* HalfStar */}
      <HalfStar />

      {/* MultiColorStar */}
      <MultiColorStar />

      {/* RatingStar */}
      <RatingStar />
    </div>
  );
};

export default StarRatingLayer;
