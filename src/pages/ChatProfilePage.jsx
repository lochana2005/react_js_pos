import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ChatProfileLayer from "../components/ChatProfileLayer";

const ChatProfilePage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Chat' />

        {/* ChatProfileLayer */}
        <ChatProfileLayer />
      </MasterLayout>
    </>
  );
};

export default ChatProfilePage;
