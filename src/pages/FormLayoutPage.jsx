import FormLayoutLayer from "../components/FormLayoutLayer";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";

const FormLayoutPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Input Layout' />

        {/* FormLayoutLayer */}
        <FormLayoutLayer />
      </MasterLayout>
    </>
  );
};

export default FormLayoutPage;
