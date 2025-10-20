import { useContext } from "react";
import ImageCard from "../components/ImageCard";
import WelcomeMessage from "../components/WelcomeMessage";
import { DownloadContext } from "../context";

export default function DownloadPage() {
  const { downloads } = useContext(DownloadContext);
  console.log(downloads);
  return (
    <>
      <WelcomeMessage message="Downloaded"></WelcomeMessage>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {downloads.length > 0 ? (
          downloads.map((item) => (
            <ImageCard key={item.downloadId} item={item}></ImageCard>
          ))
        ) : (
          // <p>Khara error</p>
          <p>No Downloads yet</p>
        )}
      </div>
    </>
  );
}
