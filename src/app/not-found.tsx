import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-7xl font-bold text-zinc-100 mb-2">404</h1>
      <p className="text-xl text-zinc-400 mb-8">Page not found</p>
      <Button href="/">Go home</Button>
    </div>
  );
}
