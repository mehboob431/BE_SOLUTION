import LoadingSpinner from '../ui/loading-spinner';

export default function ProductLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" fullScreen={false} />
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
