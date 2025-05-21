import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import DashBoardLayerFour from "../components/DashBoardLayerFour";

const HomePageFour = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Cryptocracy' />

        {/* DashBoardLayerFour */}
        <DashBoardLayerFour />
      </MasterLayout>
    </>
  );
};

export default HomePageFour;
