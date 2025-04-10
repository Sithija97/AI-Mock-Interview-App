import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthenticationLayout, PublicLayout } from "@/templates";
import { HomePage, SignInPage, SignUpPage } from "@/pages";
import "./App.css";

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
      </Routes>
    </Router>
  );
}

export default App;
