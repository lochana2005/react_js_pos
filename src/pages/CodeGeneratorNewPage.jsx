import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import CodeGeneratorNewLayer from "../components/CodeGeneratorNewLayer";

const CodeGeneratorNewPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Code Generator New' />

        {/* CodeGeneratorNewLayer */}
        <CodeGeneratorNewLayer />
      </MasterLayout>
    </>
  );
};

export default CodeGeneratorNewPage;
