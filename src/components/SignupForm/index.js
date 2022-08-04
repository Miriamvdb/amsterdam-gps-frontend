import axios from "axios";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import "./styles.css";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumer] = useState("");
  const [gender, setGender] = useState(0);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const submitSignup = async (event) => {
    console.log("Hi, you're signed up! :)");
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth/signup", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        gender: gender,
        dateOfBirth: dateOfBirth,
      });
      console.log(response.data);

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="container-signupform">
      <h2>Welcome! Create an account</h2>
      <div className={showSuccess ? "show-success" : "hide-success"}>
        <p>
          <b style={{ color: "rgb(95, 255, 188)" }}>
            You're succesfully signed up!
          </b>
        </p>
      </div>
      <form onSubmit={submitSignup}>
        <input
          className="input-signup"
          type="text"
          value={firstName}
          placeholder="First name"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <input
          className="input-signup"
          type="text"
          value={lastName}
          placeholder="Last name"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <input
          className="input-signup"
          type="text"
          value={email}
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="input-signup"
          type="text"
          value={phoneNumber}
          placeholder="Phone number"
          onChange={(event) => {
            setPhoneNumer(event.target.value);
          }}
        />
        <select
          className="select-signup"
          type="select"
          value={gender}
          placeholder="Phone number"
          onChange={(event) => {
            setGender(event.target.value);
          }}
        >
          <option value={0}>Select gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
        <input
          className="select-signup"
          type="date"
          value={dateOfBirth}
          onChange={(event) => {
            setDateOfBirth(event.target.value);
          }}
        />
        <div className="container-button">
          <button className="button-2" type="submit">
            <FiPlus />
          </button>
        </div>
      </form>
    </div>
  );
};

export { SignupForm };
