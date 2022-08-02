import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Loading } from "../../components";
import { FiChevronsLeft } from "react-icons/fi";
import "./styles.css";

const PatientDetails = () => {
  const [patient, setPatient] = useState(null);
  const params = useParams();

  useEffect(() => {
    const getPatients = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/patients/${params.id}`
        );
        console.log(response.data);
        setPatient(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getPatients();
  }, [params.id]);

  if (!patient) return <Loading />;

  return (
    <div className="container-patient-details">
      <h2 className="container-title" style={{ color: "white" }}>
        Patient Details
      </h2>{" "}
      <div className="patient-details-content">
        <div className="name-patientdetails">
          <h2>
            {patient.firstName} {patient.lastName}
          </h2>
        </div>
        <div className="info-patientdetails">
          <p>
            <b>Id: </b>
            {patient.idnr}
          </p>
          <p>
            <b>Gender: </b>
            {patient.gender}
          </p>
          <p>
            <b>Date of birth: </b>
            {patient.dateOfBirth}
          </p>
          <h3 className="title-border">Contact details</h3>
          <p>
            <b>Email: </b>
            {patient.email}
          </p>
          <p>
            <b>Phone number: </b>
            {patient.phoneNumber}
          </p>
          <h3 className="title-border">Prescriptions</h3>
          <div>
            {patient.prescription.map((prescr, index) => {
              return <p key={index}>- {prescr}</p>;
            })}
          </div>
        </div>
        <NavLink to="/patientdatabase">
          <h2 className="backlink">
            <FiChevronsLeft />
          </h2>
        </NavLink>
      </div>
    </div>
  );
};

export { PatientDetails };
