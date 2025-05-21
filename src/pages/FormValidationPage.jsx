import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import FormValidationLayer from "../components/FormValidationLayer";

const FormValidationPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Form Validation' />

        {/* FormValidationLayer */}
        <FormValidationLayer />
      </MasterLayout>
    </>
  );
};

export default FormValidationPage;
