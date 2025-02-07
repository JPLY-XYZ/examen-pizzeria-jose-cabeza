
import ItemRepartidor from "@/components/repartidores/Item";
import { Undo2 } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

async function PaginaRepartidor({ params }) {
  const { id } = await params;
  return (
    <div className="container mx-auto p-4">
      <Link
        className="flex gap-3 items-center text-blue-500 hover:text-blue-700"
        href="/repartidores"
      >
        <Undo2 /> <b>IR ATRAS</b>
      </Link>
      <Suspense
        fallback={
          <div className="skeleton h-32 w-full mt-4">
            CARGANDO DATOS DEL REPARTIDOR
          </div>
        }
      >
        <ItemRepartidor id={id} />
      </Suspense>
    </div>
  );
}

export default PaginaRepartidor;