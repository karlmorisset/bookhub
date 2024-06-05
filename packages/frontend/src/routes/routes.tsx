import App from '../App.tsx'
import {
  createBrowserRouter,
} from "react-router-dom";
import User from '../pages/User.tsx';
import Admin from '../pages/Admin.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
    {
    path: "/sign-in",
    element: <User />
  },
    {
    path: "/admin",
    element: <Admin />
  },
]);