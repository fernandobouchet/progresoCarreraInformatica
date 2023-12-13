'use client';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

const LoginButton = () => {
  return (
    <Button
      onClick={() => signIn('google')}
      className="rounded-full border-none w-64 font-medium"
    >
      <Icons.google className="mr-2" />
      Iniciar sesión con Google
    </Button>
  );
};
export default LoginButton;
