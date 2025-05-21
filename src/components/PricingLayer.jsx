import PricingPlanMultipleColor from "./child/PricingPlanMultipleColor";
import SimplePricingPlan from "./child/SimplePricingPlan";

const PricingLayer = () => {
  return (
    <>
      {/* PricingPlanMultipleColor */}
      <PricingPlanMultipleColor />

      {/* SimplePricingPlan */}
      <SimplePricingPlan />
    </>
  );
};

export default PricingLayer;
