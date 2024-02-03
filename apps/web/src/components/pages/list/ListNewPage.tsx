'use client';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {
  Box,
  Button,
  IconButton,
  SelectChangeEvent,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FormCheckbox } from '@/components/commons/form/FormCheckbox';
import { FormSelect } from '@/components/commons/form/FormSelect';
import { FormTextField } from '@/components/commons/form/FormTextField';
import {
  clearMethodOption,
  frequencyOptions,
  playScheduleProtocolOptions,
  weekOptions,
} from '@/const/masterData';

export const ListNewPage = () => {
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    /**
     * 習慣名
     */
    name: '',
    /**
     * クリア判定
     */
    clear_method: '',
    /**
     * 経過時間の必須
     */
    is_require_elapsedtime: false,
    /**
     * 祝日を含む
     */
    is_include_holiday: false,
    /**
     * きっかけ・なりたい姿
     */
    description: '',
    /**
     * 実施日程
     */
    play_schedule: '',
    /**
     * 実施日程詳細
     */
    play_schedule_option: '',
    week_routine: '',
    /**
     * 1週間に1回的に
     * {day}{type}に{count}{count_type}
     */
    every_routine_day: '',
    every_routine_type: '',
    every_routine_count: '',
    every_routine_count_type: '',
  });

  const handleSubmit = () => {};

  // チェックボックス専用
  const setChecked = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: checked }));
  };

  // チェックボックス（複数）専用
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newDevices: string[]
  ) => {
    setFormData((prev) => ({ ...prev, week_routine: String(newDevices) }));
  };

  // グローバル
  const setHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Box display="flex" alignItems="center" p={2}>
        <IconButton area-label="back page" onClick={() => router.back()}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography variant="h5" fontWeight="bold" flex={1} textAlign="center">
          習慣を登録する
        </Typography>
      </Box>
      <Box p={2}>
        <FormTextField
          label="習慣名"
          name="name"
          placeholder="週3筋トレ, 毎日早起き, 毎日朝勉強, 等"
          value={formData.name}
          setValue={setHandler}
        />
        <FormSelect
          label="クリア判定"
          name="clear_method"
          options={clearMethodOption}
          value={formData.clear_method}
          setValue={setHandler}
          bottomLabel={
            clearMethodOption.find(
              (option) => option.value === formData.clear_method
            )?.description
          }
        />

        <Typography variant="h6" fontWeight="bold">
          クリア条件の詳細
        </Typography>

        <FormCheckbox
          label="経過時間を必須にする"
          subLabel="有効にすると開始と終了を元にクリア判定を行います"
          name="is_require_elapsedtime"
          checked={formData.is_require_elapsedtime}
          setChecked={setChecked}
        />
        <FormCheckbox
          label="祝日を含む"
          subLabel="祝日関係なく習慣化する場合は有効にしてください"
          name="is_include_holiday"
          checked={formData.is_include_holiday}
          setChecked={setChecked}
        />
        <FormTextField
          label="きっかけ・なりたい姿"
          name="description"
          type="textarea"
          placeholder="・習慣化をしたいと思ったきっかけ
        ・理想像、今のアナタに足りない箇所
        を記述してください。
        例）TOEIC700点を目指す、海外旅行で困らないようにしたい
        https://youtu.be/******の動画の人に憧れを感じ、自分もそうなりたい！"
          value={formData.description}
          setValue={setHandler}
        />

        <FormSelect
          label="実施日程"
          name="play_schedule"
          options={playScheduleProtocolOptions}
          value={formData.play_schedule}
          setValue={setHandler}
        />

        {formData.play_schedule === 'week_routine' && (
          <ToggleButtonGroup
            value={formData.week_routine.split(',')}
            onChange={handleChange}
            fullWidth
          >
            {weekOptions.map((week) => (
              <ToggleButton key={week.value} value={week.value}>
                {week.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        )}

        {formData.play_schedule === 'every_routine' && (
          <Box display="flex" alignItems="end">
            <FormTextField
              name="every_routine_day"
              type="number"
              value={formData.every_routine_day}
              setValue={setHandler}
              sx={{ maxWidth: 70 }}
            />
            <FormSelect
              name="every_routine_type"
              options={frequencyOptions}
              value={formData.every_routine_type}
              setValue={setHandler}
            />
            <Typography p={1} fontWeight="bold">
              に
            </Typography>

            <FormTextField
              name="every_routine_count"
              type="number"
              value={formData.every_routine_count}
              setValue={setHandler}
              sx={{ maxWidth: 70 }}
            />
            <FormSelect
              name="every_routine_count_type"
              options={[
                { value: 'count', label: '回' },
                { value: 'time', label: '時間' },
              ]}
              value={formData.every_routine_count_type}
              setValue={setHandler}
            />
          </Box>
        )}

        <Box py={4}>
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleSubmit}
          >
            登録する
          </Button>
        </Box>
      </Box>
    </>
  );
};
