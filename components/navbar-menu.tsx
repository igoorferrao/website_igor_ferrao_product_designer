'use client';

import * as React from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import type { SiteContent } from '@/content/types';

export function NavbarMenu({ content }: { content: SiteContent['navbar'] }) {
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
        aria-label={open ? content.menu.closeAriaLabel : content.menu.openAriaLabel}
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
          aria-label={content.menu.dialogAriaLabel}
          className="fixed inset-0 z-50 lg:hidden"
        >
          <button
            type="button"
            className="absolute inset-0 bg-overlay-scrim"
            aria-label={content.menu.closeAriaLabel}
            onClick={() => setOpen(false)}
          />

          <div className="absolute left-0 top-0 h-full w-72 bg-background shadow-2xl border-r border-border p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-foreground">{content.menu.title}</p>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="rounded-xl"
                aria-label={content.menu.closeAriaLabel}
                onClick={() => setOpen(false)}
              >
                <XIcon className="size-4 text-muted-foreground" />
              </Button>
            </div>

            <nav aria-label={content.menu.navAriaLabel} className="mt-4 flex flex-col">
              <Link
                href="/#about"
                className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {content.links.about}
              </Link>
              <Link
                href="/#services"
                className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {content.links.services}
              </Link>
              <Link
                href="/#cases"
                className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {content.links.cases}
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
