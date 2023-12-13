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
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Icons } from '@/components/icons';
import RoleModePageToggle from '@/components/RoleModePageToggle';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';

export function AvatarMenu() {
  const { status, data: session } = useSession();

  if (status === 'loading')
    return <Skeleton className="h-8 w-8 rounded-full" />;

  return (
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
        {session?.user?.role === 'ADMIN' && <RoleModePageToggle />}
        <DropdownMenuGroup>
          <DropdownMenuItem className="rounded-2xl cursor-pointer">
            <Icons.user className="icon-button" />
            <span>Perfil</span>
          </DropdownMenuItem>
          <Link href="/ajustes">
            <DropdownMenuItem className="rounded-2xl cursor-pointer">
              <Icons.settings className="icon-button" />
              <span>Ajustes</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuItem
          onClick={() => signOut()}
          className="rounded-2xl cursor-pointer"
        >
          <Icons.logout className="icon-button" />
          <span>Cerrar sesión</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
