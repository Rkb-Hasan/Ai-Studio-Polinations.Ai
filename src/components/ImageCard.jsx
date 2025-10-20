import { useContext, useRef } from "react";
import DownLoadIcon from "../assets/icons/DownLoadIcon";
import { DownloadContext } from "../context";

export default function ImageCard({ item }) {
  const { loading, loadingMessage, imgUrl, imageError } = item;
  const downloadRef = useRef(null);
  const { downloads, setDownloads } = useContext(DownloadContext);
  const downloaded = downloads?.find((item) => item.imgUrl === imgUrl);

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
            imgUrl,
            downloadId: prevDownloads?.length + 1,
          },
        ]);
      }
    }
  };

  if (imageError) {
    return <p>{imageError}</p>;
  }

  return (
    <>
      {loading ? (
        <p>{loadingMessage}</p>
      ) : (
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
      )}
    </>
  );
}
