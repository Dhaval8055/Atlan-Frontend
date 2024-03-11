import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import InputControl from "./Inputcontrol";

const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <>
      <style>{`
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #f5f5f5;
         }

        .innerBox {
          width: 100%;
          max-width: 600px;
          text-align: left;
          background-color: #fff;
          box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          font-size: 1rem;
          padding: 30px;
          border-radius: 10px;
          gap: 10px;
          align-items: left;
        }

        .heading {
          text-align: left;
          font-size: 2rem;
          margin-bottom: 20px;
          padding: 20px;
        }

        .footer {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 20px;
        }

        .footer .error {
          font-weight: bold;
          color: #ff3300;
          text-align: center;
        }

        .footer button {
          background-color: #237ABE;
          color: #fff;
          border-radius: 5px;
          font-weight: bold;
          padding: 10px 0;
          width: 100%;
          cursor: pointer;
        }

        .footer button:disabled {
          background-color: gray;
        }

        .footer button:hover {
          background-color: #006CB1;
        }

        .footer p {
          color: #000;
          font-size: 0.9rem;
        }

        .footer p span a {
          color: #237ABE;
          font-size: 1rem;
          text-decoration: none;
        }
        @media (min-width: 768px) {
          .innerBox {
            width: 30vw;
            max-width: 100vw;
          }
        }
      `}</style>
        <div className="innerBox">
          <h1 className="heading">Sign up</h1>
          <InputControl
            label="Name"
            placeholder="Enter your name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
          <InputControl
            label="Email"
            placeholder="Enter email address"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <InputControl
            label="Password"
            placeholder="Enter password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
          />

          <div className="footer">
            <b className="error">{errorMsg}</b>
            <button onClick={handleSubmission} disabled={submitButtonDisabled}>
              Signup
            </button>
            <p>
              Already have an account?{" "}
              <span>
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Signup;