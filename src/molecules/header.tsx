import { cn } from "@/lib/utils";
import { Container } from "@/templates";
import { useAuth } from "@clerk/clerk-react";

export const Header = () => {
  const { userId } = useAuth();

  return (
    <header
      className={cn("w-full border-b duration-150 transition-all ease-in-out")}
    >
      <Container>
        <div>
          {/* logo */}
          {/* navigation */}
          {/* profile */}
        </div>
      </Container>
    </header>
  );
};
