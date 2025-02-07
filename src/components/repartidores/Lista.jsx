import { getAllRepartidores } from "@/lib/data";
import { CircleX, Eye } from "lucide-react";
import Link from "next/link";
import RepartidorEliminar from "./Eliminar";
import RepartidorModificar from "./Modificar";

async function ListaRepartidores() {
    const repartidores = await getAllRepartidores();
  return (
    <>
      <h1 className="text-3xl font-bold mt-10">LISTA DE REPARTIDORES</h1>

      <table className="table-auto w-full mt-5 border-collapse border shadow-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Nombre</th>
            <th className="px-4 py-2 border">Telefono</th>
            <th className="px-4 py-2 border">...</th>
          </tr>
        </thead>
        <tbody>
          {repartidores.map((repartidor) => (
            <tr
              key={repartidor.id}
              className="border hover:bg-purple-100 hover:text-black"
            >
              <td className="border px-4 py-2">{repartidor.nombre}</td>
              <td className="border px-4 py-2">{repartidor.telefono}</td>
              <td className="border px-4 py-2 text-center flex flex-col items-center gap-3">
              <Link
                  className="flex gap-4  px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                  href={`/repartidores/${repartidor.id}`}
                >
                  <Eye />
                </Link>
                <RepartidorEliminar id={repartidor.id} />
                <RepartidorModificar repartidor={repartidor} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {repartidores.length === 0 && (
        <div className="flex mt-4 gap-4">
          <CircleX className="animate-pulse" />
          NO HAY DATOS PARA MOSTRAR <CircleX className="animate-pulse" />
        </div>
      )}
    </>
  );
}

export default ListaRepartidores;
