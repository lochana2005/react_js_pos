import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import LanguageLayer from "../components/LanguageLayer";

const LanguagePage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Settings - Languages' />

        {/* LanguageLayer */}
        <LanguageLayer />
      </MasterLayout>
    </>
  );
};

export default LanguagePage;
