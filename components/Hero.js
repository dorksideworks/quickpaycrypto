'use client'
import React, {useRef, useEffect, useState} from "react";
import anime from 'animejs/lib/anime.es.js';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Hero() {


    const [mousePos, setMousePos] = useState({
        top: 0,
        left: 0
    })

    const [windowSize, setWindowSize] = useState({width: 0, height: 0})
    const [rotation, setRotation]  = useState({
        xrot: 0,
        yrot: 0
    })

    const base = 50;
    const ybase = 60;

    function handleMouseMove (ev) {

        setMousePos({left: ev.pageX, top: ev.pageY});
        let xhalf = windowSize.width/2;
        let yhalf = windowSize.height/2;
        setRotation({
            xrot: mousePos.left > windowSize.width/2 ? ((mousePos.left * (base / xhalf))/2) : -((xhalf - mousePos.left) * (base / xhalf)),
            yrot: mousePos.top > windowSize.height/2 ?  ((mousePos.top * (base / yhalf))/2) : -(((yhalf - mousePos.top) * (ybase / yhalf)))
        })

        // console.log(rotation.yrot);
        

        
        // console.log(mousePos);

    }   

    function getWindowsDimensions(window) {
        // const {innerWidth: width, innerHeight: height} = window;
        if(window ){
            const width = window.innerWidth;
        const height = window.innerHeight;
        return{width,height}
        }
    }

    useEffect(() => {
        AOS.init();

    }, [])


    useEffect(() => {

       if(window){


        setWindowSize(getWindowsDimensions(window))
        
        function handleResize() {
            setWindowSize(getWindowsDimensions(window ));
        }

        window.addEventListener('resize', handleResize());
        return () => window.removeEventListener('resize', handleResize);
        


       }

    },[mousePos.left, mousePos.top]);



    return (
        <div class="relative " onMouseMove={(ev) => handleMouseMove(ev)}>
            <div class="hero-image-container flex flex-col content-between align-center justify-center items-center">
                <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800" class=" hero-tag relative top-0 bg-white shadow-lg shadow-slate-300 p-5 z-40 flex flex-row justify-between gap-2 rounded-lg align-center 
                    md:scale-125 md:top-20 md:-left-28 floating-div
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
             
                <div class="flex flex-col align-center justify-center relative ">

                    <div 
                         data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="800"  
                         class="absolute top-48 left-64 scale-90 rotate-12 flex items-center justify-center z-20 duration-500
                        xl:top-24 xl:-left-44 xl:scale-125 
                        md:-left-0 md:top-12
                    ">
                        <h3 d class="absolute text-3xl text-white z-20 text-center font-bold"> NO <br/> FEES</h3>
                        <img class="z-10" src="hero-shape-02.png"/>
                    </div>

                    {/* <img class="hero-card-1 z-10 absolute -left-52 scale-90 duration-500" src="/Hero/Hero_1.png" style={{transform: `rotateY(${mousePos.left}deg) rotateX(${mousePos.top}deg)`}} /> */}
                    {/* <img class="hero-card-2 z-10 absolute -right-52 scale-90" src="/Hero/Hero_2.png" />  */}
                  
                    <img class="hero-card-1 z-10 absolute scale-50 duration-500 top-32 drop-shadow-2xl" src="/Hero/card-01.png" style={{transform: `rotateY(${Math.round(rotation.xrot)}deg) rotateX(${Math.round(rotation.yrot)}deg) rotateZ(5deg)  translate(-50px,-50px)`}} />
                    <img class="hero-card-2 z-10 absolute bottom-32 scale-50 duration-500 drop-shadow-xl" src="/Hero/card-02.png" style={{transform: `rotateY(${Math.round(rotation.xrot)}deg) rotateX(${Math.round(rotation.yrot)}deg) rotateZ(5deg)  translate(100px,50px)`}} />

                   
                    {/* <img class="z-10 absolute scale-150 md:scale-150 xl:scale-150 " src="hero-cards.png" /> */}
                    <img class="z-0 " src="eclipse-bg-hero.png"/>

                    <div  data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="800"  class="absolute bottom-72 -rotate-12 flex items-center justify-center z-30
                        xl:bottom-28 xl:scale-125 duration-500 xl:-right-44
                        md:bottom-24 md:-right-5

                    ">
                        <h3 class="absolute text-3xl text-white z-20 text-center font-bold"> NO <br/> LIMIT </h3>
                        <img class="z-10" src="hero-shape-01.png"/>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800"   class="hero-tag relative bg-white shadow-lg shadow-slate-300 p-5 z-30 flex flex-row justify-between gap-2 rounded-lg items-center
                    md:scale-125 md:bottom-28 md:-right-28 floating-div2
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

                <h1  data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800" data-aos-anchor-placement="center-center"
                class="text-slate-900 text-5xl text-center z-50 mt-5"> give your crypto <b>superpowers.</b></h1>

            </div>
        </div>
    )

}