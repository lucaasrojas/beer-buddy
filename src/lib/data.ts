import { Beer } from "@/types/beer";
import { Order } from "@/types/order";

export const stock: Beer[] = [
  {
    id:1,
    name: "Corona",
    type: "Lager",
    abv: 4.6,
    ibu: 18,
    price: 115,
    glass: "Vaso Largo",
    image: "/images/corona.jpg",
    quantity: 2,
  },
  {
    id: 2,
    name: "Quilmes",
    type: "Pilsner",
    abv: 4.9,
    ibu: 20,
    price: 120,
    glass: "Jarra",
    image: "/images/quilmes.jpg",
    quantity: 0,
  },
  {
    id: 3,
    name: "Club Colombia",
    type: "Dorada",
    abv: 4.7,
    ibu: 16,
    price: 110,
    glass: "Copa",
    image: "/images/clubcolombia.jpg",
    quantity: 3,
  },
];

export let orders: Order[] = [];