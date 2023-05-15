import { Navigate, Route } from "react-router";
import { Routes } from "react-router-dom";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to={"/login"} replace />} />
      </Routes>
    </div>
  );
};

export default App;
