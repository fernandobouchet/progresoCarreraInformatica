import { headers } from 'next/headers';

const getPeriods = async () => {
  const careers = await fetch(
    `${process.env.NEXT_PUBLIC_HOME_URL}/api/admin/periods`,
    {
      method: 'GET',
      headers: headers(),
    }
  );
  const data = await careers.json();
  return data;
};

export { getPeriods };
