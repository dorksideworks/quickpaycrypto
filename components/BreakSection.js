'use client'
import React,{useEffect, useRef, useState} from "react";
import anime from 'animejs';

export default function BreakSection () {

    const speed = 100;
    const offset = 100;

    const card1 = useRef(null);
    const card2 = useRef(null);
    const card3 = useRef(null);
    const card4 = useRef(null);
    const card5 = useRef(null);
    const card_container = useRef(null)
    const [listening, setListening] = useState(false);
    
    const animation = anime.timeline({loop:0,autoplay:false, duration: 5000});

    
    function handleScroll () {
        animation.seek(-1 * (animateOnScroll(card_container) * animation.duration ));
    }

    const animateOnScroll = (div, speed = 3000, offset = 0) =>{
        const scrollp  = document.documentElement.scrollTop;
        const containerY = div.current.offsetTop;
        const scrollpercent = scrollp - containerY;
        // console.log((scrollpercent + offset) /speed)
        return (scrollpercent + offset) / speed;
    }
    
    useEffect(() => {
        animation.add({
            targets: '.break-card',
            direction: 'normal',
            top: 2000,
            easing: 'easeOutCubic',
            delay: anime.stagger(200)
        })

        if (typeof window !== "undefined") {
            window.addEventListener('scroll',handleScroll);
          }
          
        
        return () => {
            window.removeEventListener('scroll',handleScroll)
        }

    });

    return(
        <div class="wrapper break-wrapper" ref={card_container} >
            <img src="break/card-1.png" ref={card1} class="break-card break-card-1 w-1/2 absolute duration-100" />
            <img src="break/card-2.png" ref={card2} class="break-card break-card-2 w-1/2 absolute duration-100" />
            <img src="break/card-3.png" ref={card3} class="break-card break-card-3 w-1/2 absolute duration-100" />
            <img src="break/card-4.png" ref={card4} class="break-card break-card-4 w-1/2 absolute duration-100" />
            <img src="break/card-5.png" ref={card5} class="break-card break-card-5 w-1/2 absolute duration-100" />

        </div>
    )
}