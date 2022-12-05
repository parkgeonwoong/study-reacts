import { useOutletContext } from "react-router-dom";

interface IFollowers {
  nameOfUser: string;
}

function Followers() {
  const { nameOfUser } = useOutletContext<IFollowers>();

  return (
    <div>
      <h4>Follower {nameOfUser}</h4>
    </div>
  );
}

export default Followers;
