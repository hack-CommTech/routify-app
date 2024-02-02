import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Box, Button, Chip, Stack, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { HomeTopHeader } from '@/components/commons/dataDisplay/HomeTopHeader';
import { HabitListSuggestUser } from '@/components/domains/HabitListSuggestUser';
import { MessageCharacter } from '@/components/domains/MesageCharacter';
import { useList } from '@/useHooks/domains/useList';

export const Home0List = () => {
  const { habitList, handleHabitActiveClick } = useList();
  return (
    <>
      <HomeTopHeader />
      <Box p={2}>
        <Box p={2}>
          ここにさらに自分の成果をアピールできる見出し、図などを挿入したい気持ち
        </Box>
        <MessageCharacter>
          未確定の習慣があります。予定を決めておくと習慣化の確率が上昇します。
        </MessageCharacter>
        <Box py={4}>
          <TextField variant="outlined" placeholder="検索" fullWidth />
        </Box>
        <Stack spacing={1}>
          {habitList.map((task) => (
            <Box
              p={1}
              border={(theme) => `1px solid ${theme.palette.divider}`}
              key={task.id}
            >
              <Box position="relative">
                <Typography
                  fontWeight="bold"
                  component={Link}
                  href="/list/detail/hogehoge"
                  width="100%"
                  color="text.primary"
                  sx={{ textDecoration: 'none' }}
                >
                  {task.title}
                </Typography>
                <Chip
                  label={task.tag.label}
                  size="small"
                  color={task.tag.value}
                  sx={{ position: 'absolute', top: 0, right: 0 }}
                />
              </Box>
              <Box py={1} display="flex" alignItems="center">
                <Button
                  variant="contained"
                  size="small"
                  sx={{ flex: 1 }}
                  disabled={task.done}
                  onClick={() => handleHabitActiveClick(task.id)}
                >
                  やった！
                </Button>
                <Box display="flex" alignItems="center" px={2}>
                  <DragIndicatorIcon sx={{ color: 'divider' }} />
                </Box>
              </Box>
            </Box>
          ))}
        </Stack>

        {/* 同じ習慣をするユーザかも？ */}
        <HabitListSuggestUser />
      </Box>
    </>
  );
};
