'use client';

import * as React from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
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

    return () => {
      document.removeEventListener('keydown', onKeyDown);
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
        {open ? <XIcon className="size-5 text-muted-foreground" /> : <MenuIcon className="size-5 text-muted-foreground" />}
      </Button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label={content.menu.dialogAriaLabel}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute inset-x-0 top-full z-50 overflow-hidden border-b border-border bg-background shadow-md lg:hidden"
          >
            <nav aria-label={content.menu.navAriaLabel} className="space-y-1 px-3 pb-4 pt-2">
              <Link
                href="/#about"
                className="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {content.links.about}
              </Link>
              <Link
                href="/#services"
                className="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {content.links.services}
              </Link>
              <Link
                href="/#cases"
                className="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {content.links.cases}
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
