import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import TermsConditionLayer from "../components/TermsConditionLayer";

const TermsConditionPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Terms & Conditions' />

        {/* TermsConditionLayer */}
        <TermsConditionLayer />
      </MasterLayout>
    </>
  );
};

export default TermsConditionPage;
