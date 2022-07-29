import { useEffect, useState } from "react";
import { CurrentInfo, DoctorTable } from "../../components";
import axios from "axios";
import "./styles.css";

const DoctorSchedule = () => {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    const getAllDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:4000/doctors");
        setDoctorList(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getAllDoctors();
  }, []);

  return (
    <div className="container-doctorschedule">
      <h2 className="container-title" style={{ color: "white" }}>
        Doctor Schedule
      </h2>{" "}
      <div className="doctorschedule-content">
        <h2>Who is on duty?</h2>

        <div className="container-doctortable">
          <div className="titles">
            <div className="title1">
              <b>DOCTOR</b>
            </div>
            <div className="title2">
              <b>EMAIL</b>
            </div>
            <div className="title3">
              <b>AVAILABILITY</b>
            </div>
          </div>
          {doctorList
            ? doctorList.map((doctor, index) => {
                return (
                  <div key={index}>
                    <DoctorTable
                      id={doctor.id}
                      doctor={doctor.doctor}
                      email={doctor.email}
                      onDuty={doctor.onDuty}
                    />
                  </div>
                );
              })
            : "Loading.."}
        </div>
      </div>
      <CurrentInfo />
    </div>
  );
};
export { DoctorSchedule };
