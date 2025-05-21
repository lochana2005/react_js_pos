import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ColorsLayer from "../components/ColorsLayer";

const ColorsPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Components / Colors' />

        {/* ColorsLayer */}
        <ColorsLayer />
      </MasterLayout>
    </>
  );
};

export default ColorsPage;
