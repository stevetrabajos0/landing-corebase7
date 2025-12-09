import { Bot } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
        <Bot className="h-5 w-5 text-primary-foreground" />
      </div>
      {showText && (
        <span className="text-xl font-bold tracking-tight">AgentsAI</span>
      )}
    </div>
  );
}
