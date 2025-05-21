import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import NotificationLayer from "../components/NotificationLayer";

const NotificationPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Settings - Notification' />

        {/* NotificationLayer */}
        <NotificationLayer />
      </MasterLayout>
    </>
  );
};

export default NotificationPage;
