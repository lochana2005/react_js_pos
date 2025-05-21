import DefaultRadio from "./child/DefaultRadio";
import RadioDisable from "./child/RadioDisable";
import RadioWithButton from "./child/RadioWithButton";
import RadioHorizontal from "./child/RadioHorizontal";
import RadioVertical from "./child/RadioVertical";

const RadioLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultRadio */}
      <DefaultRadio />

      {/* RadioDisable */}
      <RadioDisable />

      {/* RadioWithButton */}
      <RadioWithButton />

      {/* RadioHorizontal */}
      <RadioHorizontal />

      {/* RadioVertical */}
      <RadioVertical />
    </div>
  );
};

export default RadioLayer;
