export function utcToKtc(time) {
  const utcTimeString = time;
  const utcDate = new Date(utcTimeString);

  const hours = utcDate.getHours();
  const minute = utcDate.getMinutes();

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minute.toString().padStart(2, '0');

  const timeString = `${formattedHours}시 ${formattedMinutes}분`;

  return timeString;
}

export function utcTime(time) {
  const date = new Date(time);
  return date.toLocaleDateString('ko-KR');
}
