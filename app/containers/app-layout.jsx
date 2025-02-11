import { Link, useMatches } from "@remix-run/react";
import useStatusPageStore from "~/store/status-page";

const AppLayout = ({children}) => {
  const matches = useMatches();
  const isLoginRoute = matches.some(match => match.pathname === "/login");
  const statusPage = useStatusPageStore((state) => state.statusPage);
  const onClick = function() {
    alert('Button clicked');
  }
  return (
    <>
      <header className="flex gap-4">
        <Link to="/">Home </Link>
        {statusPage.name}
        {isLoginRoute ? null : <Link to="/login"> Login</Link>}
        <button onClick={onClick}>Some Button</button>
      </header>
      <page-content>
        {children}
      </page-content>
      <footer></footer>
    </>
  );
}

export default AppLayout;