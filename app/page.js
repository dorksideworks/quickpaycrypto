import Image from "next/image";
import Hero from '@/components/Hero';
import Core from '@/components/Core';
import Mission from '@/components/Mission';
import Features from '@/components/Features';
import ShareSteps from "@/components/ShareSteps";
import CTA from "@/components/CTA";
import Navigator from "@/components/Navigator";
import BreakSection from "@/components/BreakSection";
export default function Home() {

  return (
    <main className="" class="overflow-hidden w-100 dark:bg-slate-900 duration-500">
      <Navigator/>
      <Hero/>
      <Core/>
      <Mission/>
      <Features/>
      <ShareSteps/>
      <BreakSection/>
      {/* <div class="break z-10">
        <img src="cards.png" class="z-10" />
      </div>   */}

      <CTA/>

    </main>
  )
}
