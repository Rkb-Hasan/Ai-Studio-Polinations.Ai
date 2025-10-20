import { useState } from "react";

import { GenerationContext } from "../context";
import useModels from "../hooks/useModels";

export default function GenerationProvider({ children }) {
  const [results, setResults] = useState([]);

  const newId = crypto.randomUUID();
  const fetchImage = async (prompt, options) => {
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      prompt
    )}?width=${options.width}&height=${options.height}&seed=${
      options.seed
    }&model=${options.model}`;

    try {
      const newItem = {
        imgId: crypto.randomUUID(),
        loading: true,
        loadingMessage: "Fetching the image...",
        imgUrl: null,
        imageError: "",
      };

      // to show the updated nine values
      setResults((prev) => [...prev.slice(-8), newItem]);
      const response = await fetch(url, { signal: AbortSignal.timeout(50000) });

      if (!response.ok) {
        const errorMessage = `Generating Image Failed ${response.status}`;
        throw new Error(errorMessage);
      }

      const imageBlob = await response.blob();
      const responseUrl = URL.createObjectURL(imageBlob);

      setResults((prev) =>
        prev.map((item) =>
          item.imgId === newId ? { ...item, imgUrl: responseUrl } : item
        )
      );
    } catch (err) {
      // also throws error for Abortsignal.timeout(); errorname is Timeouterror
      setResults((prev) =>
        prev.map((item) =>
          item.imgId === newId ? { ...item, imageError: err.message } : item
        )
      );
    } finally {
      setResults((prev) =>
        prev.map((item) =>
          item.imgId === newId
            ? { ...item, loading: false, loadingMessage: "" }
            : item
        )
      );
    }
  };
  // generate the models and pass
  const { modelLoading, models } = useModels();
  return (
    <GenerationContext.Provider
      value={{ fetchImage, results, modelLoading, models }}
    >
      {children}
    </GenerationContext.Provider>
  );
}
