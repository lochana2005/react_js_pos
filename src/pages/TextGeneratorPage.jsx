import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import TextGeneratorLayer from "../components/TextGeneratorLayer";

const TextGeneratorPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Text Generator' />

        {/* TextGeneratorLayer */}
        <TextGeneratorLayer />
      </MasterLayout>
    </>
  );
};

export default TextGeneratorPage;
