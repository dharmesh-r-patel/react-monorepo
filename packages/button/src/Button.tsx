import React from 'react';
import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <MuiButton variant="contained" onClick={onClick}>{label}</MuiButton>;
};

// This is version test YES

export default Button;
