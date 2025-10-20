import SearchIcon from "../../assets/icons/SearchIcon";
import SubmitIcon from "../../assets/icons/SubmitIcon";

export default function InputBox({ onInputPrompt, onGeneration, inputPrompt }) {
  return (
    <div className="relative mb-8 rounded-full overflow-hidden border border-zinc-700 bg-zinc-900/10 backdrop-blur-sm">
      <form onSubmit={onGeneration} className="flex items-center">
        <div className="pl-5 pr-2">
          <SearchIcon></SearchIcon>
        </div>
        <input
          onChange={(e) => onInputPrompt(e.target.value)}
          type="text"
          placeholder="Create with Prompts"
          className="outline-none w-full py-4 px-2 bg-transparent text-white placeholder-zinc-400 text-lg"
          value={inputPrompt}
        />

        <button
          onSubmit={onGeneration}
          className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 mr-1 rounded-full"
        >
          <SubmitIcon></SubmitIcon>
        </button>
      </form>
    </div>
  );
}
