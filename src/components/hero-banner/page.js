import { Button } from "@/components/ui/button"; 


export default function HeroSection() {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(/background1.jpg)` }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex flex-col h-full pt-52 text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl font-semibold mt-12 mb-6">
          Power Your Life, Sustainably.<br />Harness the Sun.
        </h1>
        <p className="text-sm max-w-xl mb-8">
          Make a switch to solar and unlock a sustainable, cost-saving solution that effortlessly powers your home and
          lifestyle, reduces your bills, and contributes to a healthier planet for future generations.
        </p>
        <Button variant="solid" className="bg-black text-white hover:bg-gray-800 px-6 py-3 w-fit">
          Start Your Solar Journey →
        </Button>
      </div>
    </div>
  );
}
