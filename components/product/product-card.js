import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '../ui/button';

export default function ProductCard({ product }) {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative w-full h-64 bg-gray-200">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-gray-800">
          {product.title}
        </h3>
        <p className="text-2xl font-bold text-primary-600 mb-4">
          ${product.price.toFixed(2)}
        </p>
        <Button
          onClick={handleViewDetails}
          variant="primary"
          size="md"
          fullWidth={true}
        >
          View Details
        </Button>
      </div>
    </div>
  );
}
