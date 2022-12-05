import { Link } from "react-router-dom";
import { users } from "../db";

function Home() {
  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </div>
  );
}

export default Home;
