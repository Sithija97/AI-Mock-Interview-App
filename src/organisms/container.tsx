import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: IProps) => {
  return (
    <div
      className={cn("container mx-auto px-4 md:px-8 py-4 w-full", className)}
    >
      {children}
    </div>
  );
};
