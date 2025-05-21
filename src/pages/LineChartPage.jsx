import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import LineChartLayer from "../components/LineChartLayer";

const LineChartPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Chart - Line Chart' />

        {/* LineChartLayer */}
        <LineChartLayer />
      </MasterLayout>
    </>
  );
};

export default LineChartPage;
