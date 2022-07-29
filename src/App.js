import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import {
  DoctorSchedule,
  HomePage,
  PatientDatabase,
  PatientSignUp,
} from "./pages";
import "./App.css";

function App() {
  return (
    <div className="container-app">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctorschedule" element={<DoctorSchedule />} />
        <Route path="/patientsignup" element={<PatientSignUp />} />
        <Route path="/patientdatabase" element={<PatientDatabase />} />
      </Routes>
    </div>
  );
}

export default App;
