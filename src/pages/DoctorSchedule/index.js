import { CurrentInfo } from "../../components";
import "./styles.css";

const DoctorSchedule = () => {
  return (
    <div className="container-doctorschedule">
      <h2 className="container-title" style={{ color: "white" }}>
        Doctor Schedule
      </h2>{" "}
      <div className="doctorschedule-content">
        <CurrentInfo />
      </div>
    </div>
  );
};

export { DoctorSchedule };
