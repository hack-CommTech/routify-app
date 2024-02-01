import AddIcon from '@mui/icons-material/Add';
import { Box, IconButton } from '@mui/material';
import Image from 'next/image';

export const HomeTopHeader = () => (
  <Box
    // p={1}
    sx={{ bgcolor: 'primary.main' }}
    display="flex"
    justifyContent="space-between"
    alignItems="center"
  >
    {/* 1280/381 */}
    <Box display="flex">
      <Image alt="画像" src="/images/routify.svg" width={30} height={30} />
      <Image
        alt="画像"
        src="/images/routify_text.png"
        width={100}
        height={30}
      />
    </Box>
    <IconButton href="/list/new">
      <AddIcon />
    </IconButton>
  </Box>
);
