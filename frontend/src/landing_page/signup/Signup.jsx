import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/register", {
        name,
        email,
        password,
      });
      alert("Registration Succesful");
      navigate("/login");
    } catch (err) {
      alert("Error during registration");
    }
  };

  return (
    <>
      <div className="container mt-5 p-5">
        <div className="text-center mt-5">
          <h1 className="mt-5">Zerodha</h1>
          <p>Open an account with us to start Trading</p>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
             
              className="btn btn-primary btn-lg"
            >
              Signup
            </button>
          </form>
          <div className="mt-4">
            <p>Already have an account?</p>
            <button
              onClick={() => navigate("/login")}
              className="btn btn-primary btn-lg"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
