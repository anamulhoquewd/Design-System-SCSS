import { Dropdown } from "@ds.e/react";

const DropdownExample = () => {
  return (
    <Dropdown
      label="Select a Gender"
      options={[
        { label: "Option 1", value: "option-1" },
        { label: "Option 2", value: "option-2" },
        { label: "Option 3", value: "option-3" },
      ]}
      onOptionSelect={(option, index) => console.log(option, index)}
    />
  );
};

export default DropdownExample;
