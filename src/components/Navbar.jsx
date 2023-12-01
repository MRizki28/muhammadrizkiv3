import React from "react";

const Navbar = () => {
    return (
        <header className="flex flex-row items-center px-6 sm:px-12 py-6">
            <div className="mr-6">
                <a aria-current="page" className="transition duration-200 ease-in-out flex flex-row items-center hover:text-red-700 font-extrabold text-sm tracking-widest uppercase" href="/">MRizki</a>
            </div>
            <nav>
                <ul className="flex flex-row">
                    <li className="ml-5">
                        <a aria-current="page" className="transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 uppercase text-xs font-bold" href="/">About</a>
                    </li>
                    <li className="ml-5">
                        <a aria-current="page" className="transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 uppercase text-xs font-bold" href="/">Project</a>
                    </li>
                    <li className="ml-5">
                        <a aria-current="page" className="transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 uppercase text-xs font-bold" href="/">Certificate</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar