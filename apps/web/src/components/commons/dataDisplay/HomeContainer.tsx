import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChecklistIcon from '@mui/icons-material/Checklist';
import PersonIcon from '@mui/icons-material/Person';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from '@mui/material';
import React from 'react';

interface HomeContainerProps {
  children: React.ReactNode;
}

export const HomeContainer: React.FC<HomeContainerProps> = (props) => (
  <>
    <Box pb={6}>{props.children}</Box>
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
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
          href="/list"
        />
        <BottomNavigationAction
          label="Schedule"
          icon={<CalendarTodayIcon />}
          href="/schedule"
        />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </Paper>
  </>
);
