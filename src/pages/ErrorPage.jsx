import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ErrorLayer from "../components/ErrorLayer";

const ErrorPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='404' />

        {/* ErrorLayer */}
        <ErrorLayer />
      </MasterLayout>
    </>
  );
};

export default ErrorPage;
