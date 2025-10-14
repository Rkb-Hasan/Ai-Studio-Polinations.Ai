import { useState } from "react";

import { GenerationContext } from "../context";

export default function GenerationProvider({ children }) {
  const [imgUrl, setImgUrl] = useState(null);
  const [imageLoading, setImageLoading] = useState({
    state: false,
    message: "",
  });
  const [imageError, setImageError] = useState(null);

  const fetchImage = async (prompt, options) => {
    try {
      setImageLoading({ state: true, message: "Fetching the image..." });
      const response = await fetch(
        `https://image.pollinations.ai/prompt/${encodeURIComponent(
          prompt
        )}?width=${options.width}&height=${options.height}&seed=${
          options.seed
        }&model=${options.model}`
      );

      if (!response.ok) {
        const errorMessage = `Generating Image Failed ${response.status}`;
        throw new Error(errorMessage);
      }

      const imageBlob = await response.blob();
      setImgUrl(URL.createObjectURL(imageBlob));
    } catch (err) {
      setImageError(err);
    } finally {
      setImageLoading({ state: false, message: "" });
    }
  };

  return (
    <GenerationContext.Provider
      value={{ fetchImage, imgUrl, imageError, imageLoading }}
    >
      {children}
    </GenerationContext.Provider>
  );
}
