import BeerList from "@/components/BeerList";

export default function HomePage() {
  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-poppins mb-4">Cervezas disponibles</h1>
      <BeerList />
    </main>
  );
}
