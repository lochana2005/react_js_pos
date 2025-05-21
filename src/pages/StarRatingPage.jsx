import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import StarRatingLayer from "../components/StarRatingLayer";

const StarRatingPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Components / Star Ratings' />

        {/* StarRatingLayer */}
        <StarRatingLayer />
      </MasterLayout>
    </>
  );
};

export default StarRatingPage;
