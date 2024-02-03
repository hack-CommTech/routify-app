import dayjs from 'dayjs';
import 'dayjs/locale/ja';

dayjs.locale('ja');

/**
 * サーバーから受け取ったタイムスタンプを日付表示する
 * @param value - 変換する日付
 * @param string - 変換後の表記
 */
export const formatDate = (value: string | Date): string =>
  dayjs(value).format('YYYY/MM/DD');

/**
 * サーバーから受け取ったタイムスタンプを日付表示する
 * @param value - 変換する日付
 * @param string - 変換後の表記
 */
export const formatTime = (value: string | Date): string =>
  dayjs(value).format('HH:mm');
