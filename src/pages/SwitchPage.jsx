import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import SwitchLayer from "../components/SwitchLayer";

const SwitchPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Components / Switch' />

        {/* SwitchLayer */}
        <SwitchLayer />
      </MasterLayout>
    </>
  );
};

export default SwitchPage;
