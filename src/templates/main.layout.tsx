import { Footer, Header } from "@/molecules";
import { Outlet } from "react-router-dom";
import { Container } from "../organisms/container";

export const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* handler to store the user data */}
      <Header />

      <Container className="flex-grow">
        <main className="flex-grow">
          <Outlet />
        </main>
      </Container>

      <Footer />
    </div>
  );
};
