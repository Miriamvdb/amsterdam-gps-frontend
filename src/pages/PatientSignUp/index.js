import { SignupForm } from "../../components";
import "./styles.css";

const PatientSignUp = () => {
  return (
    <div className="container-patient-signup">
      <h2 className="container-title" style={{ color: "white" }}>
        Patient Sign-up
      </h2>
      <div className="patient-signup-content">
        <SignupForm />
      </div>
    </div>
  );
};

export { PatientSignUp };
