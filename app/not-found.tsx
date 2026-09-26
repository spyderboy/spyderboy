import Link from 'next/link';

export const metadata = { title: 'Not found — Spyderboy Studio' };

export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">404</p>
      <h1 className="text-2xl font-medium text-gray-900 mb-3">That page doesn&apos;t exist.</h1>
      <p className="text-sm text-gray-500 mb-6">Everything lives on one page here.</p>
      <Link href="/" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
        ← Back to spyderboy.com
      </Link>
    </main>
  );
}
