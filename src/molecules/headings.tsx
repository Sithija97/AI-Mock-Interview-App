import { cn } from "@/lib/utils";

interface IProps {
  title: string;
  description?: string;
  isSubHeading?: boolean;
}

export const Headings = ({
  title,
  description,
  isSubHeading = false,
}: IProps) => {
  return (
    <div>
      <h2
        className={cn(
          "text-2xl md:text-3xl text-gray-800 font-semibold font-sans",
          isSubHeading && "text-lg md:text-xl"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
};
