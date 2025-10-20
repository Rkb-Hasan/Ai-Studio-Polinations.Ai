import GenerationTools from "../components/generationTools/GenerationTools";
import Result from "../components/result/Result";
import WelcomeMessage from "../components/WelcomeMessage";

export default function CreateImagePage() {
  return (
    <main className="relative z-10">
      <WelcomeMessage message="Let's create a masterpiece, Rakib!"></WelcomeMessage>
      <GenerationTools></GenerationTools>
      <Result></Result>
    </main>
  );
}
