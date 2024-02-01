import { Box, Chip, Typography } from '@mui/material';

/**
 * スケジュールの表示
 */
export const ShowSchedules = () => (
  <Box py={2}>
    <Typography variant="h5" component="h2" fontWeight="bold">
      本日の予定
    </Typography>
    <Box display="flex" position="relative" alignItems="center">
      <Box
        px={2}
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box width={6} height={70} bgcolor="gray"></Box>
        <Box
          width={25}
          height={25}
          position="absolute"
          borderRadius="50%"
          border={(theme) => `1px solid ${theme.palette.divider}`}
          bgcolor="background.default"
        ></Box>
      </Box>
      <Box width={50}>
        <Typography fontWeight="bold">05:30</Typography>
        <Typography fontWeight="bold">05:30</Typography>
      </Box>
      <Box flex={1}>
        <Typography fontWeight="bold">早起き</Typography>
      </Box>
      <Chip label="クリア" size="small" color="success" />
    </Box>
    <Box display="flex" position="relative" alignItems="center">
      <Box
        px={2}
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box width={6} height={70} bgcolor="gray"></Box>
        <Box
          width={25}
          height={25}
          position="absolute"
          borderRadius="50%"
          border={(theme) => `1px solid ${theme.palette.divider}`}
          bgcolor="background.default"
        ></Box>
      </Box>
      <Box width={50}>
        <Typography fontWeight="bold">05:30</Typography>
        <Typography fontWeight="bold">05:30</Typography>
      </Box>
      <Box flex={1}>
        <Typography fontWeight="bold">早起き</Typography>
      </Box>
      <Chip label="クリア" size="small" color="success" />
    </Box>
  </Box>
);
