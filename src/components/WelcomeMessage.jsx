export default function WelcomeMessage({ message }) {
  return (
    <h2 className="text-4xl font-bold mt-8 mb-8 flex items-center gap-3">
      {message}
      <span className="text-3xl">👋</span>
    </h2>
  );
}
