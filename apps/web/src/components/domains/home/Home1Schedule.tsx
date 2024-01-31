import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Box, Chip, Stack, Typography } from '@mui/material';
import { HomeTopHeader } from '@/components/commons/dataDisplay/HomeTopHeader';

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

      <Stack spacing={1}>
        {/* {tasks.map((task) => (
          <Box
            p={1}
            border={(theme) => `1px solid ${theme.palette.divider}`}
            key={task.id}
          >
            <Box position="relative">
              <Typography
                fontWeight="bold"
                component={Link}
                href="/"
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
        ))} */}
      </Stack>
    </Box>
  </>
);
