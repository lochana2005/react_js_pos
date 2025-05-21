import DefaultAlerts from "./child/DefaultAlerts";
import OutlineAlerts from "./child/OutlineAlerts";
import SolidAlerts from "./child/SolidAlerts";
import OutlineAlertsTwo from "./child/OutlineAlertsTwo";
import LeftBorderAlerts from "./child/LeftBorderAlerts";
import DefaultAlertsTwo from "./child/DefaultAlertsTwo";
import DefaultAlertsThree from "./child/DefaultAlertsThree";

const AlertLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultAlerts */}
      <DefaultAlerts />

      {/* OutlineAlerts */}
      <OutlineAlerts />

      {/* SolidAlerts */}
      <SolidAlerts />

      {/* OutlineAlertsTwo */}
      <OutlineAlertsTwo />

      {/* LeftBorderAlerts */}
      <LeftBorderAlerts />

      {/* DefaultAlertsTwo */}
      <DefaultAlertsTwo />

      {/* DefaultAlertsThree */}
      <DefaultAlertsThree />
    </div>
  );
};

export default AlertLayer;
