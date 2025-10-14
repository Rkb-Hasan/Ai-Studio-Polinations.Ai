import GenerationTools from "../components/generationTools/GenerationTools";
import Result from "../components/result/Result";
import WelcomeMessage from "../components/WelcomeMessage";
import { GenerationProvider } from "../provider";

export default function CreateImagePage() {
  return (
    <GenerationProvider>
      <main className="relative z-10">
        <WelcomeMessage message="Let's create a masterpiece, Rakib!"></WelcomeMessage>
        <GenerationTools></GenerationTools>
        <Result></Result>
      </main>
    </GenerationProvider>
  );
}
