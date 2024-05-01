import { useId } from 'react';

const LangSwitcher = ({ language, onSelect }) => {
  const labelId = useId();
  const handleOnChange = e => {
    onSelect(e.target.value);
  };
  return (
    <div>
      <label htmlFor={labelId}>Choose Language</label>
      <select onChange={handleOnChange} id={labelId} value={language}>
        <option value="en">English</option>
        <option value="ge">German</option>
        <option value="uk">Ukrainian</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
