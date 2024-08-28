'use client'
import React,{useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Core() {

    useEffect(() => {
        AOS.init();
    },[])
    return(
        <div class="mt-20 xl:mt-72">
            <div class="wrapper flex items-center align-center justify-center flex-col">
                <h4 
                    data-aos="fade-down" data-aos-anchor-placement="center-center" data-aos-easing="ease-in-out" data-aos-duration="800"
                    class="text-slate-900 dark:text-white font-bold">OUR CORE</h4>
                <h2 
                    data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-easing="ease-in-out" data-aos-duration="800"
                    class="text-slate-900 dark:text-white text-5xl text-center xl:text-6xl">
                make crypto spending simple
                and accessible for <b>everyone.</b>
                </h2>
            </div>
        </div>
    )
}