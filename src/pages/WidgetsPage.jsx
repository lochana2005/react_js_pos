import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import WidgetsLayer from "../components/WidgetsLayer";

const WidgetsPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Wallet' />

        {/* WidgetsLayer */}
        <WidgetsLayer />
      </MasterLayout>
    </>
  );
};

export default WidgetsPage;
