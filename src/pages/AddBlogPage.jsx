import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import AddBlogLayer from "../components/AddBlogLayer";

const AddBlogPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Blog Details' />

        {/* AddBlogLayer */}
        <AddBlogLayer />
      </MasterLayout>
    </>
  );
};

export default AddBlogPage;
