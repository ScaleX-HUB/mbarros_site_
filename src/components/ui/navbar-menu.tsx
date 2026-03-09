import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
} as const;

export function MenuItem({
  setActive,
  active,
  item,
  to,
  children,
  className,
  labelClassName,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  to?: string;
  children?: React.ReactNode;
  className?: string;
  labelClassName?: string;
}) {
  return (
    <div onMouseEnter={() => setActive(item)} className={cn("relative", className)}>
      <motion.span
        transition={{ duration: 0.3 }}
        className={cn(
          "cursor-pointer text-sm uppercase tracking-wider font-medium text-muted-foreground hover:text-foreground",
          labelClassName
        )}
      >
        {to ? (
          <Link to={to} className="block no-underline">
            {item}
          </Link>
        ) : (
          item
        )}
      </motion.span>

      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1rem)] left-1/2 -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-popover text-popover-foreground rounded-2xl overflow-hidden border border-border shadow-lg"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

export function Menu({
  setActive,
  children,
  className,
  active,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}) {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={cn(
        "relative",
        className
      )}
    >
      <div className="relative z-10 flex items-center justify-center space-x-6">
        {children}
      </div>

      {active ? (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-full h-10 z-0"
        />
      ) : null}
    </nav>
  );
}

export function ProductItem({
  title,
  description,
  to,
  src,
}: {
  title: string;
  description: string;
  to: string;
  src: string;
}) {
  return (
    <Link to={to} className="flex items-center gap-3 rounded-lg p-2 hover:bg-accent">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        loading="lazy"
        className="h-[70px] w-[140px] flex-shrink-0 rounded-md object-cover"
      />
      <div>
        <h4 className="text-base font-semibold mb-1 text-foreground">{title}</h4>
        <p className="text-muted-foreground text-sm max-w-[12rem]">{description}</p>
      </div>
    </Link>
  );
}

export type HoveredLinkProps = Omit<React.ComponentProps<typeof Link>, "className"> & {
  className?: string;
};

export function HoveredLink({ children, className, ...rest }: HoveredLinkProps) {
  return (
    <Link
      {...rest}
      className={cn(
        "text-muted-foreground hover:text-foreground transition-colors",
        className
      )}
    >
      {children}
    </Link>
  );
}
