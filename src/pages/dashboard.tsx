import { Button } from "@/atoms";
import { Separator } from "@/atoms/separator";
import { Headings } from "@/molecules";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between">
        {/* headings */}
        <Headings
          title="Dashboard"
          description="Create and start your AI Mock interview"
        />
        <Link to="/generate/create">
          <Button size="sm">
            <Plus /> Add New
          </Button>
        </Link>
      </div>

      <Separator className="my-8" />
      {/* content section */}
    </>
  );
};
