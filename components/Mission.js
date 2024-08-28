"use client"
import React, {useEffect,useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Mission() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    },[])
    return(
        <div class="mt-48">
            <div class="wrapper flex items-center align-center justify-around flex-col lg:flex-row xl:flex-row-reverse">

                <div class="p-5">
                    <img 
                        data-aos="fade-left" data-aos-ancor-placement="bottom-bottom" data-aos-easing="ease-in-out" data-aos-duration="800"
                        src="Mission/qpc-01.png"/>
                </div>
                <div>

                    <h4 
                        data-aos="fade-down" data-aos-ancor-placement="bottom-bottom" data-aos-easing="ease-in-out" data-aos-duration="800"
                        class="text-slate-900 dark:text-white font-bold">
                        
                        OUR MISSION
                    </h4>
                    <h2 
                        data-aos="fade-up" data-aos-ancor-placement="bottom-bottom" data-aos-easing="ease-in-out" data-aos-duration="800"
                        class="text-slate-900 dark:text-white text-5xl text-center xl:text-left lg:text-left">
                        Instant crypto 
                        <br/>
                        <svg version="1.1" class="inline-block mr-5 fill-slate-900 dark:fill-white"  x="0px" y="0px" width="150px" height="50px"
                            viewBox="0 0 279 75" >
                            <g>
                                <path d="M240,74c0.2-0.2,0.9-0.2,0.1-0.7c-2.6-1.5-3.5-3.8-2.6-6.3c0.3-0.9,0.9-1.5,1.5-2.1c7.2-7.2,14.3-14.3,21.5-21.5
                                    c0.3-0.3,0.9-0.6,0.8-1c-0.2-0.5-0.9-0.3-1.3-0.3c-84.5,0-168.9,0-253.4,0c-2,0-3.9-0.2-5.3-1.9C0.7,39.5,0.5,38.7,0,38
                                    c0-0.8,0-1.5,0-2.2c1.3-3,3.6-3.9,6.7-3.9c84.2,0,168.5,0,252.7,0c0.7,0,1.3,0,1.9,0c0.2-0.6-0.2-0.7-0.4-0.9
                                    c-7.6-7.2-14.8-14.7-22.2-22c-2.8-2.8-2.1-6.4,1.3-8.3c0.3-0.2,0.7-0.3,0.9-0.7c0.6,0,1.2,0,1.8,0c1.4,0.5,2.6,1.2,3.7,2.3
                                    c10.8,11.1,22.4,21.5,32.6,33.2c0,1.2,0,2.3,0,3.5c-1,1.1-2,2.1-3,3.2c-9.6,9.6-19.2,19.2-28.9,28.9c-0.9,0.9-1.8,1.8-3,2.4
                                    c-0.3,0.1-0.4,0.3-0.2,0.6C242.7,74,241.3,74,240,74z"/>
                            </g>
                        </svg>

                        fiat <br/> <b>conversions.</b>
                    </h2>
                </div>

            </div>
        </div>
    )

} 