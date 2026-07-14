import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline" | "ghost"; size?: "default" | "sm" | "icon" };

export function Button({ className, variant = "default", size = "default", ...props }: Props) {
  return <button className={cn("inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors disabled:pointer-events-none disabled:opacity-50", size === "sm" ? "h-9 px-3 text-sm" : size === "icon" ? "size-10" : "h-10 px-4 text-sm", variant === "default" && "bg-primary text-primary-foreground hover:bg-[#0d5541]", variant === "outline" && "border bg-card hover:bg-muted", variant === "ghost" && "hover:bg-muted", className)} {...props} />;
}
