import { NavLink, useParams, Outlet } from "react-router-dom";
import { getCategory } from "../api";

export default function Category() {
  const { catId } = useParams();
  const category = getCategory(catId);

  return (
    <>
      <h2>{category.name} Sessions</h2>
      <ul className="session-list">
        {category?.sessions.map((session) => (
          <li className="session" key={session.id}>
            <NavLink
              className={({ isActive }) => (isActive ? "session-active" : null)}
              to={session.id}
            >
              <p className="session-name">{session.name}</p>
              <p>
                {session.speaker.name} | {session.speaker.org}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
