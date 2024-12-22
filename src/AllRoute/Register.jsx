import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Context } from "../AllContext/Authcontext";

const Register = () => {

  const { SignUp, googleSignup } = useContext(Context)
  const [errorForpass, setErrorForpass] = useState('')
  const navigate = useNavigate()

  // signupwithpassword

  const handleRegisterButton = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const imgurl = e.target.imgurl.value;
    const setOfInput = { email, name, imgurl }
    
    if (!password_validate(password)) {
      return setErrorForpass('you must give minimum 6 char and at-least one uppercase and one lowarcase ')
    }
    else if (!imgurl || !/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(imgurl)) {
      return setErrorForpass('Please provide a valid image URL.');
    }
    SignUp(email, password)
      .then(result => {

        const metadata = result.user.metadata.createdAt;
        setOfInput.metadata = metadata;
        fetch('https://assignment-10-server-side-roan.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(setOfInput)
        })
          .then(res => res.json())
          .then(data => {
          
          })


        navigate('/')
      })
      .catch(error => {setErrorForpass('bad request')})
  }
  // signupwithpassword




  // signinwithgoogle


  const logInwithgoogle = () => {
    googleSignup()
      .then(result => {
       

        const name = result?.user.displayName
        const email = result?.user.email
        const imgurl = result?.user.photoURL

        const googleUserInfo = {
          name, email, imgurl
        }

        fetch('https://assignment-10-server-side-roan.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(googleUserInfo)
        })
          .then(res => res.json())
          .then(data => {
         
          })
        
        navigate('/')
      })
      .catch(error => { })
  }
  // signinwithgoogle

  // password validation
  function password_validate(password) {
    return (
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      password.length >= 6
    );
  }
  // password validation


  return (
    <div>
      {/* <div><Navbar></Navbar></div> */}
      <div className="hero bg-base-200  ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold ">Register</h1>

          </div>
          <div className="card bg-base-100  shadow-2xl w-[500px] ">
            <form onSubmit={handleRegisterButton} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input type="text" name="imgurl" placeholder=" image Url" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="text-center">
                <h1 className="">if Already have an acount please <Link to={'/login'} className="text-green-700">Login</Link></h1>
              </div>
            </form>
            <div>
              <div className="text-red-500 text-center">{errorForpass && errorForpass}</div>
              <div onClick={logInwithgoogle} className="text-center border-2 m-2 px-2 py-3">
                <p className="font-bold flex justify-center items-center gap-2"> <FcGoogle className="text-xl" />Signup with google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div><Footer></Footer></div> */}
    </div>
  );
};

export default Register;