import { headers } from 'next/headers';

const getUsers = async () => {
  const careers = await fetch(
    `${process.env.NEXT_PUBLIC_HOME_URL}/api/admin/users`,
    {
      method: 'GET',
      headers: headers(),
    }
  );
  const data = await careers.json();
  return data;
};

export { getUsers };
