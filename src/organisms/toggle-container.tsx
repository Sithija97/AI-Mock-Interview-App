import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/atoms";
import { cn } from "@/lib/utils";
import { NavigationRoutes } from "@/molecules";
import { useAuth } from "@clerk/clerk-react";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

export const ToggleContainer = () => {
  const { userId } = useAuth();

  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle />
          <SheetDescription>
            <nav className={cn("flex flex-col items-start gap-8")}>
              <NavigationRoutes isMobile />
              {userId && (
                <NavLink
                  to={"/generate"}
                  className={({ isActive }) =>
                    cn(
                      "text-base text-neutral-600",
                      isActive && "text-neutral-900 font-semibold"
                    )
                  }
                >
                  Take An Interview
                </NavLink>
              )}
            </nav>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
