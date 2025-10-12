import { useState } from "react";
import GlowBg from "./components/GlowBg";
import Header from "./components/Header";
import CreateImagePage from "./pages/CreateImagePage";
import DownloadPage from "./pages/DownloadPage";

export default function App() {
  const [route, setRoute] = useState("create");

  return (
    <div className="container bg-[linear-gradient(135deg,#0f0f0f_0%,#1a0b2e_100%)] min-h-screen text-white mx-auto px-15 py-8 min-w-screen">
      <Header onRoute={setRoute} route={route}></Header>
      <GlowBg></GlowBg>
      {route === "create" && <CreateImagePage></CreateImagePage>}
      {route === "downloaded" && <DownloadPage></DownloadPage>}
    </div>
  );
}
