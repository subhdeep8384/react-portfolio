import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
    return(


        <nav className="mx-10 mb-20 flex items-center justify-between py-6 text-white  ">
        <div className="flex flex-shrink-0 item-center ">
            <h1 className=" text-4xl flex items-center justify-between">SP</h1>
        </div>

        <div className="m-7 flex items-center justify-center gap-4 text-3xl text-white">
            <a href="https://www.linkedin.com/in/shubhodeep-pal-945b15293/" target="_blank"><FaLinkedin/></a>
            <a href="https://github.com/subhdeep8384" target="_blank"><FaGithub/></a>
            <a href="https://www.instagram.com/subhdeep6969/" target="_blank"><FaInstagram/></a>
            <a href="https://x.com/subhdeeppal7" target="_blank"><FaSquareXTwitter/></a>
        </div>
    </nav>


    )
    
};
export default NavBar ;