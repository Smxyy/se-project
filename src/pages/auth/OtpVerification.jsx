import { useState } from "react";

export default function OtpVerification(){

    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if (element.nextSibling && element.value) {
        element.nextSibling.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);

        if (e.target.previousSibling) {
            e.target.previousSibling.focus();
        }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Entered OTP is ${otp.join("")}`);
    };

    return(
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
                <h2 className="text-center text-h2 font-Poppins text-black mb-2 uppercase">
                    OTP Verification
                </h2>
                <p className="text-center text-small text-black mb-8">
                    We Send You Email Please Check Your Mail And Complete OTP Code.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                    
                    <div className="flex justify-center gap-2 mb-6">
                        {otp.map((value, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={value}
                                onChange={(e) => handleChange(e.target, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="w-14 h-14 text-center font-OpenSans text-xl border-b-2 border-t-0 border-l-0 border-r-0 border-primary focus:ring-0 focus:border-none focus:outline-none focus:border-primary"
                            />
                        ))}
                    </div>
                    
                    </div>
                    <button
                        type="submit"
                        className="w-full text-small font-OpenSans bg-secondary text-white py-2.5 rounded-lg hover:bg-primary hover:text-tertiary focus:outline-none focus:border-none focus:ring-2 focus:ring-primary"
                    >
                        Verify
                    </button>
                </form>
                </div>
            </div>
        </section>
    );
}