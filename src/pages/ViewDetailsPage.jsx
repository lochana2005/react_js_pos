import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ViewDetailsLayer from "../components/ViewDetailsLayer";

const ViewDetailsPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Components / Email' />

        {/* ViewDetailsLayer */}
        <ViewDetailsLayer />
      </MasterLayout>
    </>
  );
};

export default ViewDetailsPage;
