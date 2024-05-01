import { useState } from 'react';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = e => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input value={inputValue} onChange={handleOnChange} type="text" />
      <p>{inputValue}</p>
    </div>
  );
};

export default SearchBar;
