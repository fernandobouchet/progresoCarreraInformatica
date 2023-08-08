import { headers } from 'next/headers';

const getCourses = async () => {
  const careers = await fetch(
    `${process.env.NEXT_PUBLIC_HOME_URL}/api/admin/courses`,
    {
      method: 'GET',
      headers: headers(),
    }
  );
  const data = await careers.json();
  return data;
};

export { getCourses };
