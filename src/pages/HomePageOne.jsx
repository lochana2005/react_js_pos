import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import DashBoardLayerOne from "../components/DashBoardLayerOne";

const HomePageOne = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='AI' />

        {/* DashBoardLayerOne */}
        <DashBoardLayerOne />
      </MasterLayout>
    </>
  );
};

export default HomePageOne;
