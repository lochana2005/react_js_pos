import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import BlogDetailsLayer from "../components/BlogDetailsLayer";

const BlogDetailsPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Blog Details' />

        {/* BlogDetailsLayer */}
        <BlogDetailsLayer />
      </MasterLayout>
    </>
  );
};

export default BlogDetailsPage;
