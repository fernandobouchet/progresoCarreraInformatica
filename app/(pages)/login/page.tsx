import LoginButton from '@/components/ui/loginButton';
import UnahurLogo from '@/components/ui/unahurLogo';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Login = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect('/');
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-5 w-3/4 md:w-1/2">
        <UnahurLogo />
        <h2 className="text-center font-medium">
          ¡Bienvenido a progreso de carrera informática!
        </h2>
        <p className="text-center">
          Controla fácilmente tu progreso académico, registrando tus
          calificaciones y accediendo a estadísticas sobre tu rendimiento y
          avances.
        </p>
        <LoginButton />
      </div>
    </div>
  );
};
export default Login;
