export const convertDate = (isoString: string) => {
  const date = new Date(isoString);

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;

  const strTime = hours + ':' + minutesStr + ' ' + ampm;
  return strTime;
};
