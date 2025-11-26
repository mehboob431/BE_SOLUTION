import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header({ showBackButton = false }) {
  const router = useRouter();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
            ShopApp
          </Link>
          {showBackButton && (
            <button
              onClick={() => router.push('/')}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              ← Back to Home
            </button>
          )}
        </div>
      </div>
    </header>
  );
}