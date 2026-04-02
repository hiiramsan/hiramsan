import React from "react";
import { TECH_STACK } from "@/utils/TechStack";

type TechIconProps = {
  name: string;
  className?: string;
};

export default function TechIcon({ name, className }: TechIconProps) {
  const entry = TECH_STACK.find((item) => item.name === name);
  if (!entry) return null;

  const icon = entry.icon as React.ReactElement<{ className?: string }> | null;

  if (icon && React.isValidElement(icon)) {
    const existing = icon.props?.className as string | undefined;
    const mergedClassName = [existing, className].filter(Boolean).join(" ");
    return React.cloneElement(icon, {
      className: mergedClassName || undefined,
      "aria-hidden": true,
    } as React.SVGProps<SVGSVGElement>);
  }

  return null;
}
