import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../db";

function User() {
  const { userId } = useParams();

  return (
    <div>
      <h1>
        User with id {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to={"follower"}>See Followers</Link>
      <Outlet
        context={{
          nameOfUser: users[Number(userId) - 1].name,
        }}
      />
    </div>
  );
}

export default User;
