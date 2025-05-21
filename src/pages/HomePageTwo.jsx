import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import DashBoardLayerTwo from "../components/DashBoardLayerTwo";

const HomePageTwo = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='CRM' />

        {/* DashBoardLayerTwo */}
        <DashBoardLayerTwo />
      </MasterLayout>
    </>
  );
};

export default HomePageTwo;
