import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavItems } from './NavItems';
import { Icons } from './Icons';

export function MobileMenu() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Icons.menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side={'left'}
          className="h-screen flex flex-col gap-0 border-none pt-20 bg-slate-200 dark:bg-neutral-800"
        >
          <NavItems />
        </SheetContent>
      </Sheet>
    </div>
  );
}
