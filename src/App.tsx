import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  AuthenticationLayout,
  MainLayout,
  ProtectedLayout,
  PublicLayout,
} from "@/templates";
import { Generate, HomePage, SignInPage, SignUpPage } from "@/pages";
import "./App.css";
import { Dashboard } from "./templates/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* authentication layout */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/* protected routes */}
        <Route
          element={
            <ProtectedLayout>
              <MainLayout />
            </ProtectedLayout>
          }
        >
          {/* protected routes */}
          <Route path="/generate" element={<Generate />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
