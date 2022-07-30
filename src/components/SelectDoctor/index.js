import axios from "axios";
import { useEffect, useState } from "react";
import { Loading } from "../Loading";
import "./styles.css";

const SelectDoctor = ({ selectDoctor, setSelectDoctor }) => {
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
    <div className="container-select-doctor">
      <form>
        <select
          className="select-doctor"
          value={selectDoctor}
          onChange={(event) => {
            setSelectDoctor(event.target.value);
          }}
        >
          <option value="">All</option>
          {doctorList ? (
            doctorList.map((doctor, index) => {
              return (
                <option key={index} value={doctor.id}>
                  {doctor.doctor}
                </option>
              );
            })
          ) : (
            <Loading />
          )}
        </select>
      </form>
    </div>
  );
};

export { SelectDoctor };
