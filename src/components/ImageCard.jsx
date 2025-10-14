import DownLoadIcon from "../assets/icons/DownLoadIcon";
export default function ImageCard({ imgUrl }) {
  return (
    <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
      <DownLoadIcon></DownLoadIcon>
      <img
        src={imgUrl}
        alt="Anime character in kimono"
        className="w-full h-48 object-cover"
      />
    </div>
  );
}
