const dateNow = () => {
  const date = new Date();
  const normalDate = date.toLocaleDateString();

  return normalDate;
};

export default dateNow;
