import React from "react";

export default function Hero() {


    return (
        <div class="relative">
            <div class="hero-image-container flex flex-col content-between align-center justify-center items-center">

                <div class="hero-tag relative top-0 bg-white shadow-lg shadow-slate-300 p-5 z-40 flex flex-row justify-between gap-2 rounded-lg align-center 
                    md:scale-125 md:top-20 md:-left-28
                ">

                    <div class="image-container rounded-md bg-slate-900 shrink-0 flex items-center justify-center">
                        <img class="w-100" src="Hero/qpc-icon.png" />
                    </div>

                    <div class="text-slate-900">
                        <h2 class="text-md font-bold">Easy Tap-to-Pay</h2>
                        <p class="text-xs">You have successfully topped up
                        your QuickPayCrypto Card!</p>
                    </div>
                </div>
             
                <div class="flex flex-col align-center justify-center relative">

                    <div class="absolute top-48 left-64 scale-90 rotate-12 flex items-center justify-center z-50 duration-500
                        xl:top-24 xl:-left-44 xl:scale-125 
                        md:-left-0 md:top-12
                    ">
                        <h3 class="absolute text-3xl text-white z-20 text-center font-bold"> NO <br/> FEES</h3>
                        <img class="z-10" src="hero-shape-02.png"/>
                    </div>

                    <img class="z-10 absolute scale-150 md:scale-150 xl:scale-150 " src="hero-cards.png" />
                    <img class="z-0 " src="eclipse-bg-hero.png"/>

                    <div class="absolute bottom-72 -rotate-12 flex items-center justify-center z-30
                        xl:bottom-28 xl:scale-125 duration-500 xl:-right-44
                        md:bottom-24 md:-right-5

                    ">
                        <h3 class="absolute text-3xl text-white z-20 text-center font-bold"> NO <br/> LIMIT </h3>
                        <img class="z-10" src="hero-shape-01.png"/>
                    </div>
                </div>

                <div class="hero-tag relative bg-white shadow-lg shadow-slate-300 p-5 z-30 flex flex-row justify-between gap-2 rounded-lg items-center
                    md:scale-125 md:bottom-28 md:-right-28
                ">

                    <div class="image-container rounded-md bg-slate-900 shrink-0 flex items-center justify-center">
                        <img class="w-100" src="Hero/qpc-icon.png" />
                    </div>

                    <div class="text-slate-900">
                        <h2 class="text-md font-bold">TOP-UP SUCCESSFUL</h2>
                        <p class="text-xs">You have successfully topped up
                        your QuickPayCrypto Card!</p>
                    </div>
                </div>

                <h1 class="text-slate-900 text-5xl text-center z-50 mt-5"> give your crypto <b>superpowers.</b></h1>

            </div>
        </div>
    )

}