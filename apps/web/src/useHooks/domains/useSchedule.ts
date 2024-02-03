import { ChipOwnProps } from '@mui/material';
import React from 'react';

/**
 * schedule画面で使用
 */
export const useSchedule = () => {
  const [habitSettledSchedule, setHabitSettledSchedule] = React.useState<
    {
      list_id: number;
      habit_id: number;
      name: string;
      start_time: string;
      end_time: string | null;
      is_done: boolean;
      chip: {
        label: string;
        color: ChipOwnProps['color'];
      };
    }[]
  >([]);

  const [habitConfirmedSchedule, setHabitConfirmedSchedule] = React.useState<
    {
      list_id: number;
      habit_id: number;
      name: string;
      start_time: string;
      end_time: string | null;
      is_done: boolean;
      chip: {
        label: string;
        color: ChipOwnProps['color'];
      };
      is_suggest?: boolean;
    }[]
  >([]);

  React.useEffect(() => {
    setHabitSettledSchedule([
      {
        list_id: 1,
        habit_id: 1,
        name: '週3筋トレ',
        start_time: '2024-02-02T20:52:26.395Z',
        end_time: null,
        is_done: false,
        chip: { label: '本日中', color: 'default' },
      },
      {
        list_id: 2,
        habit_id: 2,
        name: 'テスト勉強',
        start_time: '2024-02-02T20:30:00.000Z',
        end_time: null,
        is_done: false,
        chip: { label: '1日遅れ', color: 'error' },
      },
    ]);
    setHabitConfirmedSchedule([
      {
        list_id: 3,
        habit_id: 1,
        name: '早起き',
        start_time: '2024-02-02T20:30:00.000Z',
        end_time: null,
        is_done: false,
        chip: { label: 'クリア', color: 'success' },
      },
      {
        list_id: 2,
        habit_id: 2,
        name: 'カフェで朝活',
        start_time: '2024-02-02T21:40:00.000Z',
        end_time: '2024-02-02T22:10:00.000Z',
        is_done: false,
        chip: { label: '本日中｜追跡中', color: 'info' },
        is_suggest: true,
      },
    ]);
  }, []);

  return {
    /**
     * スケジュール（未確定）
     */
    habitSettledSchedule,
    /**
     * スケジュール（確定）
     */
    habitConfirmedSchedule,
  };
};
