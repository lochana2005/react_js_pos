import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import TagsLayer from "../components/TagsLayer";

const TagsPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Components / Tab & Accordion' />

        {/* TagsLayer */}
        <TagsLayer />
      </MasterLayout>
    </>
  );
};

export default TagsPage;
