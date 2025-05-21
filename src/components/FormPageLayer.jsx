import DefaultInputs from "./child/DefaultInputs";
import InputSizing from "./child/InputSizing";
import TextareaInputField from "./child/TextareaInputField";

const FormPageLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultInputs */}
      <DefaultInputs />

      {/* InputSizing */}
      <InputSizing />

      {/* TextareaInputField */}
      <TextareaInputField />
    </div>
  );
};

export default FormPageLayer;
