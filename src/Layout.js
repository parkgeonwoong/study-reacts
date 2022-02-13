import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        header
        <Link
          to="/"
          style={{ textDecoration: "none", color: "black", padding: 15 }}
        >
          Home
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
