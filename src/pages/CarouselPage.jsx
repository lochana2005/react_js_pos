import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import CarouselLayer from "../components/CarouselLayer";

const CarouselPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Components / Carousel' />

        {/* CarouselLayer */}
        <CarouselLayer />
      </MasterLayout>
    </>
  );
};

export default CarouselPage;
