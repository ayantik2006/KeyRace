import Features from "./Features";
import Hero from "./Hero";
import Navbar from "./Navbar";

function Landing() {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 bg-[url('/grid.svg')]">
        <div
          className="absolute inset-0 pointer-events-none
  bg-[radial-gradient(ellipse_at_center,rgba(20,20,21,0)_0%,rgba(20,20,21,0.6)_65%,rgba(20,20,21,0.9)_100%)]
  [background-size:100%_100%]"
        />

        <div
          className="absolute inset-0 pointer-events-none
  bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),
      linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
  [background-size:40px_40px]"
        />
        <Navbar />
        <Hero />
      </div>

      <Features/>
    </div>
  );
}

export default Landing;
