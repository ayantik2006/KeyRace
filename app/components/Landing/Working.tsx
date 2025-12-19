import { Varela_Round } from "next/font/google";

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

function Working() {
  return (
    <div className="w-f bg-[#151516] items-center justify-center flex flex-wrap gap-3">
      <div className="items-center justify-center py-8 flex flex-wrap gap-3 overflow-hidden mx-2 px-5">
        <div
          className={`bg-neutral-900 w-fit px-7 py-3 ${varela.className} rounded-lg border-dashed border flex-wrap animate-bounce hover:scale-[1.05] duration-300 cursor-auto`}
        >
          No Signup required
        </div>
        <div
          className={`bg-neutral-900 w-fit px-7 py-3 ${varela.className} rounded-lg border-dashed border flex-wrap animate-bounce hover:scale-[1.05] duration-300 cursor-auto`}
        >
          Built for competitive typists
        </div>
        <div
          className={`bg-neutral-900 w-fit px-7 py-3 ${varela.className} rounded-lg border-dashed border flex-wrap animate-bounce hover:scale-[1.05] duration-300 cursor-auto`}
        >
          Real-time, not simulated
        </div>
        <div
          className={`bg-neutral-900 w-fit px-7 py-3 ${varela.className} rounded-lg border-dashed border flex-wrap animate-bounce hover:scale-[1.05] duration-300 cursor-auto`}
        >
          Designed for accuracy
        </div>
      </div>
    </div>
  );
}

export default Working;
