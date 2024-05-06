import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useAuthStore } from "../../store/auth.store";
function Dashboard() {
  const { token, logout } = useAuthStore();

  return (
    <>
      {token ? (
        <>
          <div>Dashboard</div>
          <Link to="/posts">Posts</Link>
          <br />
          <Button onClick={logout}>Logout</Button>
        </>
      ) : (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero error perferendis distinctio. Sint
          minus maxime, quasi unde quidem aut maiores temporibus perspiciatis blanditiis nulla, hic distinctio animi!
          Ipsa, amet.
        </div>
      )}
    </>
  );
}

export default Dashboard;
