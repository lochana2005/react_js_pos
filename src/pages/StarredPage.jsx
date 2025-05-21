import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import StarredLayer from "../components/StarredLayer";

const StarredPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Components / Email' />

        {/* StarredLayer */}
        <StarredLayer />
      </MasterLayout>
    </>
  );
};

export default StarredPage;
