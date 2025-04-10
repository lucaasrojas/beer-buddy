"use client";
import type { Metadata } from "next";
import "@/app/globals.css";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useStore } from "@/context/store";
export const metadata: Metadata = {
  title: "Beer Buddy",
  description: "Order your drinks",
};
export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { title } = useStore();
  const showBackButton = title !== "Cervezas disponibles";
  const handleClick = () => {
    router.push(`/`);
  };
  return (
    <div>
      <div className="p-4 w-full flex items-center gap-4">
        {showBackButton && (
          <button
            className="rounded-lg bg-primary text-white flex items-center justify-center"
            style={{ height: 24, width: 24 }}
            onClick={() => handleClick()}
          >
            <ArrowLeft size={20} />
          </button>
        )}

        <h1 className="text-2xl font-poppins font-bold">{title}</h1>
      </div>
      {children}
    </div>
  );
}
