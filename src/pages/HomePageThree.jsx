import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import DashBoardLayerThree from "../components/DashBoardLayerThree";

const HomePageThree = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='eCommerce' />

        {/* DashBoardLayerThree */}
        <DashBoardLayerThree />
      </MasterLayout>
    </>
  );
};

export default HomePageThree;
