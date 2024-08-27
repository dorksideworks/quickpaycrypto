'use client'
import React, {useState, useEffect} from "react";
import Image from 'next/image';
import Logo from '../public/ASSETS/quickpaycrypto-logo.svg';
import LogoLight from '../public/ASSETS/quickpaycrypto-logo-light.svg';

export default function Navigator() {
    const [nav,setNav] = useState(false);
    const [mode, setMode] = useState("light");

    function showNav() {
        setNav(nav? false : true)
    }

    function handleTheme() {
        setMode(mode=="light"?"dark" :"light");
    }

    useEffect(()=>{
        localStorage.setItem("theme", mode);
        document.querySelector("html").setAttribute("class", mode);
        
    }, [mode])

    return(
        <div class="nav flex z-50 ">

            {
                nav ? <div class="full-nav bg-slate-900 w-full h-full fixed w-screen z-50 flex flex-col duration-500">
                <div onClick={showNav} class="flex flex-row justify-end p-5">
                    <svg class="justify-self-end " idth="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="white"/>
                    </svg>
                </div>

                <ul class="flex flex-col text-white text-4xl text-center gap-7 mt-20
                    
                ">
                    <li>
                        CARD
                    </li>
                    <li>
                        FAQ
                    </li>
                    <li>
                        BECOME AN AFFILIATE
                    </li>
                    <li>
                        CONTACT
                    </li>
                    <li>
                        <svg class="inline qcp-bg-light-blue rounded-full overflow-hidden" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#F86249" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span class="inline qcp-text-dark-orange">Open an Account</span>
                    </li>
                </ul>

                <div class="text-white mt-20 px-10">
                    <h3 class="text-xl"> Stay up to date with </h3>
                    <h2 class="text-3xl"> QuickPayCrypto</h2>

                    <div class="flex flex-row justify-center align-center items-center mt-10 border-b-2 border-gray-300">

                        <input  class="py-4 grow bg-transparent outline-none" type="text" placeholder="YOUR EMAIL"/>
                        <button class="py-4 px-5">OK</button>
                    </div>
                </div>

                <div class="flex flex-row gap-5 items-center justify-center mt-20">
                    <div class="social qpc-orange p-3 rounded-full flex justify-center align-center">
                        <img src="Hero/qpc-icon.png"/>
                    </div>
                    <div class="social qpc-orange p-3 rounded-full flex justify-center align-center">
                        <img src="Hero/qpc-icon.png"/>
                    </div>
                    <div class="social qpc-orange p-3 rounded-full flex justify-center align-center">
                        <img src="Hero/qpc-icon.png"/>
                    </div>
                    <div class="social qpc-orange p-3 rounded-full flex justify-center align-center">
                        <img src="Hero/qpc-icon.png"/>
                    </div>
                </div>
                </div>   : ""
            }

            <div class="
                    wrapper grow flex flex-row relative align-center items-center justify-around
                    lg:justify-between lg:px-10
                    xl:justify-between 
                    grow
                     
                ">
                {/* <img src="quickpay-logo.png" class="h-6 shrink-0" /> */}
                <div class="qpc-logo relative">
                    {
                    <Image 
                        priority
                        src={mode=="light"? Logo : LogoLight}
                        alt="quickpay crypto logo"
                        height={25}
                    />
                    }

                </div>
                <div class="flex justify-center items-center align-center
                   hidden sm:hidden xl:block lg:block md:hidden
                ">
                    <ul class="flex flex-row gap-10 font-bold">
                        <li class="dark:text-white hover:text-violet-600 duration-500 cursor-pointer">CARD</li>
                        <li class="dark:text-white hover:text-violet-600 duration-500 cursor-pointer">FAQ</li>
                        <li class="dark:text-white hover:text-violet-600 duration-500 cursor-pointer">BECOME AN AFFILIATE</li>
                        <li class="dark:text-white hover:text-violet-600 duration-500 cursor-pointer"   >CONTACT</li>
                    </ul>
                </div>
                <div class=" flex align-center items-center justify-center gap-8
                        hidden xs:hidden sm:hidden md:hidden lg:flex xl:flex 
                ">
                   <div class=" flex align-center items-center justify-center gap-2 dark:text-white
                        hidden xs:hidden sm:hidden md:hidden lg:flex xl:flex">
                        <span class="bg-red-500 account-btn">

                            <svg class="p-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>   

                        </span> Open an Account
                   </div>
                   <div class="theme duration-500" onClick={handleTheme}>
                        {
                            mode == "light" ? <img src="sun.png"/> : <img src="moon.png" />
                        }
                   </div>
                </div>

                
                <div class="h-20 relative flex items-center justify-center align-center
                    sm:flex xl:hidden lg:hidden md:flex " onClick={showNav} >
                    <svg class="qpc-burger" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#000000"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}