import clsx from "clsx"; 
import type { TypographyProps } from "./Typography.types";

export const Typography = ({ as: Component = "p", variant = "body", children, className }: TypographyProps) => {
  const styles = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-medium",
    h4: "text-xl font-medium",
    h5: "text-lg font-medium",
    h6: "text-base font-medium",
    body: "text-base",
    paragraph: "text-base leading-relaxed",
    label: "text-sm font-medium",
    caption: "text-xs text-gray-500",
    helper: "text-sm text-gray-500 italic",
  };

 return (
    <>
  <Component className={clsx(styles[variant], className)}>
   {children}
  </Component>
    <h1 className="text-black dark:text-white">Heading</h1>
    </>
 );
};
