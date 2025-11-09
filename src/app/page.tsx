import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import FoodGrid from '@/components/FoodGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <SearchBar />
        <FoodGrid />
      </main>
      <Footer />
    </>
  );
}