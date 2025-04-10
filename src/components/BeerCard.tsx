"use client";
import { Beer } from "@/types/beer";
import Image from "next/image";

interface Props {
  beer: Beer;
  onAdd: (name: string) => void;
}

export default function BeerCard({ beer, onAdd }: Props) {
  return (
    <div className="rounded-2xl border shadow-sm p-4 flex gap-2">
      <Image
        src={
          "https://media.istockphoto.com/id/2162511659/photo/glass-of-lager-ready-for-the-customer.jpg?s=2048x2048&w=is&k=20&c=wLb_vgmTmcj8Hk6jRc1lzc2nkxUG317mbz2hZJT1qAI="
        }
        alt={beer.name}
        className="object-cover rounded-xl"
        width={100}	
        height={60}
      />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold">{beer.name}</h3>
          <p className="text-sm text-gray-500">
            {beer.type} - {beer.alcohol}% - IBU {beer.bitterness}
          </p>
          <p className="text-sm text-gray-500">Vaso: {beer.glass}</p>
          <p className="font-semibold">${beer.price}</p>
        </div>
        <button
          className="w-full bg-black text-white py-2 rounded-xl mt-2 disabled:opacity-50 hover:opacity-50"
          onClick={() => onAdd(beer.name)}
          disabled={beer.quantity === 0}
        >
          {beer.quantity === 0 ? "Agotado" : "Agregar"}
        </button>
      </div>
    </div>
  );
}
