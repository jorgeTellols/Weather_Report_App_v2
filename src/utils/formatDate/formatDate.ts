function formatDate(date: number) {
  return new Date(date * 1000).toLocaleDateString();
}

export default formatDate;
