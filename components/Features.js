'use client'
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Features() {

    useEffect(()=> {
        AOS.init();
        AOS.refresh();
    },[])

    return(
        <div class="mt-36">
            <div class="wrapper px-5 ">
                <div class="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-4">

                    <div data-aos="fade-right" data-aos-duration="800" data-aos-anchor-placement="center-center"  class="rounded-2xl overflow-hidden">
                        <img src="Features/feature-01.png" class="object-cover w-100 h-full" />
                    </div>

                    <div class="grid grid-cols-1 gap-4">
                        <div 
                            data-aos="fade-left" data-aos-duration="800" data-aos-anchor-placement="center-center" data-aos-delay="100"
                            class="fb-01 py-8 bg-red-500 rounded-2xl px-5 text-2xl text-white overflow-hidden relative">

                                one-time fee, <br/> <b>no subscriptions</b> <br/>
                                <p class="text-gray-400 dark:text-white text-sm">(use it forever and it’s basically free!)</p>
                                <img 
                                    class="absolute -top-20 z-0 w-56 -right-10 object-cover"
                                    src="Features/feature-star-icon.png"/>
                        </div>

                        <div class="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-4">
                            <div 
                            data-aos="fade-right" data-aos-duration="800" data-aos-anchor-placement="center-center" data-aos-delay="200"
                            class="fb-03 py-8 bg-red-500 rounded-2xl px-5 text-2xl text-slate-900 dark:text-white overflow-hidden relative">

                                <b>Unlimited</b><br/>  Spending limit
                            </div>
                            <div 
                                data-aos="fade-left" data-aos-duration="800" data-aos-anchor-placement="center-center" data-aos-delay="300"
                                class="fb-04 py-8 bg-red-500 rounded-2xl px-5 text-2xl text-white overflow-hidden relative">

                            <b>Unlimited</b><br/>  Spending limit
                            </div>
                        </div>

                        <div 
                            data-aos="fade-left" data-aos-duration="800" data-aos-anchor-placement="center-center" data-aos-delay="400"
                            class="fb-02 py-8 bg-red-500 rounded-2xl px-5 text-2xl text-white overflow-hidden relative">

                                Crypto to cash<br/> in a <b>flash</b>
                                <img 
                                    class="absolute -top-12 z-0 w-56 -right-2 object-cover"
                                    src="Features/feature-flash-icon.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}