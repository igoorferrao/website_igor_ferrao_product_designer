import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium leading-none whitespace-nowrap select-none',
  {
    variants: {
      variant: {
        default: 'border-border bg-background text-foreground',
        muted: 'border-border/70 bg-background/92 text-muted-foreground shadow-sm backdrop-blur-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
