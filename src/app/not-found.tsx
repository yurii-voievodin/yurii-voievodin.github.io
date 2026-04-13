import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-7xl font-bold text-zinc-100 mb-2">404</h1>
      <p className="text-xl text-zinc-400 mb-8">Page not found</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-violet-500 to-purple-500 text-white font-medium hover:from-violet-400 hover:to-purple-400 transition-all"
      >
        Go home
      </Link>
    </div>
  );
}
