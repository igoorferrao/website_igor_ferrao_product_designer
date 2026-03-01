'use client';

import * as React from 'react';
import Image from 'next/image';
import { XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type LightboxImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  ariaLabels?: {
    openImage: string;
    closeImage: string;
    dialog: string;
  };
};

export function LightboxImage({ src, alt, sizes, priority, className, imageClassName, ariaLabels }: LightboxImageProps) {
  const [open, setOpen] = React.useState(false);
  const openLabel = ariaLabels?.openImage ?? 'Open image';
  const closeLabel = ariaLabels?.closeImage ?? 'Close image preview';
  const dialogLabel = ariaLabels?.dialog ?? 'Image preview';

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
      <button
        type="button"
        className={cn(
          'group relative block w-full overflow-hidden text-left outline-none',
          'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          className
        )}
        onClick={() => setOpen(true)}
        aria-label={alt ? `${openLabel}: ${alt}` : openLabel}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            'object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:transform-none',
            imageClassName
          )}
        />
      </button>

      {open ? (
        <div role="dialog" aria-modal="true" aria-label={dialogLabel} className="fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-overlay-scrim"
            aria-label={closeLabel}
            onClick={() => setOpen(false)}
          />

          <div className="absolute inset-0 flex items-center justify-center p-4 md:p-10">
            <div className="relative w-full max-w-6xl">
              <div className="relative h-[80vh] w-full overflow-hidden rounded-2xl bg-background">
                <div className="absolute right-4 top-4 z-10">
                  <Button
                    type="button"
                    variant="secondary"
                    size="icon-lg"
                    className="rounded-xl"
                    aria-label={closeLabel}
                    onClick={() => setOpen(false)}
                  >
                    <XIcon className="size-5 text-foreground" />
                  </Button>
                </div>
                <Image src={src} alt={alt} fill className="object-contain" sizes="100vw" priority={priority} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
