import React from "react";
import Image from 'next/image';
import Logo from '../public/ASSETS/quickpaycrypto-logo.svg';
import LogoLight from '../public/ASSETS/quickpaycrypto-logo-light.svg';

export default function Footer () {

    return (
        <div class="bg-slate-900 pt-10">
            <div class="wrapper py-5">

                <div class="flex flex-row justify-between">
                    <ul class="text-white flex flex-row gap-5">
                        <li>CARD</li>
                        <li>FAQ</li>
                        <li>BECOME AN AFFILIATE</li>
                        <li>CONTACT</li>
                    </ul>

                    <div class="socials">

                    </div>
                </div>

                <hr class="mt-20 mb-20"/>

                <div class="flex flex-row justify-between">
                    <div class="text-white">© 2024 QuickPayCrypto. All rights reserved.</div>
                    <Image 
                        priority
                        src={LogoLight}
                        alt="quickpay crypto logo"
                        height={25}
                    />
                    <ul class="text-white flex flex-row gap-5">
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}