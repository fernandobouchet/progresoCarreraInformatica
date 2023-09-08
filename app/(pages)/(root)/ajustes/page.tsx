'use client';
import DisplayOptions from '@/components/DisplayOptions';
import { useUserCareer } from '@/lib/services/user/career';

const PageAjustes = () => {
  const { career } = useUserCareer();
  console.log(career);
  return (
    <div>
      PageAjustes
      <div>Elegir Tecnicaturas</div>
      <DisplayOptions />
    </div>
  );
};

export default PageAjustes;
