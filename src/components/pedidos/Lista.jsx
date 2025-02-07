import { getAllPedidos, getAllRepartidores } from "@/lib/data";
import { CircleX, Eye, Pen, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import PedidoEliminar from "./Eliminar";
import PedidoModificar from "./Modificar";
import Modal from "../modal";
import PedidoInsertar from "./Insertar";

async function ListaPedidos() {
  const pedidos = await getAllPedidos();
  const repartidores = await getAllRepartidores();

  return (
    <>
      <h1 className="text-3xl font-bold mt-10">LISTA DE PEDIDOS</h1>

      <Modal
        openElement={
          <h1 className="flex gap-4 my-5 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
            AGREGAR PEDIDO NUEVO <Plus />
          </h1>
        }
      >
        <PedidoInsertar repartidores={repartidores} />
      </Modal>

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
                <Link
                  className="flex gap-4  px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                  href={`/pedidos/${pedido.id}`}
                >
                  <Eye />
                </Link>
                <Modal
                  openElement={
                    <button className="flex gap-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                      {" "}
                      <Trash2 />
                    </button>
                  }
                >
                  <PedidoEliminar id={pedido.id} />
                </Modal>
                <Modal
                  openElement={
                    <button className="flex gap-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700">
                      {" "}
                      <Pen />
                    </button>
                  }
                >
                  <PedidoModificar repartidores={repartidores} pedido={pedido} />
                </Modal>
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
