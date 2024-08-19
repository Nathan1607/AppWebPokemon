import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pokemon">Pokemon</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
