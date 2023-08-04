const getCareer = async (id: number) => {
  const careers = await fetch(
    `${process.env.NEXT_PUBLIC_HOME_URL}/api/careers/${id}`
  );
  const data = await careers.json();
  return data;
};

export { getCareer };
