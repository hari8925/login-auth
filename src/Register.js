import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setname] = useState("");
  const [id, idchange] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");

  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";
    if (id === null || id === "") {
      isproceed = false;
      errormessage += " Username";
    }

    if (name === null || name === "") {
      isproceed = false;
      errormessage += " Fullname";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += " Password";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormessage += " Email";
    }

    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isproceed = false;
        toast.warning("Please enter the valid email");
      }
    }
    return isproceed;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { id, name, password, email, phone };
    if (IsValidate()) {
      //console.log(regobj);
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success("Registered successfully.");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
    }
  };
  return (
    <div className="container my-5">
      <div className="row justify-content-center ">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center bg-warning">
              <h2>Registration Form</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handlesubmit}>
                <div className="mb-3">
                  <label for="name" className="form-label">
                    UserName
                  </label>
                  <input
                    value={id}
                    onChange={(e) => idchange(e.target.value)}
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mb-3">
                  <label for="confirmPassword" className="form-label">
                    Phone
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                    type="text"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Enter your phone no"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>
              </form>
            </div>
            <div className="card-footer text-center">
              <p className="mb-0">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
