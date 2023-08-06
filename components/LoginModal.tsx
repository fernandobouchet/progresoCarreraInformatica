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
    <DialogContent className="sm:max-w-[425px] border-none">
      <DialogHeader>
        <DialogTitle>Inicio de sesión</DialogTitle>
        <DialogDescription>
          Al iniciar sesión puedes guardar tu progreso y ajustes en tu perfil,
          así como también puedes realizar comentarios en las materias que
          consideres para ayudar o aconsejar a otros estudiantes.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="!justify-evenly">
        <Button
          variant="outline"
          onClick={() => signIn('github')}
          className="rounded-full border-none transition"
        >
          <Icons.gitHub className="mr-2 h-4 w-4" />
          Github
        </Button>
        <Button
          variant="outline"
          onClick={() => signIn('google')}
          className="rounded-full border-none transition"
        >
          <Icons.google className="mr-2 h-4 w-4" />
          Google
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
export { LoginModal };
