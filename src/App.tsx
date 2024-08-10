import { Routes, Route } from "react-router-dom";
import "./global.css";
import SigninForm from "./auth/forms/SigninForm";
import { Home } from "./root/pages";
import SignupForm from "./auth/forms/SignupForm";
import AuthLayout from "./auth/AuthLayout";
import RootLayout from "./root/RootLayout";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* {public routes} */}
        <Route element={<AuthLayout />} />
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-up" element={<SignupForm />} />

        {/* {private routes} */}
        <Route element={<RootLayout />} />
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
