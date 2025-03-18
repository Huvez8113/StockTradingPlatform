import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:8080/login",{email, password}, {withCredentials:true});
      alert("Login Successful");

      localStorage.setItem("token", res.data.token);
      window.location.href = "http://localhost:3001";
    } catch(err){
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <div className="container mt-5 p-5">
      <div className="text-center mt-5">
        <h1 className="mt-5">Zerodha</h1>
        <p>Log in to access your account</p>
        <form onSubmit={handleLogin}>
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
          <button type="submit" className="btn btn-primary btn-lg">
            Login
          </button>
        </form>
        <div className="mt-4">
          <p>Don't have an account?</p>
          <button onClick={() => navigate("/signup")} className="btn btn-primary btn-lg">
            Signup
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
