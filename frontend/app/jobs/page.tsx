import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/75" />
      </div>

      <div className="max-w-md mx-auto p-5">
        <div className="mb-6">
          <Link href="/" className="text-sm text-white/80 hover:text-white underline underline-offset-4">
            ← Back to Dashboard
          </Link>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
          <h1 className="text-xl font-semibold">Jobs</h1>
          <p className="mt-2 text-sm text-white/70">
            Placeholder screen wired to route. Replace with full module UI.
          </p>
        </div>
      </div>
    </div>
  );
}
