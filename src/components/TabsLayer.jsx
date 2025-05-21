import DefaultTabs from "./child/DefaultTabs";
import FocusTabs from "./child/FocusTabs";
import ButtonTabs from "./child/ButtonTabs";
import ButtonTabsTwo from "./child/ButtonTabsTwo";
import VerticalNavTabs from "./child/VerticalNavTabs";
import CardHeaderTabs from "./child/CardHeaderTabs";

const TabsLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultTabs */}
      <DefaultTabs />

      {/* FocusTabs */}
      <FocusTabs />

      {/* ButtonTabs */}
      <ButtonTabs />

      {/* ButtonTabsTwo */}
      <ButtonTabsTwo />

      {/* VerticalNavTabs */}
      <VerticalNavTabs />

      {/* CardHeaderTabs */}
      <CardHeaderTabs />
    </div>
  );
};

export default TabsLayer;
