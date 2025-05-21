import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import PieChartLayer from "../components/PieChartLayer";

const PieChartPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Chart - Pie Chart' />

        {/* PieChartLayer */}
        <PieChartLayer />
      </MasterLayout>
    </>
  );
};

export default PieChartPage;
