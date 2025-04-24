import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(null);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setError('');

        signInUser(email, password)
            .then((res) => {
                console.log(res.user);
                navigate(location?.state?.from)
            })
            .catch((error) => {
                setError(error.message);
            })
    }
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(res => {
                navigate(location?.state?.from)
            })
    }
    return (
        <div className="hero min-h-[80vh]">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                        </div>
                        {/* password */}
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
                            <div onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute top-12 right-4">
                                {
                                    showPassword ? <FaEyeSlash /> : <FaEye />
                                }
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-indigo-500 text-white hover:bg-indigo-600">Login</button>
                        </div>
                    </form>
                    <button onClick={handleGoogleLogin} className="btn btn-accent w-fit text-white ml-4 mb-3">google login</button>
                    {error && (
                        <p className="text-red-500 text-sm pl-3">
                            {error.match(/\(auth\/(.*)\)/)?.[1]?.replaceAll('-', ' ')}
                        </p>
                    )}
                    <p className="pb-3 pl-3 font-light">New to this website? please <Link to="/register">Register</Link> </p>
                </div>
            </div>
        </div>
    )
}
export default Login;