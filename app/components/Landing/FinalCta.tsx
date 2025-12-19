import { ChevronUp, Keyboard } from "lucide-react";
import { Varela_Round } from "next/font/google";

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

function FinalCta() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center pt-20 pb-30 bg-[#151516]">
      <h1 className={`text-[2rem] font-semibold ${varela.className} text-white`}>
        Ready to Race ?
      </h1>
      <div className="flex gap-3">
        <button className="bg-[#FF6500] px-5 py-2 rounded-lg font-semibold hover:opacity-90 hover:-translate-y-1 duration-300 cursor-pointer flex items-center gap-2 group [@media(max-width:862px)]:px-3 text-white">
          <Keyboard
            size={18}
            className="rotate-180 group-hover:rotate-0 duration-300 [@media(max-width:862px)]:size-4"
          />
          <p className="[@media(max-width:862px)]:text-[0.9rem]">
            Start Typing
          </p>
        </button>
        <button className="bg-neutral-800 px-5 py-2 rounded-lg font-semibold hover:opacity-90 hover:-translate-y-1 duration-300 cursor-pointer border border-neutral-700 flex items-center gap-2 group [@media(max-width:862px)]:px-3 text-white">
          <ChevronUp
            size={18}
            className="group-hover:rotate-90 duration-300 [@media(max-width:862px)]:size-4"
          />
          <p>Create Room</p>
        </button>
      </div>
    </div>
  );
}

export default FinalCta;
