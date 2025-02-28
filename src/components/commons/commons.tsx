
import { cn } from "@/lib/utils";
import * as React from "react";

export const Section: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ className = "", ...props }) => (
  <section className={cn("w-full max-w-[1440px]",className)} {...props} />
);

export const Main: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ className = "", ...props }) => (
  <main className={cn("w-full px-12", className)} {...props} />
);
