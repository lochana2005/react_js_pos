import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import TooltipLayer from "../components/TooltipLayer";

const TooltipPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Components / Tooltip' />

        {/* TooltipLayer */}
        <TooltipLayer />
      </MasterLayout>
    </>
  );
};

export default TooltipPage;
