import { Box, Chip, ChipOwnProps, Typography } from '@mui/material';
import Link from 'next/link';
import { formatTime } from '@/utils/formatter';

interface ShowSchedulesProps {
  habits?: {
    list_id: number;
    habit_id: number;
    name: string;
    start_time: string;
    end_time: string | null;
    is_done: boolean;
    chip: {
      label: string;
      color: ChipOwnProps['color'];
    };
    is_suggest?: boolean;
  }[];
}

/**
 * スケジュールの表示
 */
export const ShowSchedules: React.FC<ShowSchedulesProps> = (props) => (
  <Box py={2}>
    <Typography variant="h5" component="h2" fontWeight="bold">
      本日の予定
    </Typography>

    {props.habits?.map((habit) => (
      <Box
        display="flex"
        position="relative"
        alignItems="center"
        key={`${habit.habit_id}_${habit.list_id}`}
      >
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
          >
            {/* 赤ランプ */}
            {habit.is_suggest && (
              <Box
                width={4}
                height={4}
                position="absolute"
                borderRadius="50%"
                top={1}
                right={1}
                bgcolor="red"
              />
            )}
          </Box>
        </Box>
        <Box width={50}>
          <Typography fontWeight="bold">
            {formatTime(habit.start_time)}
          </Typography>
          {habit.end_time && (
            <Typography fontWeight="bold">
              {formatTime(habit.end_time)}
            </Typography>
          )}
        </Box>
        <Box flex={1}>
          <Typography
            fontWeight="bold"
            component={Link}
            href="/list/detail/hogehoge"
            width="100%"
            color="text.primary"
            sx={{ textDecoration: 'none' }}
          >
            {habit.name}
          </Typography>
        </Box>
        <Chip label={habit.chip.label} size="small" color={habit.chip.color} />
      </Box>
    ))}
  </Box>
);
