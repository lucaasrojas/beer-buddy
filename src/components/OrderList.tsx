"use client";
import { useRouter } from "next/navigation";
import { orders } from "@/lib/data";

export default function OrderList() {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/order/${id}`);
  };

  return (
    <div className="grid gap-4">
      {orders.map((order) => (
        <div
          key={order.id}
          className="rounded-2xl p-4 shadow-md border cursor-pointer hover:bg-gray-50"
          onClick={() => handleClick(order.id)}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">Orden #{order.id}</p>
              <p className="text-sm text-gray-500">
                {order.paid ? "Pagada" : "Por pagar"}
              </p>
            </div>
            <p className="text-right font-bold">${order.subtotal}</p>
          </div>
        </div>
      ))}
    </div>
  );
}