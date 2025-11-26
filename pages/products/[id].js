import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../../components/layout';
import Toast from '../../components/ui/toast';
import ProductLoading from '../../components/product/product-loading';
import ProductNotFound from '../../components/product/product-not-found';
import ProductDetails from '../../components/product/product-details';
import { getAllProductIds, getProductById } from '../../services/api';

export default function ProductDetail({ product }) {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);

  if (router.isFallback) {
    return <ProductLoading />;
  }

  if (!product) {
    return (
      <Layout
        title="Product Not Found - Next.js Product App"
        description="The requested product could not be found"
        showBackButton={true}
      >
        <Head>
          <meta property="og:title" content="Product Not Found" />
          <meta property="og:description" content="The requested product could not be found" />
        </Head>
        <ProductNotFound />
      </Layout>
    );
  }

  const handleAddToCart = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <Layout
      title={`${product.title} - Next.js Product App`}
      description={product.description || 'Product details'}
      showBackButton={true}
    >
      <Head>
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
      </Head>

      <ProductDetails product={product} onAddToCart={handleAddToCart} />

      {/* Toast Notification */}
      <Toast
        message="✓ Added to cart successfully!"
        type="success"
        show={showToast}
        onClose={() => setShowToast(false)}
        duration={3000}
        position="bottom-right"
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const paths = await getAllProductIds();
    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.error('Error generating static paths:', error);
    return {
      paths: [],
      fallback: true,
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const product = await getProductById(params.id);
    
    return {
      props: {
        product,
      },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return {
      notFound: true,
    };
  }
}
