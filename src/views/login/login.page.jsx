import { Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";

function LoginPage() {
  const { isLoggedIn, token, login } = useAuthStore();

  if (isLoggedIn && token) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <div>
      LoginPage
      <br />
      <Button onClick={() => login({ user: "babc", token: "kdkdkdk" })}>Login</Button>
    </div>
  );
}

export default LoginPage;
