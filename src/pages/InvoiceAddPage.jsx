import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import InvoiceAddLayer from "../components/InvoiceAddLayer";

const InvoiceAddPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Invoice - Add' />

        {/* InvoiceAddLayer */}
        <InvoiceAddLayer />
      </MasterLayout>
    </>
  );
};

export default InvoiceAddPage;
