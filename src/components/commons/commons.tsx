import * as React from "react";

export const Section: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ className = "", ...props }) => (
  <section className={className} {...props} />
);

export const Main: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ className = "", ...props }) => (
  <main className={"" + className} {...props} />
);
