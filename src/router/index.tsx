import { BrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

const BaseRouter = () => {
  return (
    <BrowserRouter>
      <ProtectedRoutes />
    </BrowserRouter>
  );
};

export default BaseRouter;
