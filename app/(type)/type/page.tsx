import Navbar from "@/app/components/Landing/Navbar";
import RandomWord from "./RandomWord";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function page() {
  return (
    <div className="bg-[#1F1F1F] h-screen flex flex-col items-center justify-center gap-20">
      <Navbar />
      <RandomWord />
    </div>
  );
}

export default page;
