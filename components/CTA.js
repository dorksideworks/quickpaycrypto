import React from "react";

export default function CTA() {
    return (
        <div class="qpc-bg-dark-blue p-7 rounded-tl-3xl rounded-tr-3xl overflow-hidden">
            <div class="wrapper flex flex-col">
                <h3 class="text-gray-400"> What are you waiting for?</h3>
                <h2 class="text-3xl text-qpc-orange mt-5">Change the way you <b>crypto</b> </h2>

                <div class=" qpc-bg-dark mt-5 flex rounded-full">

                    <input type="text" placeholder="Enter your Email Address" class="text-gray-400 outline-none text-xs px-5 py-3 grow text-xl bg-transparent"/>
                    <button class="shrink-0 text-slate-900 font-bold px-4 text-xs text-center rounded-tr-full rounded-br-full qpc-button-color">
                        JOIN WAITLIST    
                    </button>                    
                </div>
            </div>
        </div>
    )
}