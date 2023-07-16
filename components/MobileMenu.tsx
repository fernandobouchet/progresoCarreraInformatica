'use client';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavItems } from './NavItems';
import { Icons } from './icons';
import { useState } from 'react';

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Icons.menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side={'left'}
          className="h-screen flex flex-col gap-0 border-none pt-20 bg-material-light-surface dark:bg-material-dark-surface rounded-r-lg"
        >
          <NavItems onOpenChange={setOpen} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
