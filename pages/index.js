import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import Hero from '../components/home/hero';
import ProductsList from '../components/home/products-list';
import { getAllProducts } from '../services/api';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await getAllProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <Layout
      title="Home - Next.js Product App"
      description="Discover amazing products at great prices"
    >
      <Head>
        <meta property="og:title" content="Home - Next.js Product App" />
        <meta property="og:description" content="Discover amazing products at great prices" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <Hero />
        <ProductsList products={products} loading={loading} error={error} />
      </div>
    </Layout>
  );
}
