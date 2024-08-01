import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
    </Routes>
  );
};

export default ProtectedRoutes;
