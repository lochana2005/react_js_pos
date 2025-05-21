import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import TypographyLayer from "../components/TypographyLayer";

const TypographyPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Components / Typography' />

        {/* TypographyLayer */}
        <TypographyLayer />
      </MasterLayout>
    </>
  );
};

export default TypographyPage;
