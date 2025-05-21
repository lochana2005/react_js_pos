import DefaultCarousel from "./child/DefaultCarousel";
import CarouselWithArrows from "./child/CarouselWithArrows";
import CarouselWithPagination from "./child/CarouselWithPagination";
import CarouselWithProgress from "./child/CarouselWithProgress";
import MultipleSlides from "./child/MultipleSlides";

const CarouselLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultCarousel */}
      <DefaultCarousel />

      {/* CarouselWithArrows */}
      <CarouselWithArrows />

      {/* CarouselWithPagination */}
      <CarouselWithPagination />

      {/* CarouselWithProgress */}
      <CarouselWithProgress />

      {/* MultipleSlides */}
      <MultipleSlides />
    </div>
  );
};

export default CarouselLayer;
