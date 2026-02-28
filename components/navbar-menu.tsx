'use client';

import * as React from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

type NavbarLinks = {
  about: string;
  services: string;
  cases: string;
};

export function NavbarMenu({ links }: { links: NavbarLinks }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <Button
        type="button"
        variant="ghost"
        size="icon-lg"
        className="rounded-xl lg:hidden"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <MenuIcon className="size-5 text-muted-foreground" />
      </Button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-50 lg:hidden"
        >
          <button
            type="button"
            className="absolute inset-0 bg-overlay-scrim"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
          />

          <div className="absolute left-0 top-0 h-full w-72 bg-background shadow-2xl border-r border-border p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-foreground">Menu</p>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="rounded-xl"
                aria-label="Close navigation menu"
                onClick={() => setOpen(false)}
              >
                <XIcon className="size-4 text-muted-foreground" />
              </Button>
            </div>

            <nav aria-label="Primary" className="mt-4 flex flex-col">
              <Link
                href="/#about"
                className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {links.about}
              </Link>
              <Link
                href="/#services"
                className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {links.services}
              </Link>
              <Link
                href="/#cases"
                className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {links.cases}
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}

