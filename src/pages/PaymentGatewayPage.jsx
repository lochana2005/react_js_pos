import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import PaymentGatewayLayer from "../components/PaymentGatewayLayer";

const PaymentGatewayPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Settings - PaymentGateway' />

        {/* PaymentGatewayLayer */}
        <PaymentGatewayLayer />
      </MasterLayout>
    </>
  );
};

export default PaymentGatewayPage;
