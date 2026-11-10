import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6 py-32 text-center bg-canvas">
      <div className="max-w-lg">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-900">404</p>
        <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
          Página no encontrada
        </h1>
        <p className="mt-4 text-neutral-600">
          La página que busca no existe o ya no está disponible.
        </p>
        <Link
          href="/"
          className="inline-flex mt-8 rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-950 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
