import { NavLink } from "react-router-dom";
import "./styles.css";

const PatientCard = ({
  id,
  idnr,
  firstName,
  lastName,
  gender,
  dateOfBirth,
}) => {
  return (
    <div className="container-patientcard">
      <div className="name-patient">
        <h3>
          {firstName} {lastName}
        </h3>
      </div>
      <div className="info-patient">
        <p>
          <b>Id: </b>
          {idnr}
        </p>
        <p>
          <b>Gender: </b>
          {gender}
        </p>
        <p>
          <b>Date of birth: </b>
          {dateOfBirth}
        </p>
      </div>
      <div className="container-button">
        <NavLink to={`/patientdatabase/details/${id}`}>
          <button className="button-3">Show details</button>
        </NavLink>
      </div>
    </div>
  );
};

export { PatientCard };
