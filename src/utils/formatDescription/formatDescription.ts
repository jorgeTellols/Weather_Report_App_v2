const formatDescription = (description: string) => {
  const newDescription = (description).charAt(0).toUpperCase() + (description).slice(1);

  return newDescription;
};

export default formatDescription;
