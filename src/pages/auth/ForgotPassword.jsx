export default function ForgotPassword(){
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
                    Reset Password
                </h2>
                <p className="text-center text-small text-black mb-8">
                    Enter your email address and we'll send you an email with instructions to reset your password.
                </p>
                <form>
                    <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-small font-medium text-black"
                    >
                        Email Address <span className="text-secondary">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email Address"
                        className="mt-1 block w-full text-sm px-3 py-3 border border-primary rounded-lg shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                    </div>
                    <button
                        type="submit"
                        className="w-full text-small font-OpenSans bg-secondary text-white py-2.5 rounded-lg hover:bg-primary hover:text-tertiary focus:outline-none focus:border-none focus:ring-2 focus:ring-primary"
                    >
                        Reset Password
                    </button>
                </form>
                </div>
            </div>
        </section>
    );
}