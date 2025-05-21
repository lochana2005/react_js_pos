import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import CardLayer from "../components/CardLayer";

const CardPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Components / Card' />

        {/* CardLayer */}
        <CardLayer />
      </MasterLayout>
    </>
  );
};

export default CardPage;
