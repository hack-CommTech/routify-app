import { Box, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface MessageCharacterProps {
  children: React.ReactNode;
}

export const MessageCharacter: React.FC<MessageCharacterProps> = (props) => (
  <Box display="flex" alignItems="center" my={1}>
    <Image alt="画像" src="/images/routify.svg" width={50} height={50} />
    <Paper component={Box} ml={2} p={1}>
      <Typography>{props.children}</Typography>
    </Paper>
  </Box>
);
