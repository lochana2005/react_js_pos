import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import CalendarMainLayer from "../components/CalendarMainLayer";

const CalendarMainPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Components / Calendar' />

        {/* CalendarMainLayer */}
        <CalendarMainLayer />
      </MasterLayout>
    </>
  );
};

export default CalendarMainPage;
