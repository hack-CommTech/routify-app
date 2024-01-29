import { Box, Chip, Stack, Typography } from '@mui/material';

const tasks = [{ id: 1, title: '週3回筋トレ' }];

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
          <Chip label="本日中" />
        </Box>
      ))}
    </Stack>
  </Box>
);
