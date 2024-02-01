import { Box, Skeleton, Stack, Typography } from '@mui/material';

export const HabitListSuggestUser = () => (
  <Box py={2}>
    <Typography variant="h6" fontWeight="bold">
      同じ習慣をするユーザかも？
    </Typography>
    <Stack direction="row" spacing={2}>
      <Skeleton width="calc(100% / 3)" height={180} />
      <Skeleton width="calc(100% / 3)" height={180} />
      <Skeleton width="calc(100% / 3)" height={180} />
    </Stack>
  </Box>
);
