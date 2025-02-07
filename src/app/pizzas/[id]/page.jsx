
import ItemPizza from "@/components/pizzas/Item";
import { Undo2 } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

async function PaginaPizza({ params }) {
  const { id } = await params;
  return (
    <div className="container mx-auto p-4">
      <Link
        className="flex gap-3 items-center text-blue-500 hover:text-blue-700"
        href="/pizzas"
      >
        <Undo2 /> <b>IR ATRAS</b>
      </Link>
      <Suspense
        fallback={
          <div className="skeleton h-32 w-full mt-4">
            CARGANDO DATOS DEL PIZZA
          </div>
        }
      >
        <ItemPizza id={id} />
      </Suspense>
    </div>
  );
}

export default PaginaPizza;