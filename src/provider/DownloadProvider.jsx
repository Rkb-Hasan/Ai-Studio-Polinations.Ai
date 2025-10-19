import { useState } from "react";
import { DownloadContext } from "../context";

export default function DownloadProvider({ children }) {
  const [downloads, setDownloads] = useState([]);

  return (
    <DownloadContext.Provider value={{ downloads, setDownloads }}>
      {children}
    </DownloadContext.Provider>
  );
}
