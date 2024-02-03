import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Box, Chip, ChipOwnProps, Typography } from '@mui/material';
import React from 'react';

interface UnsettledScheduleRowProps {
  name: string;
  chip: { label: string; color: ChipOwnProps['color'] };
}

/**
 * 未確定のタスク
 */
export const UnsettledScheduleRow: React.FC<UnsettledScheduleRowProps> = (
  props
) => (
  <Box display="flex" alignItems="center" position="relative">
    <DragIndicatorIcon sx={{ color: 'divider' }} />
    <Typography>{props.name}</Typography>
    <Chip
      label={props.chip.label}
      size="small"
      color={props.chip.color}
      sx={{ position: 'absolute', top: 0, right: 0 }}
    />
  </Box>
);
