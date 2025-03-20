import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/login",
        { email, password },
        { withCredentials: true }
      );
      setAlert({ type: "success", message: "Login successful! Redirecting..." });

      localStorage.setItem("token", res.data.token);
      setTimeout(() => {
        window.location.href = "http://localhost:3001";
      },2000);
    } catch (err) {
      setAlert({ type: "danger", message: "Invalid credentials. Please try again!" });
    }
  };

  return (
    <>
      <div className="container mt-5 p-5">
      {alert && <div className={`alert alert-${alert.type}`} role="alert">{alert.message}</div>}
        <div className="text-center mt-5">
          <div className="col-6 offset-3">
            <h1 className="mt-5">Zerodha</h1>
            <h4 className="text-muted mt-2 fs-5 mb-3">
              Log in to access your account
            </h4>
            <form
              onSubmit={handleLogin}
              noValidate
              className="needs-validation"
            >
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-muted fs-5">
                  E-Mail
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                   className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label text-muted fs-5">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                   className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg">
                Login
              </button>
            </form>
            <div className="mt-4">
              <p className="text-muted mt-2 fs-5 mb-3">Don't have an account?</p>
              <button
                onClick={() => navigate("/signup")}
                className="btn btn-primary btn-lg"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
