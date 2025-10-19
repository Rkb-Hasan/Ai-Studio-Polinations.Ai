import { useContext, useRef } from "react";
import DownLoadIcon from "../assets/icons/DownLoadIcon";
import { DownloadContext } from "../context";

export default function ImageCard({ imgUrl }) {
  const downloadRef = useRef(null);
  const { downloads, setDownloads } = useContext(DownloadContext);
  const downloaded = downloads?.find((item) => item.url === imgUrl);

  const handleDownload = () => {
    if (downloadRef.current) {
      downloadRef.current.href = imgUrl;
      downloadRef.current.download = imgUrl.split("/").pop() || "image.jpg";
      downloadRef.current.click();
      // dont add to downloads if already exists
      if (!downloaded) {
        setDownloads((prevDownloads) => [
          ...prevDownloads,
          {
            url: imgUrl,
            downloadId: prevDownloads?.length + 1,
          },
        ]);
      }
    }
  };

  return (
    <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
      <button
        onClick={handleDownload}
        className="absolute bottom-2 right-2  p-1 cursor-pointer"
      >
        <DownLoadIcon></DownLoadIcon>
      </button>
      <img
        src={imgUrl}
        alt="Anime character in kimono"
        className="w-full h-48 object-cover"
      />
      <a ref={downloadRef} style={{ display: "none" }}></a>
    </div>
  );
}
