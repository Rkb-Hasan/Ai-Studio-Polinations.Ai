import { useContext } from "react";
import { GenerationContext } from "../../context";
import ImageCard from "../ImageCard";

export default function Result() {
  const { imgUrl, imageError, imageLoading } = useContext(GenerationContext);
  console.log(imageLoading, imageError);
  return (
    <div>
      <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {imageLoading.state ? (
          <p>{imageLoading.message || imageError}</p>
        ) : (
          <ImageCard imgUrl={imgUrl}></ImageCard>
        )}
      </div>
    </div>
  );
}
