import React from "react";

export default function ShareSteps () {

    return (
        <div class="bg-slate-900 rounded-tl-3xl rounded-tr-3xl overflow-hidden mt-20 py-24">
            <div class="wrapper flex flex-col ">
                <div class="px-7">
                    <h3 class="sharesteps-title text-5xl "> Share to earn money</h3>
                    <p class="text-white mt-5">You and your friend eachget BONU$ when they join QuickPayCrypto</p>
                </div>

                <div class="mt-10">

                    <ul class="text-gray-400 px-10 flex gap-5 flex-col mt-5 items-start">

                        <li class="flex flex-row gap-5 align-center justify-center items-center">
                            
                            <div class="share-point rounded-full qpc-orange shrink-0 flex items-center justify-center">
                                <h3 class="text-white font-bold">1</h3>
                            </div>
                            
                            Use your personal code to share and invite your friends
                        </li>


                        <li class="flex flex-row gap-5 align-center justify-center items-center">
                            
                            <div class="share-point rounded-full qpc-orange shrink-0 flex items-center justify-center">
                                <h3 class="text-white font-bold">2</h3>
                            </div>
                            
                            Share your code with friends by copying the URL or using the button below
                        </li>

                        <li class="flex flex-row gap-5 align-center justify-center items-center">
                            
                            <div class="share-point rounded-full qpc-orange shrink-0 flex items-center justify-center">
                                <h3 class="text-white font-bold">3</h3>
                            </div>
                            
                            Each friend that signs up will earn BONU$ and you will receive BONU$ as well.
                        </li>

                        <li class="flex flex-row gap-5 align-center justify-center items-center">
                            
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