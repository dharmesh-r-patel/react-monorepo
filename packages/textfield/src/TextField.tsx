import React from 'react';
import { TextField as MuiTextField } from '@mui/material';
import { useInput } from '@infineit/react-hooks';  // Import the hook from hooks package

interface TextFieldProps {
  label: string;
  initialValue?: string;
}

console.log("Hooks Loaded Just for test:", typeof useInput);

const TextField: React.FC<TextFieldProps> = ({ label, initialValue = '' }) => {
  const { value, onChange } = useInput(initialValue);  // Hook manages internal state

  return (
    <MuiTextField
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      variant="outlined"
    />
  );
};

export default TextField;



// import React from 'react';
// import { TextField as MuiTextField } from '@mui/material';

// interface TextFieldProps {
//   label: string;
//   value: string;
//   onChange: (value: string) => void;
// }

// const TextField: React.FC<TextFieldProps> = ({ label, value, onChange }) => {
//   return (
//     <MuiTextField
//       label={label}
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       variant="outlined"
//     />
//   );
// };

// export default TextField;
