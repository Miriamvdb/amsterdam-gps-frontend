import { NavLink } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import "./styles.css";

const NavBar = () => {
  return (
    <div className="container-navbar">
      <NavLink
        className="link"
        style={{ paddingLeft: "3rem", color: "deepskyblue" }}
        to="/"
      >
        <h1>
          Amsterdam GPs <FiPlus style={{ paddingBottom: "0.75rem" }} />
        </h1>
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
