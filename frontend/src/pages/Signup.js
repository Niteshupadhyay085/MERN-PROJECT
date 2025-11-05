// import {useState} from "react";
// import { useSignup } from "../hooks/useSignup";



// const Signup = () =>{
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const{signup, error, isLoading} = useSignup()

//     const handleSubmit = async (e) =>{
//         e.preventDefault()

//         // console.log(email, password)
//         await signup(email, password)
//     }


//     return(
//         <form className="signup" onSubmit={handleSubmit}>
//             <h4>Sign Up</h4>

//             <label>Email:</label>
//             <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />

//       <label>Password:</label>
//             <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />


//       <button disabled= {isLoading}>Sign Up</button>
//       {error && <div className="error">{error}</div>}
//         </form>
//     )
// }

// export default Signup;


import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { FaEnvelope, FaLock } from "react-icons/fa"; // 🟢 Added icons

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signup, error, isLoading } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, password);
    };

    return (
        <div className="auth-container"> {/* 🟢 Wrapper for center alignment */}
            <form className="auth-form signup" onSubmit={handleSubmit}>
                <h2>Create an Account 🏋️‍♂️</h2> {/* 🟢 Updated heading */}
                <p className="subtitle">Join Workout Buddy to track your fitness</p> {/* 🟢 Subtitle */}

                <div className="input-group">
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
                        placeholder="Create a password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <button disabled={isLoading} className="auth-btn">
                    {isLoading ? "Signing up..." : "Sign Up"}
                </button>

                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
};

export default Signup;
