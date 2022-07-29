import { NavLink } from "react-router-dom";
import { FiBriefcase, FiPlus, FiUserPlus } from "react-icons/fi";
import "./styles.css";
import { CurrentInfo } from "../../components";

const HomePage = () => {
  return (
    <div className="container-homepage">
      <h2 className="container-title" style={{ color: "white" }}>
        Home
      </h2>

      <div className="homepage-content">
        <h2>
          Welcome to Amsterdam GP's{" "}
          <FiPlus style={{ paddingBottom: "0.75rem" }} />
        </h2>
        <CurrentInfo />

        <div className="homepage-buttons">
          <NavLink to="/doctorschedule">
            <button className="button-1">
              Who's on duty? <FiBriefcase className="icon-white" />
            </button>
          </NavLink>

          <NavLink to="/patientsignup">
            <button className="button-1">
              I'm a new patient <FiUserPlus className="icon-white" />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export { HomePage };
