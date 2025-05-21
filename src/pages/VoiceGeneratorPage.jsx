import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import VoiceGeneratorLayer from "../components/VoiceGeneratorLayer";

const VoiceGeneratorPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Voice Generator' />

        {/* VoiceGeneratorLayer */}
        <VoiceGeneratorLayer />
      </MasterLayout>
    </>
  );
};

export default VoiceGeneratorPage;
