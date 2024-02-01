'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import { ShowSchedules } from '@/components/domains/schedule,focus/ShowSchedules';

export const FocusPage = () => (
  <Container component={Box} bgcolor="primary.main" minHeight="100svh">
    <Box display="flex" alignItems="center" p={2}>
      <Typography variant="h5" fontWeight="bold" flex={1} textAlign="center">
        集中モード
      </Typography>
    </Box>
    <Box>
      <Typography fontWeight="bold" align="center">
        テスト勉強
      </Typography>
      <Box
        width={220}
        height={220}
        my={2}
        mx="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="50%"
        sx={{
          backgroundImage: (theme) =>
            `radial-gradient(${theme.palette.background.paper} 60%, transparent 61%),
               conic-gradient(${theme.palette.info.main} 0% 60%, #d9d9d9 60% 100%)`,
        }}
      >
        <Box>
          <Typography fontSize={20} fontWeight="bold" align="center">
            残り20分
          </Typography>
          <Typography fontWeight="bold" align="center">
            40分経過
          </Typography>
        </Box>
      </Box>
      <Box py={1}>
        <Button variant="contained" color="error">
          中断する
        </Button>
      </Box>
      <Box py={1}>
        <Button fullWidth variant="contained" color="info" size="large">
          終了する
        </Button>
      </Box>
    </Box>

    {/* スケジュールの表示 */}
    <ShowSchedules />
  </Container>
);
