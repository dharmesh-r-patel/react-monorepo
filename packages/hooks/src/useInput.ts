import { useState } from 'react';

const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  return { value, onChange };
};

// change 1.1.0 ok

export default useInput;
