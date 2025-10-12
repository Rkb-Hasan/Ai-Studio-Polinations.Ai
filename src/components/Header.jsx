import LWSLogo from "../assets/logo.svg";
export default function Header({ onRoute, route }) {
  return (
    <header className="flex items-center mb-12 justify-between">
      <div className="flex items-center">
        <img src={LWSLogo} className="h-10" />
      </div>
      <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
        <a
          onClick={() => onRoute("create")}
          href="#"
          className={`hover:text-zinc-200  font-medium cursor-pointer transition-all ${
            route === "create" && "text-zinc-200"
          }`}
        >
          Create Image
        </a>
        <a
          onClick={() => onRoute("downloaded")}
          href="#"
          className={`hover:text-zinc-200 font-medium cursor-pointer transition-all ${
            route === "downloaded" && "text-zinc-200"
          }`}
        >
          Downloaded
        </a>
      </ul>
    </header>
  );
}
