import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import AvatarLayer from "../components/AvatarLayer";

const AvatarPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Components / Avatars' />

        {/* AvatarLayer */}
        <AvatarLayer />
      </MasterLayout>
    </>
  );
};

export default AvatarPage;
