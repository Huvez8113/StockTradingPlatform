import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/register", {
        name,
        email,
        password,
      });
      setAlert({ type: "success", message: "User registered successfully!" });
      setTimeout(() => {
        navigate("/login");
      },2000);
    } catch (err) {
      setAlert({ type: "danger", message: "Error during registration! Try again" });
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
              Open an account with us to start Trading
            </h4>
            <form
              onSubmit={handleSignup}
              noValidate
              className="needs-validation"
            >
              <div className="mb-3">
                <label
                  htmlFor="username"
                  className="form-label text-muted fs-5"
                >
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  value={name}
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <div className="valid-feedback">Looks good</div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-muted fs-5">
                  E-Mail
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="form-label text-muted fs-5"
                >
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
              <button className="btn btn-primary btn-lg">Signup</button>
            </form>
            <div className="mt-4">
              <p className="text-muted mt-2 fs-5 mb-3">
                Already have an account?
              </p>
              <button
                onClick={() => navigate("/login")}
                className="btn btn-primary btn-lg"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
