'use client';

import { signOut, useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { LoginModal } from './LoginModal';
import { Icons } from './Icons';
import { Skeleton } from './ui/skeleton';
import logo from '@/public/avatar_default.webp';

export function AvatarMenu() {
  const { status, data: session } = useSession();

  return (
    <Dialog>
      <DropdownMenu>
        {status === 'loading' ? (
          <Skeleton className="h-8 w-8 rounded-full" />
        ) : (
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={session?.user?.image || logo.src}
                  alt={session?.user?.name || 'Avatar de usuario'}
                />
                <AvatarFallback>
                  {session?.user.name?.replace(/[a-z ]/g, '')}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
        )}
        <DropdownMenuContent
          className="w-56 bg-slate-200 dark:bg-neutral-800"
          align="end"
          forceMount
        >
          {status === 'authenticated' ? (
            <>
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
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Icons.user className="mr-2 h-4 w-4" />
                  <span>Perfil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icons.settings className="mr-2 h-4 w-4" />
                  <span>Ajustes</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut()}>
                <Icons.logout className="mr-2 h-4 w-4" />
                <span>Cerrar sesión</span>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DialogTrigger asChild>
                <DropdownMenuItem>
                  <Icons.login className="mr-2 h-4 w-4" />
                  <span>Iniciar sesión</span>
                </DropdownMenuItem>
              </DialogTrigger>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <LoginModal />
    </Dialog>
  );
}
