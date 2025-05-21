import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import AlertLayer from "../components/AlertLayer";

const AlertPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Components / Alerts' />

        {/* AlertLayer */}
        <AlertLayer />
      </MasterLayout>
    </>
  );
};

export default AlertPage;
