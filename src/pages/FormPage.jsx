import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import FormPageLayer from "../components/FormPageLayer";

const FormPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Input Form' />

        {/* FormPageLayer */}
        <FormPageLayer />
      </MasterLayout>
    </>
  );
};

export default FormPage;
