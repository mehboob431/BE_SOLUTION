import Head from 'next/head';
import Header from './layout/header';
import Footer from './layout/footer';

export default function Layout({ children, title, description, showBackButton = false }) {
  return (
    <>
      <Head>
        <title>{title || 'Next.js Product App'}</title>
        <meta name="description" content={description || 'Discover amazing products'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header showBackButton={showBackButton} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}