import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthenticationLayout, PublicLayout } from "@/templates";
import { HomePage, SignIn, SignUp } from "@/pages";
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
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        {/* protected routes */}
      </Routes>
    </Router>
  );
}

export default App;
