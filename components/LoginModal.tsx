import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Icons } from '@/components/icons';
import { signIn } from 'next-auth/react';

const LoginModal = () => {
  return (
    <DialogContent className="max-w-[calc(100dvw-1rem)] sm:max-w-[40rem] border-none">
      <DialogHeader>
        <DialogTitle>Inicio de sesión</DialogTitle>
        <DialogDescription>
          Al iniciar sesión puedes guardar tu progreso y ajustes en tu perfil,
          así como también puedes realizar comentarios en las materias que
          consideres para ayudar o aconsejar a otros estudiantes.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="flex !justify-center">
        <Button
          onClick={() => signIn('google')}
          className="rounded-full border-none w-64"
        >
          <Icons.google className="icon-button" />
          Acceder con Google
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
export { LoginModal };
