import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import BadgesLayer from "../components/BadgesLayer";

const BadgesPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Components / Badges' />

        {/* BadgesLayer */}
        <BadgesLayer />
      </MasterLayout>
    </>
  );
};

export default BadgesPage;
