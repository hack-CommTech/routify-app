'use client';

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChecklistIcon from '@mui/icons-material/Checklist';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Paper } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import React from 'react';
import { Home0List } from '@/components/commons/home/Home0List';
import { Home1Schedule } from '@/components/commons/home/Home1Shcedule';
import { Home2Profile } from '@/components/commons/home/Home2Profile';

export const HomePage = () => {
  const [preview, setPreview] = React.useState<number>(0);
  return (
    <>
      <Box pb={6}>
        {preview === 0 ? (
          <Home0List />
        ) : preview === 1 ? (
          <Home1Schedule />
        ) : (
          <Home2Profile />
        )}
      </Box>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={preview}
          sx={{
            bgcolor: 'primary.main',
            color: 'text.primary',
            ' & > button': {
              color: 'text.secondary',
              '&.Mui-selected': {
                color: 'text.primary',
              },
            },
          }}
        >
          <BottomNavigationAction
            label="List"
            icon={<ChecklistIcon />}
            onClick={() => setPreview(0)}
          />
          <BottomNavigationAction
            label="Schedule"
            icon={<CalendarTodayIcon />}
            onClick={() => setPreview(1)}
          />
          <BottomNavigationAction
            label="Profile"
            icon={<PersonIcon />}
            onClick={() => setPreview(2)}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};
