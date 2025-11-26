import ProductCard from '../product/product-card';
import LoadingSpinner from '../ui/loading-spinner';

export default function ProductsList({ products, loading, error }) {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Featured Products
      </h2>

      {loading && <LoadingSpinner fullScreen={false} />}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center mb-8">
          {error}
        </div>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No products available at the moment.</p>
        </div>
      )}
    </section>
  );
}
