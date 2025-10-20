import { useContext, useState } from "react";
import { GenerationContext } from "../../context";
import AdditionalSettings from "./AdditionalSettings";
import InputBox from "./InputBox";

export default function GenerationTools() {
  const seed = crypto.randomUUID();

  const [inputPrompt, setInputPrompt] = useState("");

  const [settings, setSettings] = useState({
    width: 1024,
    height: 1024,
    model: "gptimage",
    seed,
  });

  const { fetchImage } = useContext(GenerationContext);
  const handleImageGeneration = (e) => {
    e.preventDefault();
    fetchImage(inputPrompt, settings);
    setInputPrompt("");
  };

  return (
    <>
      <InputBox
        onGeneration={handleImageGeneration}
        inputPrompt={inputPrompt}
        onInputPrompt={setInputPrompt}
      ></InputBox>
      <AdditionalSettings
        settings={settings}
        onSettings={setSettings}
      ></AdditionalSettings>
    </>
  );
}
