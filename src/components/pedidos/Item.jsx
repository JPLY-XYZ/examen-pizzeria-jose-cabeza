import { getPedidoById } from "@/lib/data";

async function ItemPedido({ id }) {
  const pedido = await getPedidoById(id);

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 mt-4 max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Pedido con Id {pedido.id}
        </h1>
        <p className="text-lg text-gray-600 mb-2 text-center">
          <span className="font-semibold">Fecha y Hora:</span> {pedido.fechaHora.toLocaleString()}
        </p>
        <p className="text-lg text-gray-600 mb-2 text-center">
          <span className="font-semibold">Cliente:</span> {pedido.nombreCliente}
        </p>
        <p className="text-lg text-gray-600 mb-2 text-center">
          <span className="font-semibold">Direccion:</span> {pedido.direccionCliente}
        </p>
        <p className="text-lg text-gray-600 mb-2 text-center">
          <span className="font-semibold">Repartidor:</span> {pedido.repartidor.nombre}
        </p>
        <p className="text-lg text-gray-600 mb-2 text-center">
          <span className="font-semibold">Pizzas:</span> {pedido.pizzas.map((pizza) => pizza.nombre).join(", ")}
        </p>
      </div>
      
    </>
  );
}

export default ItemPedido;