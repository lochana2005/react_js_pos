import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import DashBoardLayerSeven from "../components/DashBoardLayerSeven";

const HomePageSeven = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='NFT & Gaming' />

        {/* DashBoardLayerSeven */}
        <DashBoardLayerSeven />
      </MasterLayout>
    </>
  );
};

export default HomePageSeven;
