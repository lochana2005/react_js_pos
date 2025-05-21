import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import CurrenciesLayer from "../components/CurrenciesLayer";

const CurrenciesPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Settings - Currencies' />

        {/* CurrenciesLayer */}
        <CurrenciesLayer />
      </MasterLayout>
    </>
  );
};

export default CurrenciesPage;
