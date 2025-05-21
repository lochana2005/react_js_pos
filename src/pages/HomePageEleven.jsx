import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import DashBoardLayerEleven from "../components/DashBoardLayerEleven";

const HomePageEleven = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Finance & Banking' />

        {/* DashBoardLayerEleven */}
        <DashBoardLayerEleven />
      </MasterLayout>
    </>
  );
};

export default HomePageEleven;
