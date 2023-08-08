import { headers } from 'next/headers';

const getCareers = async () => {
  const careers = await fetch(
    `${process.env.NEXT_PUBLIC_HOME_URL}/api/admin/careers`,
    {
      method: 'GET',
      headers: headers(),
    }
  );
  const data = await careers.json();
  return data;
};

export { getCareers };
