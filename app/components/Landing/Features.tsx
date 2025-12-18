import { ChartNoAxesCombined, Check, Radio } from "lucide-react";
import { Varela_Round } from "next/font/google";

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

function Features() {
  return (
    <div
      className={`min-h-screen bg-[#151516] flex flex-col items-center ${varela.className}`}
    >
      <div className="flex gap-5 items-center justify-between mt-30 w-full px-50">
        <div className="flex items-center gap-5">
          <Radio
            className="rounded-full bg-[#a8480448] p-[0.5rem] stroke-[#FF6500]"
            size={43}
          />{" "}
          <p className="text-[1.5rem] font-extrabold mt-[0.2rem] text-neutral-300">
            Real-Time Typing Races
          </p>
        </div>
        <div className="w-[40rem] text-2xl text-neutral-400 leading-[2.5rem] flex flex-col ">
          <div className="flex items-center gap-3 text-[1.1rem]">
            <Check className="stroke-green-800" />
            <p>Race against real people in real time</p>
          </div>
          <div className="flex items-center gap-3 text-[1.1rem]">
            <Check className="stroke-green-800" />
            <p>Every participant types the same text, with live progress</p>
          </div>
          <div className="flex items-center gap-3 text-[1.1rem]">
            <Check className="stroke-green-800" />
            <p>
              No delays, no fake sync — what you see is exactly what’s
              happening.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse gap-5 items-center justify-between mt-30 w-full px-50">
        <div className="flex items-center gap-5">
          <ChartNoAxesCombined
            className="rounded-full bg-[#a8480448] p-[0.5rem] stroke-[#FF6500]"
            size={43}
          />{" "}
          <p className="text-[1.5rem] font-extrabold mt-[0.2rem] text-neutral-300">
            Advanced Typing Analytics
          </p>
        </div>
        <div className="w-[40rem] text-2xl text-neutral-400 leading-[2.5rem] flex flex-col ">
          <div className="flex items-center gap-3 text-[1.1rem]">
            <Check className="stroke-green-800" />
            <p>KeyRace doesn’t just show your WPM and call it a day</p>
          </div>
          <div className="flex items-center gap-3 text-[1.1rem]">
            <Check className="stroke-green-800" />
            <p>Every session is broken down into accuracy, raw speed, error patterns</p>
          </div>
          <div className="flex items-center gap-3 text-[1.1rem]">
            <Check className="stroke-green-800" />
            <p>
              You know exactly why you’re fast or slow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
