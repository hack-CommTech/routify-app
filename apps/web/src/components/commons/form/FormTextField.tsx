import { Theme } from '@emotion/react';
import { Box, SxProps, TextField, Typography } from '@mui/material';
import React from 'react';

interface FormTextFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  sx?: SxProps<Theme>;
  value: string;
  type?: string;
  setValue: (str: string) => void;
}

export const FormTextField: React.FC<FormTextFieldProps> = (props) => (
  <Box py={1}>
    {props.label && (
      <Typography fontWeight="bold" pb={1}>
        {props.label}
      </Typography>
    )}
    <TextField
      variant="outlined"
      multiline={props.type === 'textarea'}
      placeholder={props.placeholder}
      type={props.type}
      sx={{
        ...props.sx,
        '& fieldset': {
          borderRadius: 3,
          borderColor: 'divider',
        },
      }}
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
      fullWidth
    />
  </Box>
);
