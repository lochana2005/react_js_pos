import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import CarouselLayer from "../components/CarouselLayer";

const ChatEmptyPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Chat Empty' />

        {/* CarouselLayer */}
        <CarouselLayer />
      </MasterLayout>
    </>
  );
};

export default ChatEmptyPage;
