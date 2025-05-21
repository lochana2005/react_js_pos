import DefaultButtons from "./child/DefaultButtons";
import OutlineButtons from "./child/OutlineButtons";
import RoundedButtons from "./child/RoundedButtons";
import RoundedButtonsTwo from "./child/RoundedButtonsTwo";
import SoftButtons from "./child/SoftButtons";
import TextButtons from "./child/TextButtons";
import ButtonsWithLabel from "./child/ButtonsWithLabel";
import ButtonsWithLabelRound from "./child/ButtonsWithLabelRound";
import ButtonsSizes from "./child/ButtonsSizes";
import CheckboxRadioButtons from "./child/CheckboxRadioButtons";
import ButtonsGroup from "./child/ButtonsGroup";
import CustomButton from "./child/CustomButton";

const ButtonLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultButtons */}
      <DefaultButtons />

      {/* OutlineButtons */}
      <OutlineButtons />

      {/* RoundedButtons */}
      <RoundedButtons />

      {/* RoundedButtonsTwo */}
      <RoundedButtonsTwo />

      {/* SoftButtons */}
      <SoftButtons />

      {/* TextButtons */}
      <TextButtons />

      {/* ButtonsWithLabel */}
      <ButtonsWithLabel />

      {/* ButtonsWithLabelRound */}
      <ButtonsWithLabelRound />

      {/* ButtonsSizes */}
      <ButtonsSizes />

      {/* CheckboxRadioButtons */}
      <CheckboxRadioButtons />

      {/* ButtonsGroup */}
      <ButtonsGroup />

      {/* CustomButton */}
      <CustomButton />
    </div>
  );
};

export default ButtonLayer;
