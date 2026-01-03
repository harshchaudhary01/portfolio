import React, { useState, useEffect } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { BiStopwatch } from "react-icons/bi";
import { IoIosRocket } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { IoTerminal } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import CornerBorder from '../components/CornerBorder';
import CalBooking from '../components/CalBooking';
// import GithubContribution from '../components/GithubContribution';

const TimeDisplay = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const milliseconds = now.getMilliseconds().toString().padStart(3, '0');

            const period = hours >= 12 ? 'PM' : 'AM';
            const formattedHours = hours % 12 || 12;

            setTime(`${formattedHours}:${minutes}:${seconds}:${milliseconds} ${period}`);
        };

        const interval = setInterval(updateTime, 100);
        return () => clearInterval(interval);
    }, []);

    return <div>{time}</div>;
};

const HomePage = () => {
    return (
        <div className='px-5'>
            {/* Profile_Section */}
            <div className='flex items-center justify-between'>
                <div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[#444444]'>Hey It's me </p>
                        <IoIosRocket />
                    </div>
                    <h1 className='text-white text-3xl font-bold'>Harsh Kumar Chaudhary</h1>
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center gap-2'>
                            <IoLocationOutline />
                            <p>Punjab, India</p>
                        </div>
                        <p>|</p>
                        <div className='flex items-center gap-2' >
                            <BiStopwatch />
                            <TimeDisplay />
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-27 w-27 rounded' src="src\assets\profile_picture.png" alt="profile_picture" />
                    <img className='h-30 w-40 rounded absolute top-0' src="src\assets\flower.png" alt="flower" />
                </div>
            </div>

            {/* Profile_Content */}
            <div className='text-[#8C8C8C] mt-6 leading-8'>
                <span>Yup! I'm a </span>
                <span className='text-white'>Full Stack Developer</span>
                <span> . Big deal, right? But wait... there's more! I'm not just any developer, </span>
                <span className='text-white'>I</span>
                <span> love building solutions and solving problems. I enjoy crafting websites with </span>
                <div className="items-baseline inline-flex  gap-1 text-white text-md">
                    <img className='h-5 w-5' src="src\assets\react.svg" alt="" />
                    <p>React</p>
                </div>
                <span>, </span>

                <div className="items-baseline inline-flex  gap-1 text-white text-md">
                    <img className='h-5 w-5' src="src\assets\typescript.svg" alt="" />
                    <p>Typescript</p>
                </div>

                <span>, </span>

                <div className="items-baseline inline-flex  gap-1 text-white text-md">
                    <img className='h-5 w-5' src="src\assets\next-js.svg" alt="" />
                    <p>Next.js</p>
                </div>

                <span>, </span>
                <div className="items-baseline inline-flex  gap-1 text-white text-md">
                    <img className='h-5 w-5' src="src\assets\MongoDB.svg" alt="" />
                    <p>MongoDB</p>
                </div>
                <span>, </span>

                <div className="items-baseline inline-flex  gap-1 text-white text-md">
                    <img className='h-5 w-5' src="src\assets\mysql.svg" alt="" />
                    <p>MySQL</p>
                </div>

                <span> databases and I live on the </span>
                <div className="items-center inline-flex  gap-1 text-white text-md">
                    <IoTerminal />
                    <p>Terminal</p>
                </div>
                <span> mostly.</span>
            </div>

            {/* Cal.com Booking Meeting */}
            <CalBooking />

            {/* Social Media Handles */}
            <div className='flex items-center gap-4 mt-5'>
                <button className='button inline-flex items-center'>
                    <BiSolidMessageDetail />
                    <p>LinkedIn DM</p>
                </button>
                <span className='text-xs rotate-340'>OR</span>
                <button className='button inline-flex items-center'>
                    <MdMarkEmailUnread />
                    <p>Email Me</p>
                </button>
                <span>|</span>
                <button className='button inline-flex items-center'>
                    <SiLeetcode />
                </button>
                <button className='button inline-flex items-center'>
                    <BsGithub />
                </button>
                <button className='button inline-flex items-center'>
                    <FaFileDownload />
                </button>
            </div>
        </div>
    )
}

export default HomePage