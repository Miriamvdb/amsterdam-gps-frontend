import "./styles.css";

const DoctorTable = ({ doctor, email, onDuty }) => {
  return (
    <div className="all-doctors">
      <div className="doctor-doctor">
        <p>
          <b>{doctor}</b>
        </p>
      </div>
      <div className="doctor-email">
        <p>
          <b>{email}</b>
        </p>
      </div>
      <div className="doctor-availability">
        {onDuty ? (
          <p>
            <b style={{ color: "rgb(0, 255, 149)" }}>Available</b>
          </p>
        ) : (
          <p>
            <b style={{ color: "tomato" }}>Not available</b>
          </p>
        )}
      </div>
    </div>
  );
};

export { DoctorTable };
