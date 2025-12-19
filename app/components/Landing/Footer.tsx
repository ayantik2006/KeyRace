import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <div className="p-6 px-15 flex justify-between bg-black">
      <div className="text-neutral-400 text-[0.9rem]">KeyRace © 2025</div>
      <div className="flex gap-5 text-neutral-400">
        <Link href="https://github.com/ayantik2006/KeyRace" target="_blank" className="hover:text-white hover:scale-[1.1]">
          <Github className="size-[1.1rem]" />
        </Link>
        <Link href="https://www.linkedin.com/in/ayantiksarkar/" target="_blank" className="hover:text-white hover:scale-[1.1]">
          <Linkedin className="size-[1.1rem]" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
