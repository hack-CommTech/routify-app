import { Box } from '@mui/material';
import Image from 'next/image';

export const HomeTopHeader = () => (
  <Box p={1} sx={{ bgcolor: 'primary.main' }} display="flex">
    {/* 1280/381 */}
    <Image alt="画像" src="/images/routify.svg" width={30} height={30} />
    <Image alt="画像" src="/images/routify_text.png" width={100} height={30} />
  </Box>
);
