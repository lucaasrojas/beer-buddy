"use client";
import { useState } from "react";
import { stock, orders } from "@/lib/data";
import { RoundItem } from "@/types/order";
import BeerCard from "./BeerCard";
import { useRouter } from "next/navigation";

export default function BeerList() {
  const router = useRouter();
  const [items, setItems] = useState<RoundItem[]>([]);

  const handleAdd = (name: string) => {
    setItems((prev) => {
      const found = prev.find((item) => item.name === name);
      if (found) {
        return prev.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { name, quantity: 1 }];
    });
  };

  const handleCreateOrder = () => {
    const now = new Date().toISOString();
    const subtotal = items.reduce((acc, item) => {
      const beer = stock.find((b) => b.name === item.name);
      return acc + (beer?.price || 0) * item.quantity;
    }, 0);

    const newOrder = {
      id: (orders.length + 1).toString(),
      created: now,
      paid: false,
      subtotal,
      taxes: 0,
      discounts: 0,
      items,
      rounds: [
        {
          created: now,
          items,
        },
      ],
    };

    orders.push(newOrder);
    router.push(`/order/${newOrder.id}`);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4">
        {stock.map((beer) => (
          <BeerCard key={beer.name} beer={beer} onAdd={handleAdd} />
        ))}
      </div>
      {items.length > 0 && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-sm px-4">
          <button
            className="w-full bg-green-600 text-white py-3 rounded-2xl shadow-xl text-lg"
            onClick={handleCreateOrder}
          >
            Finalizar Pedido ({items.reduce((acc, item) => acc + item.quantity, 0)} cervezas)
          </button>
        </div>
      )}
    </div>
  );
}