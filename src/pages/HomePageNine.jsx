import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import DashBoardLayerNine from "../components/DashBoardLayerNine";

const HomePageNine = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Analytics' />

        {/* DashBoardLayerNine */}
        <DashBoardLayerNine />
      </MasterLayout>
    </>
  );
};

export default HomePageNine;
