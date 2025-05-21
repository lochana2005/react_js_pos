import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import TextGeneratorNewLayer from "../components/TextGeneratorNewLayer";

const TextGeneratorNewPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Text Generator' />

        {/* TextGeneratorNewLayer */}
        <TextGeneratorNewLayer />
      </MasterLayout>
    </>
  );
};

export default TextGeneratorNewPage;
