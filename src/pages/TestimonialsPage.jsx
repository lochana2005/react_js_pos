import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import TestimonialsLayer from "../components/TestimonialsLayer";

const TestimonialsPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Testimonials' />

        {/* TestimonialsLayer */}
        <TestimonialsLayer />
      </MasterLayout>
    </>
  );
};

export default TestimonialsPage;
