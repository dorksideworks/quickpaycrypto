'use client'
import React,{useEffect,useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ShareSteps () {

    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])

    return (
        <div class="bg-slate-900 rounded-tl-3xl rounded-tr-3xl overflow-hidden mt-20 relative z-40 py-24">
            <div class="wrapper flex flex-col xl:flex-row xl:justify-center xl:items-center">

                <div 
                    class="px-7">
                    <h3 data-aos="fade-down" data-aos-anchor-placement="center-center" data-aos-duration="800"class="sharesteps-title text-5xl xl:text-7xl "> Share to earn money</h3>
                    <p data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-duration="800" class="text-white mt-5 xl:text-3xl">You and your friend eachget BONU$ when they join QuickPayCrypto</p>
                </div>

                <div class="mt-10 shrink-1">

                    <ul class="text-gray-400 px-10 flex gap-5 flex-col mt-5 items-start">

                        <li 
                            data-aos="fade-right" data-aos-anchor-placement="center-center" data-aos-duration="800" data-aos-delay="100"
                            class="flex flex-row gap-5 align-center justify-center items-center">
                            
                            <div class="share-point rounded-full qpc-orange shrink-0 flex items-center justify-center">
                                <h3 class="text-white font-bold">1</h3>
                            </div>
                            
                            Use your personal code to share and invite your friends
                        </li>


                        <li 
                            data-aos="fade-right" data-aos-anchor-placement="center-center" data-aos-duration="800" data-aos-delay="200"
                            class="flex flex-row gap-5 align-center justify-center items-center">
                            
                            <div class="share-point rounded-full qpc-orange shrink-0 flex items-center justify-center">
                                <h3 class="text-white font-bold">2</h3>
                            </div>
                            
                            Share your code with friends by copying the URL or using the button below
                        </li>

                        <li 
                            data-aos="fade-right" data-aos-anchor-placement="center-center" data-aos-duration="800" data-aos-delay="300"
                            class="flex flex-row gap-5 align-center justify-center items-center">
                            
                            <div class="share-point rounded-full qpc-orange shrink-0 flex items-center justify-center">
                                <h3 class="text-white font-bold">3</h3>
                            </div>
                            
                            Each friend that signs up will earn BONU$ and you will receive BONU$ as well.
                        </li>

                        <li 
                            data-aos="fade-right" data-aos-anchor-placement="center-center" data-aos-duration="800" data-aos-delay="400"
                            class="flex flex-row gap-5 align-center justify-center items-center">
                            
                            <div class="share-point rounded-full qpc-orange shrink-0 flex items-center justify-center">
                                <h3 class="text-white font-bold">4</h3>
                            </div>
                            
                            You can invite as many friends you want!
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    )

}