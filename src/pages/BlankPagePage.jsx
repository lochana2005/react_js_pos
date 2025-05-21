import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import BlankPageLayer from "../components/BlankPageLayer";

const BlankPagePage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Blank Page' />

        {/* BlankPageLayer */}
        <BlankPageLayer />
      </MasterLayout>
    </>
  );
};

export default BlankPagePage;
