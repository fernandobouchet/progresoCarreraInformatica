const getCareer = async (id: number) => {
  const careers = await fetch(`http://localhost:3000/api/careers/${id}`);
  const data = await careers.json();
  return data;
};

export { getCareer };
