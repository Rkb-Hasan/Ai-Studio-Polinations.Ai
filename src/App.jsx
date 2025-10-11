import GenerationTools from "./components/generationTools/GenerationTools";
import GlowBg from "./components/GlowBg";
import Header from "./components/Header";
import Result from "./components/result/Result";
import WelcomeMessage from "./components/WelcomeMessage";

export default function App() {
  return (
    <div className="container bg-[linear-gradient(135deg,#0f0f0f_0%,#1a0b2e_100%)] min-h-screen text-white mx-auto px-15 py-8 min-w-screen">
      <Header></Header>
      <GlowBg></GlowBg>
      <main class="relative z-10">
        <WelcomeMessage></WelcomeMessage>
        <GenerationTools></GenerationTools>
        <Result></Result>
      </main>
    </div>
  );
}
