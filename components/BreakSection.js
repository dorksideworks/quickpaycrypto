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