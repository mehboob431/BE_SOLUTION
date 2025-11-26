export default function LoadingSpinner({ size = 'lg', fullScreen = false }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const containerClasses = fullScreen
    ? 'flex justify-center items-center min-h-screen'
    : 'flex justify-center items-center py-8';

  return (
    <div className={containerClasses}>
      <div className={`relative ${sizeClasses[size]}`}>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-primary-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-primary-600 rounded-full border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
}
