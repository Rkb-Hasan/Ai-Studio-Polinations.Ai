import DownLoadIcon from "../../assets/icons/DownLoadIcon";
import imageDemo from "../../assets/images/ai-image-2.jpeg";
export default function Result() {
  return (
    <div>
      <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
          <DownLoadIcon></DownLoadIcon>
          <img
            src={imageDemo}
            alt="Anime character in kimono"
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
