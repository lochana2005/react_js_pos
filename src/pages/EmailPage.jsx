import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import EmailLayer from "../components/EmailLayer";

const EmailPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Email' />

        {/* EmailLayer */}
        <EmailLayer />
      </MasterLayout>
    </>
  );
};

export default EmailPage;
