'use client'
import BeerList from "@/components/BeerList";
import { useStore } from "@/context/store";
import { useEffect } from "react";

export default function HomePage() {
  const { setTitle } = useStore();
  useEffect(() => {
    setTitle("Cervezas disponibles");
  });
  return (
    <main className="p-4 max-w-4xl mx-auto">
      <BeerList />
    </main>
  );
}
