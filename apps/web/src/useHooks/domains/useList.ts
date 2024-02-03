import React from 'react';

/**
 * list画面で使用するHooks
 */
export const useList = () => {
  const [habitList, setHabitList] = React.useState<
    {
      id: number;
      title: string;
      tag: {
        label: string;
        value:
          | 'default'
          | 'primary'
          | 'secondary'
          | 'error'
          | 'info'
          | 'success'
          | 'default'
          | 'warning';
      };
      done: boolean;
    }[]
  >([
    {
      id: 1,
      title: '週3回筋トレ',
      tag: { label: '本日中', value: 'default' },
      done: false,
    },
    {
      id: 2,
      title: '週3回筋トレ',
      tag: { label: '1日遅れ', value: 'error' },
      done: false,
    },
    {
      id: 4,
      title: '週3回筋トレ',
      tag: { label: '本日中｜追跡中', value: 'info' },
      done: false,
    },
    {
      id: 5,
      title: '週3回筋トレ',
      tag: { label: 'クリア', value: 'primary' },
      done: true,
    },
    {
      id: 6,
      title: '週3回筋トレ',
      tag: { label: '本日中', value: 'default' },
      done: false,
    },
  ]);

  /**
   * 習慣実施完了のボタンが押されたときの処理
   * @param id habit_id
   */
  const handleHabitActiveClick = (id: number) => {
    const newHabitList = habitList.map((habit) => {
      if (habit.id === id) {
        return { ...habit, done: true };
      }
      return habit;
    });
    setHabitList(newHabitList);
  };

  return {
    /**
     * 習慣
     */
    habitList,
    /**
     * 習慣実施完了のボタンが押されたときの処理
     */
    handleHabitActiveClick,
  };
};
