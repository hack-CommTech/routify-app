import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Box, Chip, Stack, Typography } from '@mui/material';
import { HomeTopHeader } from '@/components/commons/dataDisplay/HomeTopHeader';
import { ShowSchedules } from '@/components/domains/schedule,focus/ShowSchedules';

export const Home1Schedule = () => (
  <>
    <HomeTopHeader />
    <Box p={2}>
      <Box p={1} border={(theme) => `1px solid ${theme.palette.divider}`}>
        <Typography variant="h5" component="h2" fontWeight="bold">
          本日の未確定タスク
        </Typography>
        <Stack py={1} spacing={2}>
          <Box display="flex" alignItems="center" position="relative">
            <DragIndicatorIcon sx={{ color: 'divider' }} />
            <Typography>週3筋トレ</Typography>
            <Chip
              label="本日中"
              size="small"
              color="default"
              sx={{ position: 'absolute', top: 0, right: 0 }}
            />
          </Box>
          <Box display="flex" alignItems="center" position="relative">
            <DragIndicatorIcon sx={{ color: 'divider' }} />
            <Typography>週3筋トレ</Typography>
            <Chip
              label="1日遅れ"
              size="small"
              color="error"
              sx={{ position: 'absolute', top: 0, right: 0 }}
            />
          </Box>
        </Stack>
      </Box>
      {/* スケジュールの表示 */}
      <ShowSchedules />
    </Box>
  </>
);
