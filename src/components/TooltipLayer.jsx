import DefaultTooltip from "./child/DefaultTooltip";
import DefaultTooltipTwo from "./child/DefaultTooltipTwo";
import DefaultTooltipThree from "./child/DefaultTooltipThree";
import TooltipPopoverPositions from "./child/TooltipPopoverPositions";
import TooltipTextPopup from "./child/TooltipTextPopup";
import TooltipTextWithIconPopup from "./child/TooltipTextWithIconPopup";
const TooltipLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultTooltip */}
      <DefaultTooltip />

      {/* DefaultTooltipTwo */}
      <DefaultTooltipTwo />

      {/* DefaultTooltipThree */}
      <DefaultTooltipThree />

      {/* TooltipPopoverPositions */}
      <TooltipPopoverPositions />

      {/* TooltipTextPopup */}
      <TooltipTextPopup />

      {/* TooltipTextWithIconPopup */}
      <TooltipTextWithIconPopup />
    </div>
  );
};

export default TooltipLayer;
