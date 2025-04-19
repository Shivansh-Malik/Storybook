import { ElementType, HTMLAttributes, ReactNode } from "react";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "caption"
  | "helper"
  | "label"
  | "paragraph";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: TypographyVariant;
  children: ReactNode;
  className?: string;
}
