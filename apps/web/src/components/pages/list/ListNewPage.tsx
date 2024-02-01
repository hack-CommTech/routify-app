'use client';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {
  Box,
  Button,
  IconButton,
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
  const [value, setValue] = React.useState<string>('');
  const [value2, setValue2] = React.useState<string>('');
  const [value3, setValue3] = React.useState<string>('');
  const [value4, setValue4] = React.useState<string>('');
  const [checked, setChecked] = React.useState<boolean>(false);
  const [selectWeek, setSelectWeek] = React.useState<string[]>([]);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newDevices: string[]
  ) => {
    setSelectWeek(newDevices);
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
          name="test"
          placeholder="週3筋トレ, 毎日早起き, 毎日朝勉強, 等"
          value={value}
          setValue={setValue}
        />
        <FormSelect
          label="クリア判定"
          name="test2"
          options={clearMethodOption}
          value={value2}
          setValue={setValue2}
          bottomLabel={
            clearMethodOption.find((option) => option.value === value2)
              ?.description
          }
        />

        <Typography variant="h6" fontWeight="bold">
          クリア条件の詳細
        </Typography>

        <FormCheckbox
          label="経過時間を必須にする"
          subLabel="有効にすると開始と終了を元にクリア判定を行います"
          name="check"
          checked={checked}
          setChecked={setChecked}
        />
        <FormCheckbox
          label="祝日を含む"
          subLabel="祝日関係なく習慣化する場合は有効にしてください"
          name="check"
          checked={checked}
          setChecked={setChecked}
        />
        <FormTextField
          label="きっかけ・なりたい姿"
          name="test"
          type="textarea"
          placeholder="・習慣化をしたいと思ったきっかけ
        ・理想像、今のアナタに足りない箇所
        を記述してください。
        例）TOEIC700点を目指す、海外旅行で困らないようにしたい
        https://youtu.be/******の動画の人に憧れを感じ、自分もそうなりたい！"
          value={value}
          setValue={setValue}
        />

        <FormSelect
          label="実施日程"
          name="test3"
          options={playScheduleProtocolOptions}
          value={value3}
          setValue={setValue3}
        />

        {value3 === 'week_routine' && (
          <ToggleButtonGroup
            value={selectWeek}
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

        {value3 === 'every_routine' && (
          <Box display="flex" alignItems="end">
            <FormTextField
              name="2"
              type="number"
              value="1"
              setValue={() => {}}
              sx={{ maxWidth: 70 }}
            />
            <FormSelect
              name="1"
              options={frequencyOptions}
              value={value4}
              setValue={setValue4}
            />
            <Typography p={1} fontWeight="bold">
              に
            </Typography>

            <FormTextField
              name="2"
              type="number"
              value="99"
              setValue={() => {}}
              sx={{ maxWidth: 70 }}
            />
            <FormSelect
              name="1"
              options={[
                { value: 'count', label: '回' },
                { value: 'time', label: '時間' },
              ]}
              value={value4}
              setValue={setValue4}
            />
          </Box>
        )}

        <Box py={4}>
          <Button variant="contained" size="large" fullWidth>
            登録する
          </Button>
        </Box>
      </Box>
    </>
  );
};
