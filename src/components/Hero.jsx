import React, { useState } from 'react';
import MyLogo from '../assets/images/logo.jpg';
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import { FaMicrosoft, FaDigitalOcean } from 'react-icons/fa';




const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col md:flex-row justify-between items-center font-poppins gap-5 md:gap-20 px-5">
            {/* Left - Content */}
            <div className="text-center md:text-left">
            <h1 
  class="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-green-600 hover:text-red-600 hover:shadow-xl shadow-lg transition-all duration-300"
>
  BHAWANA BADUA
</h1>

                <h3 className="text-xl md:text-2xl font-semibold text-green-300 mb-4">
                    <Typewriter
                        options={{
                            strings: [
                                'Bachelor in Business Administration',
                                'Studying at Far-western university',
                                'from kanchanpur,NEPAL'
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 50, // Typing speed
                            deleteSpeed: 30, // Deletion speed
                            pauseFor: 2000, // Pause before looping
                        }}
                    />
                </h3>
                <p className="text-gray-400 leading-7 mb-6">
                i am a BBA student studying at Far-western university. i am passionate about my work and i am a self learner</p>
                <button 
                    onClick={() => setIsModalOpen(true)} 
                    className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 hover:scale-105 transform transition"
                >
                    About Me
                </button>
            </div>

            {/* Mid - Image */}
            <img 
                className="w-60 h-60 rounded-full border-4 border-gray-200 shadow-lg" 
                src={MyLogo} 
                alt="Developer" 
            />

            {/* Right - Social Icons */}
            <div className="flex flex-row md:flex-col items-center gap-5 text-gray-400">
                {/* Social Links */}
                <a 
                    href="https://www.linkedin.com/badubhawana" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-4xl hover:text-blue-600 cursor-pointer transition transform hover:scale-110"
                >
                    <TiSocialLinkedin />
                </a>
                <a 
                    href="https://www.facebook.com/profile.php?id=61557563996202" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-4xl hover:text-blue-500 cursor-pointer transition transform hover:scale-110"
                >
                    <TiSocialFacebookCircular />
                </a>
                <a 
                    href="https://www.instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-3xl hover:text-pink-500 cursor-pointer transition transform hover:scale-110"
                >
                    <SlSocialInstagram />
                </a>
                <a 
                    href="https://www.instagram.com/bhawana_badu?igsh=MTRydDl6cTcxb3VrdA==" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-3xl hover:text-blue-400 cursor-pointer transition transform hover:scale-110"
                >
                    <FaTwitter />
                </a>
                
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-900 text-white rounded-lg shadow-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 relative flex flex-col md:flex-row gap-8">
                        {/* Left - Information */}
                        <div className="flex-1">
                            <button 
                                onClick={() => setIsModalOpen(false)} 
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-4xl"
                            >
                                &times;
                            </button>
                            <h2 className="text-2xl font-bold mb-4">About Me</h2>
                            <p className="text-gray-300 mb-6">
                                I am a passionate BBA student. My core skills include:
                            </p>
                            <ul className="list-disc list-inside text-gray-400 mb-4">
                            <li className="flex items-center gap-2 text-blue-600 text-2xl"><FaMicrosoft /> MS Word</li>
    <li className="flex items-center gap-2 text-green-600 text-2xl"><FaMicrosoft /> MS Excel</li>
    <li className="flex items-center gap-2 text-red-600 text-2xl"><FaMicrosoft /> MS PowerPoint</li>
    <li className="flex items-center gap-2 text-yellow-500 text-2xl"><FaDigitalOcean /> Digital Marketing</li> 
</ul>


                            <p className="text-gray-300">
                                <strong>Education:</strong> Self-learning through YouTube and online resources.
                            </p>
                        </div>
                        {/* Right - Image */}
                        <div className="flex-1 flex justify-center items-center">
                            <img 
                                className="hidden sm:block w-60 h-60 rounded-full border-4 border-gray-200 shadow-lg" 
                                src={MyLogo} 
                                alt="BHAWANA BADUA" 
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hero; 