import axios from "axios";
import { useEffect, useState } from "react";
import { Loading } from "../../components";
import { PatientCard } from "../../components/PatientCard";
import "./styles.css";

const PatientDatabase = () => {
  const [patientList, setPatientList] = useState(null);

  useEffect(() => {
    const getAllPatients = async () => {
      try {
        const response = await axios.get("http://localhost:4000/patients");
        setPatientList(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getAllPatients();
  }, []);

  // Feature 5 - change sorting on ABC
  const sortedPatients = [...patientList].sort((patientA, patientB) =>
    patientA.lastName.localeCompare(patientB.lastName)
  );

  return (
    <div className="container-patient-database">
      <h2 className="container-title" style={{ color: "white" }}>
        Patient Database
      </h2>{" "}
      <div className="patient-database-content">
        <div className="all-patientcards">
          {sortedPatients ? (
            sortedPatients.map((patient, index) => (
              <div key={index}>
                <PatientCard
                  id={patient.id}
                  idnr={patient.idnr}
                  firstName={patient.firstName}
                  lastName={patient.lastName}
                  gender={patient.gender}
                  dateOfBirth={patient.dateOfBirth}
                />
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export { PatientDatabase };
