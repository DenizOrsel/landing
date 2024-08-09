import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";

export default function Home() {
  const router = useRouter();

  const handleVersionAClick = () => {
    router.push("/versiona");
  };

  const handleVersionBClick = () => {
    router.push("/versionb");
  };

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-4">
        <button
          onClick={handleVersionAClick}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Version A
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </button>

        <button
          onClick={handleVersionBClick}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Version B
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </button>
      </div>
    </main>
  );
}
