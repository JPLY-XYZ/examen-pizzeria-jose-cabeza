import { getAllPedidos } from "@/lib/data";
import { CircleX } from "lucide-react";

async function ListaPedidos() {
  const pedidos = await getAllPedidos();

  return (
    <>
      <h1 className="text-3xl font-bold mt-10">LISTA DE PEDIDOS</h1>

      <table className="table-auto w-full mt-5 border-collapse border shadow-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Fecha y hora</th>
            <th className="px-4 py-2 border">Cliente</th>
            <th className="px-4 py-2 border">Direccion</th>
            <th className="px-4 py-2 border">Repartidor</th>
            <th className="px-4 py-2 border">Pizzas</th>
            <th className="px-4 py-2 border">...</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr
              key={pedido.id}
              className="border hover:bg-purple-100 hover:text-black"
            >
              <td className="border px-4 py-2">
                {pedido.fechaHora.toLocaleString()}
              </td>
              <td className="border px-4 py-2">{pedido.nombreCliente}</td>
              <td className="border px-4 py-2">{pedido.direccionCliente}</td>
              <td className="border px-4 py-2">{pedido.repartidor.nombre}</td>
              <td className="border px-4 py-2">
                {pedido.pizzas.map((pizza) => pizza.nombre).join(", ")}
              </td>
              <td className="border px-4 py-2 text-center flex flex-col items-center gap-3">
                ACCIONES
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {pedidos.length === 0 && (
        <div className="flex mt-4 gap-4">
          <CircleX className="animate-pulse" />
          NO HAY DATOS PARA MOSTRAR <CircleX className="animate-pulse" />
        </div>
      )}
    </>
  );
}

export default ListaPedidos;
