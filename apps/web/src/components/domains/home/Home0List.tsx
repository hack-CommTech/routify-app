import { Box, Chip, Stack, Typography } from '@mui/material';

const tasks = [
  { id: 1, title: '週3回筋トレ', tag: '本日中' },
  { id: 2, title: '週3回筋トレ', tag: '本日中' },
  { id: 3, title: '週3回筋トレ', tag: '本日中' },
  { id: 4, title: '週3回筋トレ', tag: '本日中' },
  { id: 5, title: '週3回筋トレ', tag: '本日中' },
  { id: 6, title: '週3回筋トレ', tag: '本日中' },
];

export const Home0List = () => (
  <Box p={2}>
    リスト画面
    <Stack spacing={2}>
      {tasks.map((task) => (
        <Box
          border={(theme) => `1px solid ${theme.palette.divider}`}
          key={task.id}
        >
          <Typography variant="h6" fontWeight="bold">
            {task.title}
          </Typography>
          <Chip label={task.tag} />
        </Box>
      ))}
    </Stack>
  </Box>
);
