import Image from "next/image";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <Navbar />

      {/* FOTO */}
      <Image
        src="/profile.jpg"
        alt="Profile"
        width={120}
        height={120}
        className="rounded-full mb-6 border-0 border-white shadow-lg"
      />

      {/* HERO */}
      <h1 className="text-4xl font-bold mb-2">Hellow, Namaku Ian</h1>
      <p className="text-purple-300 text-center max-w-md mb-12">
        Mahasiswa Informatika, Universitas Nahdlatul Ulama Yogyakarta
      </p>

      {/* ABOUT */}
      <h2 className="text-2xl font-semibold mb-2">About Me</h2>
      <p className="text-purple-300 text-center max-w-md mb-12">
        Aku mahasiswa semester 3 yang sangat tertarik dengan dunia web development.
      </p>

      {/* SKILLS */}
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="flex gap-6 text-4xl mb-16">
          <SiHtml5 size={40} color="#e51010ff" />
          <SiCss3 size={40} color="#2563EB" />         
          <SiJavascript size={40} color="#FACC15" />   
          <SiReact size={40} color="#22D3EE" />        
          <SiNextdotjs size={40} color="#d6ec30ff" />
          <SiTailwindcss size={40} color="#38BDF8" />  
        </div>

      {/* CONTACT */}
      <h2 className="text-2xl font-semibold mb-3">Contact</h2>
      <p className="text-gray-400 mb-4">Let’s build something together!</p>
      <a
        href="BerlianFatmar@gmail.com"
        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition"
      >
        Email Me
      </a>
    </main>
  );
}
