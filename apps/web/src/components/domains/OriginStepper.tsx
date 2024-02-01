import { Box, Typography } from '@mui/material';

const colorOptions = {
  done: { bgcolor: 'primary.main' },
  delay: { bgcolor: 'error.light' },
  initial: { bgcolor: 'background.default' },
};

interface OriginStepperProps {
  steps: { date: string; type: keyof typeof colorOptions }[];
}

export const OriginStepper: React.FC<OriginStepperProps> = (props) => (
  <Box mt={2} mb={4}>
    {/* 背景の線を表現 */}
    <Box
      mx={{ xs: 1, sm: 6 }}
      height={5}
      bgcolor="#d9d9d9"
      display="flex"
      alignItems="center"
    >
      <Box display="flex" justifyContent="space-between" flex={1}>
        {/* 間のボールを表現 */}
        {props.steps.map((step) => (
          <Box
            key={step.date}
            width={30}
            height={30}
            bgcolor={colorOptions[step.type].bgcolor}
            border={(theme) =>
              step.type === 'initial'
                ? `2px solid ${theme.palette.divider}`
                : ''
            }
            borderRadius="50%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
          >
            <Box position="absolute" bottom={-20}>
              <Typography
                variant="body2"
                color="text.secondary"
                whiteSpace="nowrap"
              >
                {step.date}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);
