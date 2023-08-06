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
import RoleModePageToggle from './ui/RoleModePageToggle';

export function AvatarMenu() {
  const { status, data: session } = useSession();

  return (
    <>
      {status !== 'authenticated' ? (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-full border-none transition">
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
            className="w-56 border-none rounded-2xl"
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
              </div>
            </DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem className="rounded-2xl cursor-pointer">
                <Icons.user className="icon-button" />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-2xl cursor-pointer">
                <Icons.settings className="icon-button" />
                <span>Ajustes</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            {session?.user?.role === 'ADMIN' && <RoleModePageToggle />}
            <DropdownMenuItem
              onClick={() => signOut()}
              className="rounded-2xl cursor-pointer"
            >
              <Icons.logout className="icon-button" />
              <span>Cerrar sesión</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
}
