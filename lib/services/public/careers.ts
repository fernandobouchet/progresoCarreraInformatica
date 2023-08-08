import { headers } from 'next/headers';

const getCareer = async (id: number) => {
  const careers = await fetch(
    `${process.env.NEXT_PUBLIC_HOME_URL}/api/public/careers/${id}`,
    {
      method: 'GET',
      headers: headers(),
    }
  );
  const data = await careers.json();
  return data;
};

export { getCareer };
