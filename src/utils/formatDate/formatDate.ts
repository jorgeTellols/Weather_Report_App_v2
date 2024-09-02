const options: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
};

const formatDate = (date: number) => new Date(date * 1000).toLocaleDateString('en-GB', options);

export default formatDate;
