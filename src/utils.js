export const formatDateTime = (strDate) => {
  const dateTime = new Date(strDate);
  const day = dateTime.getDate();
  const month = dateTime.getMonth();
  const year = dateTime.getFullYear();
  return `${day}/${month}/${year}`;
};
