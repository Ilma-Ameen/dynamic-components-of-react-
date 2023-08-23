import { useState } from "react";

function SelectComponent() {
  const [selectedOption, setSelectedOption] = useState('');

  const SelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <label>Select an option: </label>
      <select value={selectedOption} onChange={SelectChange}>
        <option value="">Select</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p>Selected option: {selectedOption}</p>
    </div>
  );
}

export default SelectComponent;