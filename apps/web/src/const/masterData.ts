import { IClearMethodOption } from '@/const';

/**
 * クリア判定のデータ
 */
export const clearMethodOption: IClearMethodOption[] = [
  {
    value: 'button_click',
    label: 'ボタンを押してクリア',
    description:
      'このアプリでボタンを押すことでクリアとなります。ウィジェット機能を使用すると、アプリを開かずともボタンを押すことができます。',
  },
  {
    value: 'go_to_place',
    label: '場所に行ってクリア',
    description:
      '指定した場所に行くことで自動的にクリアとなります。場所を複数登録したり、時間帯を登録したりできます。',
  },
  {
    value: 'app_start',
    label: 'アプリを起動してクリア',
    description:
      '指定したアプリを起動することでクリアとなります。全てのアプリが対象です。さらに、Chromeではブラウザのリンク先に応じてクリア判定をすることができます。',
  },
  {
    value: 'api_fetch',
    label: 'APIを実行してクリア',
    description:
      'プログラマ向けです。本アプリ上でトークンが発行されますので、自分でAPIを作成して自動クリアを可能にします。',
  },
  {
    value: 'take_picture',
    label: '写真を撮ってクリア',
    description:
      '写真を撮ることでクリアとなります。撮ったデータはあとから振り返ることができます。',
  },
] as const;

/**
 * 実施日程のデータ
 */
export const playScheduleProtocolOptions = [
  { value: 'every_routine', label: '日数置き' },
  { value: 'week_routine', label: '週単位' },
  { value: 'some_routine', label: '特定の日' },
  { value: 'every_day', label: '毎日' },
];

/**
 * 週のデータ
 */
export const weekOptions = [
  { value: 'monday', label: '月' },
  { value: 'tuesday', label: '火' },
  { value: 'wednesday', label: '水' },
  { value: 'thursday', label: '木' },
  { value: 'friday', label: '金' },
  { value: 'saturday', label: '土' },
  { value: 'sunday', label: '日' },
];

/**
 * 頻度データ（実施日程→日数置き選択時に使用）
 * 1{label}に1回
 */
export const frequencyOptions = [
  { value: '1_year', label: '年' },
  { value: '4_year', label: '年度' },
  { value: 'month', label: 'ヶ月' },
  { value: 'week', label: '週間' },
  { value: 'day', label: '日' },
];
