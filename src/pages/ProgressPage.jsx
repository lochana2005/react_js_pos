import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ProgressLayer from "../components/ProgressLayer";

const ProgressPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Components / Progress Bar' />

        {/* ProgressLayer */}
        <ProgressLayer />
      </MasterLayout>
    </>
  );
};

export default ProgressPage;
