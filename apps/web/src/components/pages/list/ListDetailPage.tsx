'use client';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { HabitListSuggestUser } from '@/components/domains/HabitListSuggestUser';
import { MessageCharacter } from '@/components/domains/MesageCharacter';
import { OriginStepper } from '@/components/domains/OriginStepper';

export const ListDetailPage = () => {
  const router = useRouter();
  return (
    <Container>
      <Box display="flex" alignItems="center" p={2}>
        <IconButton area-label="back page" onClick={() => router.back()}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography variant="h5" fontWeight="bold" flex={1} textAlign="center">
          習慣の詳細
        </Typography>
      </Box>
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" component="h2" fontWeight="bold">
            週3筋トレ
          </Typography>
          <Button
            startIcon={<EditIcon />}
            variant="outlined"
            color="inherit"
            sx={{ border: (theme) => `1px solid ${theme.palette.divider}` }}
          >
            編集する
          </Button>
        </Box>
        <Box maxWidth="100%" overflow="hidden">
          <Typography variant="body2" color="text.secondary">
            夏休みに友達と遊ぶが、その際女性陣も多く来るため、流石に現在のおデブちゃんを見せることはできないだろう。また、https://www.youtube.com/channel/UC0TXe_LYZ4scaW2XMyi5_kw
            の動画を見て、スタイルの良さに感動してしまった。
            ということで、今の無駄な肉を削ぎ落として今より細身のボディを目指そう。そしてリクエストヘッダを削減しパケットコストの削減を…
          </Typography>
        </Box>
        <MessageCharacter>
          2回連続の達成です！この調子で頑張りましょう！
        </MessageCharacter>
        <Box py={2}>
          <Typography variant="h6" fontWeight="bold">
            HISTORY
          </Typography>
          <OriginStepper
            steps={[
              { date: '1/29(月)', type: 'delay' },
              { date: '1/30(火)', type: 'done' },
              { date: '1/31(水)', type: 'done' },
              { date: '本日', type: 'initial' },
            ]}
          />
        </Box>
        <Box py={2}>
          <Typography variant="h6" fontWeight="bold">
            SCHEDULE
          </Typography>
          <OriginStepper
            steps={[
              { date: '本日', type: 'initial' },
              { date: '2/4(日)', type: 'initial' },
              { date: '2/7(水)', type: 'initial' },
              { date: '2/10(土)', type: 'initial' },
            ]}
          />
          <Typography color="text.secondary">現在：3日おき</Typography>
        </Box>

        <HabitListSuggestUser />
      </Box>
    </Container>
  );
};
