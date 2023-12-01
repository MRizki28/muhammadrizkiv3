import React from "react";

const Hero = () => {
    return (
        <div className="flex flex-col items-center sm:flex-row mb-12">
            <div className="mr-0 mb-6 sm:mr-6 sm:mb-0">
                <div className="w-64 h-64 rounded-full overflow-hidden">
                    <div className="">
                        <picture>
                            <img src="assets/rizki.jpeg" alt="" />
                        </picture>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center sm:items-center">
                <div className="flex flex-row text-center">
                    <h1 className="text-3xl mb-1 uppercase font-extrabold">
                        Muhammad Rizki
                    </h1>
                </div>
                <div className="mb-3 font-light text-gray-500 flex flex-row items-center">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="mr-1 w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    <span className="mr-14">Junior Software Developer</span>
                </div>
                <div className="mb-3 font-light">
                    <span className="ml-2 text-center sm:text-left mb-0">Use 80% php language repo on GitHub</span>
                </div>
                <div className="mb-3 font-light text-gray-500 flex flex-row items-center">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="mr-1 w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span className="mr-[110px]">Palu, Indonesian 🇮🇩</span>
                </div>
                <div className="mb-4">
                    <div className="mr-[90px]">
                        <ul className="flex flex-row flex-wrap">
                            <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                                <span className="inline-block bg-gray-200 rounded-sm px-2 py-1 text-xs font-normal last:mr-0">Full Stack</span>
                            </li>
                            <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                                <span className="inline-block bg-gray-200 rounded-sm px-2 py-1 text-xs font-normal last:mr-0">php</span>
                            </li>
                            <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                                <span className="inline-block bg-gray-200 rounded-sm px-2 py-1 text-xs font-normal last:mr-0">Laravel</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero