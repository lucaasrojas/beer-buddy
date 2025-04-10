"use client";
import { Beer } from "@/types/beer";
import { useParams } from "next/navigation";
import { useStore } from "@/context/store";
import { stock } from "@/lib/data";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BeerDetail() {
  const params = useParams();
  const { setTitle } = useStore();
  const [selectedBeer, setSelectedBeer] = useState<Beer | null>(null);

  useEffect(() => {
    const beer = stock.find(
      (beer) => beer.id.toString() === params.id
    ) as Beer;
    console.log(selectedBeer);	
    if(beer){
      	setSelectedBeer(beer);
    }
    setTitle("");
  },[params.id, setTitle])
if(!selectedBeer) return <p>Beer not found</p>
  return (
    <div className="h-screen">
      <div className="w-full h-[70vh]  -mt-20 -z-1 relative">
      <Image
        src={
          "https://media.istockphoto.com/id/2162511659/photo/glass-of-lager-ready-for-the-customer.jpg?s=2048x2048&w=is&k=20&c=wLb_vgmTmcj8Hk6jRc1lzc2nkxUG317mbz2hZJT1qAI="
        }
        alt={selectedBeer.name}
        className="object-cover h-[50vh]"
        layout="fill"
      />
      </div>

      <div className="-mt-8 bg-white rounded-t-2xl p-6 relative z-10 h-[30vh]">
        <h2 className="text-2xl font-bold mb-2">{selectedBeer.name}</h2>
        <p className="text-gray-700 mb-1">Tipo: {selectedBeer.type}</p>
        <p className="text-gray-700 mb-1">ABV: {selectedBeer.abv}%</p>
        <p className="text-gray-700 mb-1">IBU: {selectedBeer.ibu}</p>
        <p className="text-gray-700 mb-1">Vaso: {selectedBeer.glass}</p>
        <p className="text-lg font-semibold mt-2">Precio: ${selectedBeer.price}</p>
      </div>
    </div>
  );
}
