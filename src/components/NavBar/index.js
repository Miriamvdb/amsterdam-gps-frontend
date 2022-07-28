import { NavLink } from "react-router-dom";
import "./styles.css";

const NavBar = () => {
  return (
    <div className="container-navbar">
      <NavLink
        className="link"
        style={{ paddingLeft: "3rem", color: "deepskyblue" }}
        to="/"
      >
        <h1>Amsterdam GPs</h1>
      </NavLink>
      <div className="container-links">
        <NavLink
          className="link"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="link"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
          to="/doctorschedule"
        >
          Doctor Schedule
        </NavLink>
        <NavLink
          className="link"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
          to="/patientsignup"
        >
          Patient Sign-up
        </NavLink>
        <NavLink
          className="link"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
          to="/patientdatabase"
        >
          Patient Database
        </NavLink>
      </div>
    </div>
  );
};

export { NavBar };
