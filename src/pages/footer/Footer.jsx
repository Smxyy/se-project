import { BsGithub, BsTelegram, BsFacebook } from "react-icons/bs";
export default function Footer(){
    return(
        <footer className="bg-primary">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="grid grid-cols-4 gap-24 content-evenly">
                    <div>
                        <a href="#" className="flex items-center -ml-6 -mt-4">
                            <img src="../../src/assets/logo.png" className="h-24" alt="Readoria Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap">Readoria</span>
                        </a>
                        <p className="mt-0 text-small text-start text-black">Readoria is a unique digital haven for book lovers, offering an extensive library of stories, educational resources, and immersive reading experiences.</p>
                    </div>
                    <div>
                        <h3 className="mb-6 mt-1 text-2xl font-Poppins font-h2 text-tertiary uppercase">INFORMATION</h3>
                        <div className="grid grid-cols-2">
                            <div>
                                <ul className="text-black font-body text-body">
                                    <li>
                                        <a href="/shop/kid" className="hover:underline">Kid</a>
                                    </li>
                                    <li className="mt-4">
                                        <a href="/shop/documentary" className="hover:underline">Documentary</a>
                                    </li>
                                    <li className="mt-4">
                                        <a href="/shop/mystery" className="hover:underline ">Mystery</a>
                                    </li>
                                    <li className="mt-4">
                                        <a href="/shop/thriller" className="hover:underline">Thriller</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="text-black font-body text-body ml-4">
                                    <li>
                                        <a href="/shop/romance" className="hover:underline ">Romance</a>
                                    </li>
                                    <li className="mt-4">
                                        <a href="/shop/fantasy" className="hover:underline text-nowrap">Fantasy</a>
                                    </li>
                                    <li className="mt-4">
                                        <a href="/shop/textbook" className="hover:underline text-nowrap">Textbook</a>
                                    </li>
                                    <li className="mt-4 ms-1">
                                        <a href="/shop/fiction" className="hover:underline text-nowrap">Fiction</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ml-10">
                        <h2 className="mb-6 mt-1 text-2xl font-Poppins font-h2 text-tertiary uppercase">Services</h2>
                        <div className="grid grid-cols-2">
                            <div>
                                <ul className="text-black font-body text-body">
                                    <li>
                                        <a href="/contact" className="hover:underline">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ml-8">
                        <h2 className="mb-6 mt-1 text-2xl font-Poppins font-h2 text-tertiary uppercase">Subscribe</h2>
                        <ul className="flex space-x-4 text-black font-medium text-h2">
                            <li className="mb-4">
                                <a href="#" className="hover:text-tertiary"><BsFacebook/></a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-tertiary"><BsGithub/></a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-tertiary"><BsTelegram/></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="text-center">
                    <span className="text-small text-gray-500">©Readoria 2024, All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
}