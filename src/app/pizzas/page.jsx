import PizzaInsertar from "@/components/pizzas/Insertar";
import ListaPizzas from "@/components/pizzas/Lista";
import { Home } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function Pizzas() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-5">
        <Link
          className="flex gap-3 m-auto text-blue-500 hover:text-blue-700"
          href="/"
        >
          <Home /> <b>IR AL INICIO</b>
        </Link>

        <PizzaInsertar />
        
        <Suspense
          fallback={
            <div className="skeleton h-60 mt-10 w-full text-center">
              CARGANDO DATOS DE LOS PIZZAS
            </div>
          }
        >
          <ListaPizzas />
        </Suspense>
      </div>
    </>
  );
}

export default Pizzas;