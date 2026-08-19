import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-start justify-center px-5 py-32 sm:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl text-ink">Page not found</h1>
      <p className="mt-4 max-w-md text-ink-muted">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 text-accent underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:decoration-accent"
      >
        Back to home
      </Link>
    </main>
  );
}
