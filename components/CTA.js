"use client"
import React from "react";

export default function CTA() {
    return (
        <div class=" qpc-bg-dark-blue px-10 py-24 rounded-tl-3xl rounded-tr-3xl overflow-hidden z-20 relative" >
            <div class="flex flex-col w-full xl:w-1/2 mx-auto ">

                <h3 class="text-gray-400 dark:text-white xl:text-3xl"> What are you waiting for?</h3>
                <h2 class="text-3xl text-qpc-orange mt-5 xl:mt-2 xl:text-6xl">Change the way you <b>crypto</b> </h2>

                <div class=" qpc-bg-dark mt-5 flex rounded-full xl:mt-14">
                    <form class="grow flex">
                    <input type="text" placeholder="Enter your Email Address" class="text-gray-400 outline-none xl:text-lg text-xs px-5 py-3 grow text-xl bg-transparent"/>
                    </form>
                    <button class="shrink-0 text-slate-900 font-bold px-4 xl:py-6 text-xs text-center rounded-tr-full rounded-br-full qpc-button-color">
                        JOIN WAITLIST    
                    </button>                    
                </div>
            </div>
        </div>
    )
}