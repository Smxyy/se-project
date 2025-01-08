import { useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";

export default function SignUp(){
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          setError("Passwords do not match");
        } else {
          setError("");
          console.log("Form submitted successfully!");
        }
      };

    return (
        <section className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="w-[35%] p-4 bg-primary flex items-center justify-center">
            <div className="bg-white shadow-none rounded p-4 pb-8 max-w-lg w-full">
                <div className="flex justify-center">
                    <img
                    src="src/assets/logo.png"
                    alt="Readoria Logo"
                    className="h-32"
                    />
                </div>
                <h2 className="text-center text-h2 font-Poppins text-black mb-2">
                    SIGN UP
                </h2>
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="text"
                            className="block text-small font-medium text-black"
                        >
                            Full Name: <span className="text-secondary">*</span>
                        </label>
                        <input
                            type="text"
                            id="text"
                            placeholder="Full Name"
                            className="mt-1 block w-full text-sm px-3 py-3 border border-primary rounded-lg shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-small font-medium text-black"
                        >
                            Email Address: <span className="text-secondary">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email Address"
                            className="mt-1 block w-full text-sm px-3 py-3 border border-primary rounded-lg shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-small font-medium text-black"
                        >
                            Password: <span className="text-secondary">*</span>
                        </label>
                        <div className="relative">
                            <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="mt-1 block w-full text-sm px-3 py-3 border border-primary rounded-lg shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-body cursor-pointer text-black"
                            >
                                {showPassword ? <BsEye/> : <BsEyeSlash/>}
                            </button>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-small font-medium text-black"
                        >
                            Confirm Password: <span className="text-secondary">*</span>
                        </label>
                        <div className="relative">
                            <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                            className="mt-1 block w-full text-sm px-3 py-3 border border-primary rounded-lg shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                            />
                            <button
                                type="button"
                                onClick={toggleConfirmPasswordVisibility}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-body cursor-pointer text-black"
                            >
                                {showConfirmPassword ? <BsEye/> : <BsEyeSlash/>}
                            </button>
                        </div>
                    </div>
                    {/* alert error status message */}
                    {error && <p className="text-red-500 text-sm mb-6">{error}</p>} 
                    <button
                        type="submit"
                        onSubmit={handleSubmit}
                        className="w-full text-small font-OpenSans bg-secondary text-white py-2.5 rounded-lg hover:bg-primary hover:text-tertiary focus:outline-none focus:border-none focus:ring-2 focus:ring-primary"
                        >
                        Sign Up
                    </button>
                </form>
                <p className="text-center text-black text-small mt-6">
                    Don’t Have An Account Yet?{" "}
                    <a href="/signin" className="text-secondary hover:text-primary text-small hover:underline">
                        Sign In
                    </a>
                </p>
            </div>
        </div>
        </section>
    );
}