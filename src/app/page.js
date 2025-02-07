import { Pizza, SendToBack, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-4xl font-bold mb-8">GESTION DE LA PIZZERIA</h1>
      <h2 className="text-1xl font-bold mb-8">HECHO POR JPLY-XYZ</h2>
      <div className="space-y-4">
        <Link className=" flex gap-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" href="/repartidores">REPARTIDORES <Truck /></Link>
        <Link className="flex gap-4  px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700" href="/pedidos">PEDIDOS <SendToBack /></Link>
        <Link className="flex gap-4  px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700" href="/pizzas"> PIZZAS <Pizza /></Link>
      </div>
    </div>
  );

}
