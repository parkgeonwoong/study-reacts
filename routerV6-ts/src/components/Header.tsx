import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const onAboutHandle = () => {
    navigate("/about");
  };
  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          <button onClick={() => onAboutHandle()}>About</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
