import { getAllPizzas } from "@/lib/data";
import { CircleX, Eye, Pen, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import PizzaEliminar from "./Eliminar";
import PizzaModificar from "./Modificar";
import Modal from "../modal";
import PizzaInsertar from "./Insertar";

async function ListaPizzas() {
  const pizzas = await getAllPizzas();
  return (
    <>
      <h1 className="text-3xl font-bold mt-10">LISTA DE PIZZAS</h1>

      <Modal openElement={
                <h1 className="flex gap-4 px-4 py-2 bg-green-500 my-5 text-white rounded hover:bg-green-700">AGREGAR PIZZA NUEVO <Plus /></h1>
                }>
                <PizzaInsertar />   
              </Modal>

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
                <Link
                  className="flex gap-4  px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                  href={`/pizzas/${pizza.id}`}
                >
                  <Eye />
                </Link>
                <Modal openElement={<button className="flex gap-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"> <Trash2 /></button>}><PizzaEliminar id={pizza.id} /></Modal>
                <Modal openElement={<button className="flex gap-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700"> <Pen /></button>}><PizzaModificar pizza={pizza} /></Modal>

                
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
