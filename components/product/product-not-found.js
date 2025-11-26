import { useRouter } from 'next/router';
import Button from '../ui/button';

export default function ProductNotFound() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="mb-6">
            <svg
              className="mx-auto h-24 w-24 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the product you're looking for. It may have been removed or the link might be incorrect.
          </p>
          <Button
            onClick={() => router.push('/')}
            variant="primary"
            size="lg"
          >
            Go back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
