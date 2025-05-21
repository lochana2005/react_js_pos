import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ButtonLayer from "../components/ButtonLayer";

const ButtonPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Components / Button' />

        {/* ButtonLayer */}
        <ButtonLayer />
      </MasterLayout>
    </>
  );
};

export default ButtonPage;
