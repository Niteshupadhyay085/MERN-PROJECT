// import {useState} from "react";
// import { useLogin } from "../hooks/useLogin";



// const Login = () =>{
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const {login, error, isLoading} = useLogin()

//     const handleSubmit = async (e) =>{
//         e.preventDefault()

//         //console.log(email, password)
//         await login(email, password)
//     }


//     return(
//         <form className="login" onSubmit={handleSubmit}>
//             <h4>LogIn</h4>

//             <label>Email:</label>
//             <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />

//       <label>Password:</label>
//             <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />


//       <button disabled = {isLoading}>Login</button>
//       {error && <div className="error">{error}</div>}
//         </form>
//     )

// }

// export default Login;



import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { FaEnvelope, FaLock } from "react-icons/fa"; // 🟢 Added icons

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="auth-container"> {/* 🟢 Wrapper for better layout */}
      <form className="auth-form login" onSubmit={handleSubmit}>
        <h2>Welcome Back 👋</h2> {/* 🟢 Improved heading */}
        <p className="subtitle">Login to continue your workouts</p> {/* 🟢 Added subtitle */}

        <div className="input-group"> {/* 🟢 New styling wrapper */}
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button disabled={isLoading} className="auth-btn">
          {isLoading ? "Logging in..." : "Login"}
        </button>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
