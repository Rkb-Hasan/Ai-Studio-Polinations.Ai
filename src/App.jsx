import GlowBg from "./components/GlowBg";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="container bg-[linear-gradient(135deg,#0f0f0f_0%,#1a0b2e_100%)] min-h-screen text-white mx-auto px-20 py-8 min-w-screen">
      <Header></Header>
      <GlowBg></GlowBg>
    </div>
  );
}
