
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
    const { createUser, manageProfile } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(null);
    const handleRegister = (e) => {
        e.preventDefault();
        setError('');
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conPassword = e.target.conPassword.value;
        console.log(name, image, email, password, conPassword);
        const redex = /[a-z]/;
        const redexUp = /[A-A]/;
        if (!redex.test(password)) {
            setError('Password must contain at last on lowercase letter')
        }
        if (redexUp.test(password)) {
            setError('Password must contain at last on uppercase letter')
        }
        if (password.length < 6) {
            setError('Password must contain at least 6 charactors')
        }

        if (password !== conPassword) {
            setError("Password didn't Match")
        }

        createUser(email, password)
            .then((res) => {
                manageProfile(name, image)
            })
    }
    return (
        <div className="hero min-h-[80vh]">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" />
                        </div>
                        {/* image */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" placeholder="Image" name="image" className="input input-bordered" required />
                        </div>
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
                        {/* con password */}
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} placeholder="confirm password" name="conPassword" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-indigo-500 text-white hover:bg-indigo-600">Register</button>
                        </div>
                    </form>
                    {error && <p className="text-red-500">{error}</p>}
                    <p className="pb-3 pl-3 font-light">Already have an account? please <Link to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Register;