import DefaultRadioTwo from "./child/DefaultRadioTwo";
import SwitchDisable from "./child/SwitchDisable";
import SwitchWithTex from "./child/SwitchWithTex";
import SwitchHorizontal from "./child/SwitchHorizontal";

const SwitchLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultRadioTwo */}
      <DefaultRadioTwo />

      {/* SwitchDisable */}
      <SwitchDisable />

      {/* SwitchWithTex */}
      <SwitchWithTex />

      {/* SwitchHorizontal */}
      <SwitchHorizontal />
    </div>
  );
};

export default SwitchLayer;
