import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold-400">
        404
      </span>
      <h1 className="mt-6 font-display text-4xl text-foreground md:text-5xl">
        This page could not be found.
      </h1>
      <p className="mt-4 max-w-md text-foreground-muted">
        The page you&apos;re looking for may have moved or no longer exists.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-gold-500 px-6 py-3 text-sm font-medium text-background"
      >
        Return Home
      </Link>
    </div>
  );
}
