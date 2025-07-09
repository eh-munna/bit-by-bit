import { Outlet, ScrollRestoration } from 'react-router';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  return (
    <>
      <ScrollRestoration />
      <Header />

      <main className="container py-6 min-h-screen px-4 max-w-7xl mx-auto">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
