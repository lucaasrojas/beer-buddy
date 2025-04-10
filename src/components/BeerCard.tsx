"use client";
import { Beer } from "@/types/beer";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  beer: Beer;
  onAdd: (name: string) => void;
}

export default function BeerCard({ beer, onAdd }: Props) {
  const router = useRouter();
  const handleClickOnCard = () => {
    router.push(`/beer/${beer.id}`);
  }
  return (
    <div className="rounded-2xl flex gap-2" >
      <Image
        src={
          "https://media.istockphoto.com/id/2162511659/photo/glass-of-lager-ready-for-the-customer.jpg?s=2048x2048&w=is&k=20&c=wLb_vgmTmcj8Hk6jRc1lzc2nkxUG317mbz2hZJT1qAI="
        }
        alt={beer.name}
        className="object-cover rounded-xl hover:cursor-pointer"
        width={100}	
        height={60}
        onClick={() => handleClickOnCard()}
      />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <button onClick={() => handleClickOnCard()}><h3 className="text-lg font-bold" >{beer.name}</h3></button>
          <p className="text-sm text-text-secondary">
            {beer.type} - {beer.abv}% - IBU {beer.ibu}
          </p>
          <p className="text-sm text-text-secondary">Vaso: {beer.glass}</p>
          <p className="font-semibold text-text-secondary">${beer.price}</p>
        </div>
        <button
          className="w-full bg-primary text-white py-2 rounded-xl mt-2 disabled:opacity-50 hover:opacity-50"
          onClick={() => onAdd(beer.name)}
          disabled={beer.quantity === 0}
        >
          {beer.quantity === 0 ? "Agotado" : "Agregar"}
        </button>
      </div>
    </div>
  );
}
