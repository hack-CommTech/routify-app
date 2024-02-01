import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Box, Button, Chip, Stack, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { HomeTopHeader } from '@/components/commons/dataDisplay/HomeTopHeader';
import { HabitListSuggestUser } from '@/components/domains/HabitListSuggestUser';
import { MessageCharacter } from '@/components/domains/MesageCharacter';

const tasks: {
  id: number;
  title: string;
  tag: {
    label: string;
    value:
      | 'default'
      | 'primary'
      | 'secondary'
      | 'error'
      | 'info'
      | 'success'
      | 'default'
      | 'warning';
  };
}[] = [
  { id: 1, title: '週3回筋トレ', tag: { label: '本日中', value: 'default' } },
  { id: 2, title: '週3回筋トレ', tag: { label: '1日遅れ', value: 'error' } },
  {
    id: 4,
    title: '週3回筋トレ',
    tag: { label: '本日中｜追跡中', value: 'info' },
  },
  { id: 5, title: '週3回筋トレ', tag: { label: 'クリア', value: 'primary' } },
  { id: 6, title: '週3回筋トレ', tag: { label: '本日中', value: 'default' } },
];

export const Home0List = () => (
  <>
    <HomeTopHeader />
    <Box p={2}>
      <Box>
        ここにさらに自分の成果をアピールできる見出し、図などを挿入したい気持ち
      </Box>
      <MessageCharacter>
        未確定の習慣があります。予定を決めておくと習慣化の確率が上昇します。
      </MessageCharacter>
      <Box py={4}>
        <TextField variant="outlined" placeholder="検索" fullWidth />
      </Box>
      <Stack spacing={1}>
        {tasks.map((task) => (
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
              <Button variant="contained" size="small" sx={{ flex: 1 }}>
                やった！
              </Button>
              <Box display="flex" alignItems="center" px={2}>
                <DragIndicatorIcon sx={{ color: 'divider' }} />
              </Box>
            </Box>
          </Box>
        ))}
      </Stack>
      <HabitListSuggestUser />
    </Box>
  </>
);
