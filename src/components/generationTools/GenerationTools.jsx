import { useContext, useState } from "react";
import { GenerationContext } from "../../context";
import AdditionalSettings from "./AdditionalSettings";
import InputBox from "./InputBox";

export default function GenerationTools() {
  const seed = crypto.randomUUID();

  const [inputPrompt, setInputPrompt] = useState("");
  const [widthHeight, setWidthHeight] = useState({
    width: 1024,
    height: 1024,
  });
  const [settings, setSettings] = useState({
    width: widthHeight.width,
    height: widthHeight.height,
    model: "",
    seed,
  });

  const { fetchImage } = useContext(GenerationContext);
  const handleImageGeneration = () => {
    fetchImage(inputPrompt, settings);
  };
  return (
    <>
      <InputBox
        onGeneration={handleImageGeneration}
        onInputPrompt={setInputPrompt}
      ></InputBox>
      <AdditionalSettings
        onWidthHeight={setWidthHeight}
        settings={settings}
        onSettings={setSettings}
        widthHeight={widthHeight}
      ></AdditionalSettings>
    </>
  );
}
