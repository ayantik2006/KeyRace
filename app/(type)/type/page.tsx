import Navbar from "@/app/components/Landing/Navbar";
import RandomWord from "./RandomWord";

function page() {
  return (
    <div className="bg-[#1F1F1F] min-h-screen h-fit flex flex-col items-center justify-center gap-20 overflow-auto">
      <Navbar />
      <div className="h-fit">
        <RandomWord />
      </div>
    </div>
  );
}

export default page;
