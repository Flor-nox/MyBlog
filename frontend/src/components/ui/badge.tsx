"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-wuthering-accent/15 text-wuthering-accent border border-wuthering-accent/30",
        secondary:
          "bg-white/10 text-gray-300 border border-white/20",
        outline:
          "border border-gray-500 text-gray-400",
        success:
          "bg-green-500/15 text-green-400 border border-green-500/30",
        warning:
          "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",
        danger:
          "bg-red-500/15 text-red-400 border border-red-500/30",
        purple:
          "bg-wuthering-purple/15 text-wuthering-purple border border-wuthering-purple/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
