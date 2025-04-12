import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";

type IProps = {
  className?: string;
};

export const LoaderPage = ({ className }: IProps) => {
  return (
    <div
      className={cn(
        "w-screen h-screen flex items-center justify-center bg-transparent z-50",
        className
      )}
    >
      <Loader className="w-6 h-6 min-w-6 animate-spin" />
    </div>
  );
};
