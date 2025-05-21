import BasicDropdownPrimary from "./child/BasicDropdownPrimary";
import DropUpPrimary from "./child/DropUpPrimary";
import DroprightWarning from "./child/DroprightWarning";
import DropleftWarning from "./child/DropleftWarning";
import Placement from "./child/Placement";
import GroupedDropdownButtons from "./child/GroupedDropdownButtons";
import CustomDropdown from "./child/CustomDropdown";
import DropdownSizes from "./child/DropdownSizes";

const DropdownLayer = () => {
  return (
    <div className='row gy-4'>
      {/* BasicDropdownPrimary */}
      <BasicDropdownPrimary />

      {/* DropUpPrimary */}
      <DropUpPrimary />

      {/* DroprightWarning */}
      <DroprightWarning />

      {/* DropleftWarning */}
      <DropleftWarning />

      {/* Placement */}
      <Placement />

      {/* GroupedDropdownButtons */}
      <GroupedDropdownButtons />

      {/* CustomDropdown */}
      <CustomDropdown />

      {/* DropdownSizes */}
      <DropdownSizes />
    </div>
  );
};

export default DropdownLayer;
