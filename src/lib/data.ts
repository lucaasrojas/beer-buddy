import { Beer } from "@/types/beer";
import { Order } from "@/types/order";

export const stock: Beer[] = [
  {
    name: "Corona",
    type: "Lager",
    alcohol: 4.6,
    bitterness: 18,
    price: 115,
    glass: "Vaso Largo",
    image: "/images/corona.jpg",
    quantity: 2,
  },
  {
    name: "Quilmes",
    type: "Pilsner",
    alcohol: 4.9,
    bitterness: 20,
    price: 120,
    glass: "Jarra",
    image: "/images/quilmes.jpg",
    quantity: 0,
  },
  {
    name: "Club Colombia",
    type: "Dorada",
    alcohol: 4.7,
    bitterness: 16,
    price: 110,
    glass: "Copa",
    image: "/images/clubcolombia.jpg",
    quantity: 3,
  },
];

export let orders: Order[] = [];