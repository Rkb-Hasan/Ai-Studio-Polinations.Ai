import ImageCard from "../components/ImageCard";
import WelcomeMessage from "../components/WelcomeMessage";

export default function DownloadPage() {
  return (
    <>
      <WelcomeMessage message="Downloaded"></WelcomeMessage>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <ImageCard></ImageCard>
      </div>
    </>
  );
}
