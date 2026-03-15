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
  interactive?: boolean;
  className?: string;
  imageClassName?: string;
  dialogImageClassName?: string;
  dialogSurfaceClassName?: string;
  ariaLabels?: {
    openImage: string;
    closeImage: string;
    dialog: string;
  };
};

export function LightboxImage({
  src,
  alt,
  sizes,
  priority,
  interactive = true,
  className,
  imageClassName,
  dialogImageClassName,
  dialogSurfaceClassName,
  ariaLabels,
}: LightboxImageProps) {
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

  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn(
        'object-cover motion-reduce:transition-none motion-reduce:transform-none',
        interactive && 'transition-transform duration-300 ease-out group-hover:scale-[1.02]',
        imageClassName,
      )}
    />
  );

  if (!interactive) {
    return <div className={cn('relative block w-full overflow-hidden', className)}>{image}</div>;
  }

  return (
    <>
      <button
        type="button"
        className={cn(
          'group relative block w-full overflow-hidden text-left outline-none',
          'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          className,
        )}
        onClick={() => setOpen(true)}
        aria-label={alt ? `${openLabel}: ${alt}` : openLabel}
      >
        {image}
      </button>

      {open ? (
        <div role="dialog" aria-modal="true" aria-label={dialogLabel} className="fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-overlay-scrim"
            aria-label={closeLabel}
            onClick={() => setOpen(false)}
          />

          <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 md:p-10">
            <div className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-6xl items-center justify-center md:max-h-[calc(100dvh-5rem)]">
              <div
                className={cn(
                  'relative aspect-[1204/732] w-full max-h-[calc(100dvh-1.5rem)] overflow-hidden rounded-2xl bg-accent md:max-h-[calc(100dvh-5rem)]',
                  dialogSurfaceClassName,
                )}
              >
                <div className="absolute right-3 top-3 z-10 md:right-4 md:top-4">
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
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className={cn('object-contain', dialogImageClassName)}
                  sizes="100vw"
                  priority={priority}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
