import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import MarketplaceDetailsLayer from "../components/MarketplaceDetailsLayer";

const MarketplaceDetailsPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Marketplace Details' />

        {/* MarketplaceDetailsLayer */}
        <MarketplaceDetailsLayer />
      </MasterLayout>
    </>
  );
};

export default MarketplaceDetailsPage;
