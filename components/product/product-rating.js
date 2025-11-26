export default function ProductRating({ rating }) {
  const rate = Math.round(rating?.rate || 0);
  const count = rating?.count || 0;
  const displayRate = rating?.rate || 0;

  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <span className="text-gray-700 font-medium">Rating: </span>
        <span className="ml-2 text-yellow-500">
          {'★'.repeat(rate)}
          {'☆'.repeat(5 - rate)}
        </span>
        <span className="ml-2 text-gray-600">
          ({displayRate}/5) - {count} reviews
        </span>
      </div>
    </div>
  );
}
