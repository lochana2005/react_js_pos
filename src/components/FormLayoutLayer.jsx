import VerticalInputForm from "./child/VerticalInputForm";
import InputFormWithIcons from "./child/InputFormWithIcons";
import HorizontalInputForm from "./child/HorizontalInputForm";
import HorizontalInputFormWithIcons from "./child/HorizontalInputFormWithIcons";

const FormLayoutLayer = () => {
  return (
    <div className='row gy-4'>
      {/* VerticalInputForm */}
      <VerticalInputForm />

      {/* InputFormWithIcons */}
      <InputFormWithIcons />

      {/* HorizontalInputForm */}
      <HorizontalInputForm />

      {/* HorizontalInputFormWithIcons */}
      <HorizontalInputFormWithIcons />
    </div>
  );
};

export default FormLayoutLayer;
