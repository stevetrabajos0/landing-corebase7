import { Bot } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900">
        <Bot className="h-5 w-5 text-white" />
      </div>
      {showText && (
        <span className="text-xl font-bold tracking-tight text-gray-900">corebase7</span>
      )}
    </div>
  );
}
