import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import PortfolioLayer from "../components/PortfolioLayer";

const PortfolioPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Portfolio' />

        {/* PortfolioLayer */}
        <PortfolioLayer />
      </MasterLayout>
    </>
  );
};

export default PortfolioPage;
