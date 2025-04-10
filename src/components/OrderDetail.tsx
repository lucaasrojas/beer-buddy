"use client";
import { useParams } from "next/navigation";
import { orders } from "@/lib/data";
import { useStore } from "@/context/store";
import { useEffect, useState } from "react";
import { Order } from "@/types/order";

export default function OrderDetail() {
  const params = useParams();
  const {setTitle} = useStore()
  const [order,setOrder] = useState<Order>();

  useEffect(()=>{
    const id = params?.id as string;
    const selectedOrder = orders.find((o) => o.id === id);
    setOrder(selectedOrder as Order);
    setTitle(`Orden #${id}`)
  },[params.id, setTitle])
 
  if (!order) return <p className="p-4">Orden no encontrada</p>;

  return (
    <div className="p-4 space-y-4">
      <div className="space-y-2">
        {order.rounds.map((round, i) => (
          <div key={i} className="rounded-xl border p-4 shadow-sm">
            <p className="text-sm text-gray-500">Ronda {i + 1} - {round.created}</p>
            <ul className="mt-2 space-y-1">
              {round.items.map((item, idx) => (
                <li key={idx} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>x{item.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pt-4 border-t mt-4">
        <p>Subtotal: ${order.subtotal}</p>
        <p>Impuestos: ${order.taxes}</p>
        <p>Descuentos: ${order.discounts}</p>
        <p className="font-bold">Total: ${order.subtotal + order.taxes - order.discounts}</p>
      </div>
    </div>
  );
}
