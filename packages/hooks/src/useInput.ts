import { useState } from 'react';

const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  return { value, onChange };
};

export default useInput;
