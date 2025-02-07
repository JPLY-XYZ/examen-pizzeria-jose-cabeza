import RepartidorInsertar from "@/components/repartidores/Insertar";
import ListaRepartidores from "@/components/repartidores/Lista";
import { Home } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function Repartidores() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-5">
        <Link
          className="flex gap-3 m-auto text-blue-500 hover:text-blue-700"
          href="/"
        >
          <Home /> <b>IR AL INICIO</b>
        </Link>

        <RepartidorInsertar />

        <Suspense
          fallback={
            <div className="skeleton h-60 mt-10 w-full text-center">
              CARGANDO DATOS DE LOS REPARTIDORES
            </div>
          }
        >
          <ListaRepartidores />
        </Suspense>
      </div>
    </>
  );
}

export default Repartidores;