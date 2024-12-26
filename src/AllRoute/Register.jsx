import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Context } from "../AllContext/Authcontext";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { SignUp, googleSignup } = useContext(Context);
  const [errorForpass, setErrorForpass] = useState("");
  const navigate = useNavigate();

  // Signup with password
  const handleRegisterButton = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const imgurl = e.target.imgurl.value;

    if (!password_validate(password)) {
      return setErrorForpass(
        "You must provide a minimum of 6 characters, including at least one uppercase and one lowercase letter."
      );
    } else if (!imgurl || !/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(imgurl)) {
      return setErrorForpass("Please provide a valid image URL.");
    }

    try {
      const result = await SignUp(email, password);
      const user = result.user;

      // Update the user's profile
      await updateProfile(user, {
        displayName: name,
        photoURL: imgurl,
      });

      navigate("/");
    } catch (error) {
      setErrorForpass("Failed to create account. Please try again.");
    }
  };

  // Sign in with Google
  const logInwithgoogle = () => {
    googleSignup()
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setErrorForpass("Google sign-in failed. Please try again.");
      });
  };

  // Password validation
  function password_validate(password) {
    return (
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      password.length >= 6
    );
  }

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register</h1>
          </div>
          <div className="card bg-base-100 shadow-2xl w-[500px]">
            <form onSubmit={handleRegisterButton} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  name="imgurl"
                  placeholder="Image URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="text-center">
                <h1>
                  Already have an account?{" "}
                  <Link to={"/login"} className="text-green-700">
                    Login
                  </Link>
                </h1>
              </div>
            </form>
            <div>
              <div className="text-red-500 text-center">{errorForpass && errorForpass}</div>
              <div
                onClick={logInwithgoogle}
                className="text-center border-2 m-2 px-2 py-3 cursor-pointer"
              >
                <p className="font-bold flex justify-center items-center gap-2">
                  <FcGoogle className="text-xl" />
                  Signup with Google
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
