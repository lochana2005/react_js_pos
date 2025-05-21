import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import CompanyLayer from "../components/CompanyLayer";

const CompanyPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Settings - Company' />

        {/* CompanyLayer */}
        <CompanyLayer />
      </MasterLayout>
    </>
  );
};

export default CompanyPage;
