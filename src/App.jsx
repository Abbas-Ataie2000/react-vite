import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Posts from "./views/posts/posts.page";
import Dashboard from "./views/dashboard/dashboard.page";
import LoginPage from "./views/login/login.page";
import RegisterPage from "./views/register/register.page";
import IsAuthenticated from "./components/misc/is-authenticated";
import { DashboardLayout } from "./components/layout/dashboard.layout";
import { AuthLayout } from "./components/layout/auth.layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <IsAuthenticated>
        <DashboardLayout>
          <Dashboard />
        </DashboardLayout>
      </IsAuthenticated>
    ),
  },
  {
    path: "/posts",
    element: (
      <IsAuthenticated>
        <DashboardLayout>
          <Posts />
        </DashboardLayout>
      </IsAuthenticated>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <AuthLayout>
        <RegisterPage />
      </AuthLayout>
    ),
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
