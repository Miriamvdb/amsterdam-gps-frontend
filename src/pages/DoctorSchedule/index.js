import { useEffect, useState } from "react";
import { CurrentInfo, DoctorTable, Loading } from "../../components";
import axios from "axios";
import "./styles.css";

const DoctorSchedule = () => {
  const [doctorList, setDoctorList] = useState(null);

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
              <h3>Doctor</h3>
            </div>
            <div className="title2">
              <h3>Email</h3>
            </div>
            <div className="title3">
              <h3>Availability</h3>
            </div>
          </div>
          {doctorList ? (
            doctorList.map((doctor, index) => {
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
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <CurrentInfo />
    </div>
  );
};
export { DoctorSchedule };
