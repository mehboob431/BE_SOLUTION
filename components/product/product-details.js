import Image from 'next/image';
import Button from '../ui/button';
import Badge from '../ui/badge';
import ProductRating from './product-rating';

export default function ProductDetails({ product, onAddToCart }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
          {/* Product Image */}
          <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>
              
              <div className="mb-6">
                <div className="mb-4">
                  <Badge variant="primary" size="md">
                    {product.category}
                  </Badge>
                </div>
                <p className="text-4xl font-bold text-primary-600 mb-4">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Description</h2>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              <ProductRating rating={product.rating} />
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={onAddToCart}
              variant="primary"
              size="lg"
              fullWidth={true}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
