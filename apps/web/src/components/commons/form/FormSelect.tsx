import { Theme } from '@emotion/react';
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
  Typography,
} from '@mui/material';
import React from 'react';

interface FormSelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  sx?: SxProps<Theme>;
  value: string;
  options: { label: string; value: string }[];
  setValue: (e: SelectChangeEvent) => void;
  bottomLabel?: string;
}

export const FormSelect: React.FC<FormSelectProps> = (props) => (
  <Box py={1}>
    {props.label && (
      <Typography fontWeight="bold" pb={1}>
        {props.label}
      </Typography>
    )}
    <Select
      name={props.name}
      fullWidth
      value={props.value}
      onChange={props.setValue}
      sx={{
        ...props.sx,
        '& fieldset': {
          borderRadius: 3,
          borderColor: 'divider',
        },
      }}
    >
      {props.options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
    {props.bottomLabel && (
      <Box p={1}>
        <Typography variant="body2" color="text.secondary">
          {props.bottomLabel}
        </Typography>
      </Box>
    )}
  </Box>
);
