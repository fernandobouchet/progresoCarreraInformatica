'use client';

import { signOut, useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { LoginModal } from './LoginModal';
import { Icons } from './icons';

export function AvatarMenu() {
  const { status, data: session } = useSession();

  return (
    <>
      {status !== 'authenticated' ? (
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="rounded-full border-none bg-material-light-primary text-material-light-on-primary dark:bg-material-dark-primary dark:text-material-dark-on-primary transition hover:bg-material-light-primary
              hover:text-material-light-on-primary dark:hover:bg-material-dark-primary  dark:hover:text-material-dark-on-primary hover:brightness-105"
            >
              Acceder
            </Button>
          </DialogTrigger>
          <LoginModal />
        </Dialog>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={session?.user?.image || undefined}
                  alt={session?.user?.name || 'Avatar de usuario'}
                />
                <AvatarFallback>
                  {session?.user?.name?.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 bg-material-light-surface dark:bg-material-dark-surface text-material-light-on-surface dark:text-material-dark-on-surface border-none rounded-2xl"
            align="end"
            forceMount
          >
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {session?.user?.name}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {session?.user?.email}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {session?.user?.role}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem className="hover:bg-material-light-surface-hover dark:hover:bg-material-dark-surface-hover rounded-2xl cursor-pointer active:bg-material-light-secondary dark:active:bg-material-dark-secondary focus:bg-material-light-surface-hover dark:focus:bg-material-dark-surface-hover">
                <Icons.user className="mr-2 h-4 w-4" />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-material-light-surface-hover dark:hover:bg-material-dark-surface-hover rounded-2xl cursor-pointer active:bg-material-light-secondary dark:active:bg-material-dark-secondary focus:bg-material-light-surface-hover dark:focus:bg-material-dark-surface-hover">
                <Icons.settings className="mr-2 h-4 w-4" />
                <span>Ajustes</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() => signOut()}
              className="hover:bg-material-light-surface-hover dark:hover:bg-material-dark-surface-hover rounded-2xl cursor-pointer active:bg-material-light-secondary dark:active:bg-material-dark-secondary focus:bg-material-light-surface-hover dark:focus:bg-material-dark-surface-hover"
            >
              <Icons.logout className="mr-2 h-4 w-4" />
              <span>Cerrar sesión</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
}
