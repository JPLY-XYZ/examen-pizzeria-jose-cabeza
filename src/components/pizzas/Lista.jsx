import { getAllPizzas } from "@/lib/data";
import { CircleX } from "lucide-react";

async function ListaPizzas() {
    const pizzas = await getAllPizzas();
  return (
    <>
      <h1 className="text-3xl font-bold mt-10">LISTA DE PIZZAS</h1>

      <table className="table-auto w-full mt-5 border-collapse border shadow-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Nombre</th>
            <th className="px-4 py-2 border">Precio</th>
            <th className="px-4 py-2 border">...</th>
          </tr>
        </thead>
        <tbody>
          {pizzas.map((pizza) => (
            <tr
              key={pizza.id}
              className="border hover:bg-purple-100 hover:text-black"
            >
              <td className="border px-4 py-2">{pizza.nombre}</td>
              <td className="border px-4 py-2">{pizza.precio}</td>
              <td className="border px-4 py-2 text-center flex flex-col items-center gap-3">
                ACCIONES
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {pizzas.length === 0 && (
        <div className="flex mt-4 gap-4">
          <CircleX className="animate-pulse" />
          NO HAY DATOS PARA MOSTRAR <CircleX className="animate-pulse" />
        </div>
      )}
    </>
  );
}

export default ListaPizzas;
