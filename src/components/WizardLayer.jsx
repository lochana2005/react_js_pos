import NumberingWizard from "./child/NumberingWizard";
import NumberingWizardWithLabel from "./child/NumberingWizardWithLabel";
import OrderByFollowingStep from "./child/OrderByFollowingStep";
import WizardWithBesideLabel from "./child/WizardWithBesideLabel";

const WizardLayer = () => {
  return (
    <div className='row gy-4'>
      {/* NumberingWizard */}
      <NumberingWizard />

      {/* NumberingWizardWithLabel */}
      <NumberingWizardWithLabel />

      {/* OrderByFollowingStep */}
      <OrderByFollowingStep />

      {/* WizardWithBesideLabel */}
      <WizardWithBesideLabel />
    </div>
  );
};

export default WizardLayer;
