import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import NotificationAlertLayer from "../components/NotificationAlertLayer";

const NotificationAlertPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Settings - Notification Alert' />

        {/* NotificationAlertLayer */}
        <NotificationAlertLayer />
      </MasterLayout>
    </>
  );
};

export default NotificationAlertPage;
