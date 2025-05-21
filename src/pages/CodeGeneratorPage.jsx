import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import CodeGeneratorLayer from "../components/CodeGeneratorLayer";

const CodeGeneratorPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Code Generator' />

        {/* CodeGeneratorLayer */}
        <CodeGeneratorLayer />
      </MasterLayout>
    </>
  );
};

export default CodeGeneratorPage;
