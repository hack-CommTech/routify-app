import { SwitchProps, Switch, styled, Box, Typography } from '@mui/material';
import React from 'react';

interface FormCheckboxProps {
  name: string;
  label?: string;
  subLabel?: string;
  sx?: string;
  disabled?: boolean;
  checked: boolean;
  setChecked: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
}

const width = 75;
const height = 45;

/**
 * CSSで同じようなデザインに
 * [参考](https://mui.com/material-ui/react-switch/)
 */
const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: width,
  height: height,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: `translateX(${width / 2 - 8}px)`,
      color: theme.palette.background.paper,
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: theme.palette.primary.main,
      border: `6px solid ${theme.palette.background.paper}`,
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: `${height - 4}px`,
    height: `${height - 4}px`,
  },
  '& .MuiSwitch-track': {
    borderRadius: height / 2,
    backgroundColor: theme.palette.divider,
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export const FormCheckbox: React.FC<FormCheckboxProps> = (props) => (
  <Box py={1} display="flex" alignItems="center">
    <Box flex={1}>
      {props.label && <Typography fontWeight="bold">{props.label}</Typography>}
      {props.subLabel && (
        <Typography variant="body2">{props.subLabel}</Typography>
      )}
    </Box>
    <IOSSwitch
      name={props.name}
      checked={props.checked}
      onChange={props.setChecked}
    />
  </Box>
);
