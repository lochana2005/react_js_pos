import InputCustomStyles from "./child/InputCustomStyles";
import InputStatus from "./child/InputStatus";

const FormValidationLayer = () => {
  return (
    <div className='row gy-4'>
      {/* InputCustomStyles */}
      <InputCustomStyles />

      {/* InputStatus */}
      <InputStatus />
    </div>
  );
};

export default FormValidationLayer;
