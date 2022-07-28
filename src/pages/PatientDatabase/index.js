import "./styles.css";

const PatientDatabase = () => {
  return (
    <div className="container-patient-database">
      <h2 className="container-title" style={{ color: "white" }}>
        Patient Database
      </h2>{" "}
      <div className="patient-database-content"></div>
    </div>
  );
};

export { PatientDatabase };
