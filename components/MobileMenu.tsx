import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavItems } from './NavItems';

export function MobileMenu() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'} className="bg-slate-100">
          <div className="flex flex-col gap-4 py-4 pt-8 h-screen">
            <NavItems />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
