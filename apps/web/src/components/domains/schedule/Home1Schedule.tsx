import { Box, Stack, Typography } from '@mui/material';
import { HomeTopHeader } from '@/components/commons/dataDisplay/HomeTopHeader';
import { HabitListSuggestUser } from '@/components/domains/HabitListSuggestUser';
import { UnsettledScheduleRow } from '@/components/domains/schedule/UnsettledScheduleRow';
import { ShowSchedules } from '@/components/domains/schedule,focus/ShowSchedules';
import { useSchedule } from '@/useHooks/domains/useSchedule';

export const Home1Schedule = () => {
  const { habitSettledSchedule, habitConfirmedSchedule } = useSchedule();
  return (
    <>
      <HomeTopHeader />
      <Box p={2}>
        <Box p={1} border={(theme) => `1px solid ${theme.palette.divider}`}>
          <Typography variant="h5" component="h2" fontWeight="bold">
            本日の未確定タスク
          </Typography>

          <Stack py={1} spacing={2}>
            {habitSettledSchedule.map((habit) => (
              <UnsettledScheduleRow
                key={`${habit.list_id}_${habit.habit_id}`}
                name={habit.name}
                chip={habit.chip}
              />
            ))}
          </Stack>
        </Box>

        {/* スケジュールの表示 */}
        <ShowSchedules habits={habitConfirmedSchedule} />

        <HabitListSuggestUser />
      </Box>
    </>
  );
};
