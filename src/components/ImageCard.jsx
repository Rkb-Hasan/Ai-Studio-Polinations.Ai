import DownLoadIcon from "../assets/icons/DownLoadIcon";
import imageDemo from "../assets/images/ai-image-2.jpeg";
export default function ImageCard() {
  return (
    <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
      <DownLoadIcon></DownLoadIcon>
      <img
        src={imageDemo}
        alt="Anime character in kimono"
        className="w-full h-48 object-cover"
      />
    </div>
  );
}
