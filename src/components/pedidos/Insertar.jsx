import { insertarPedido } from "@/lib/actions";

function PedidoInsertar({repartidores, pizzas}) {
  return (
    <form
      action={insertarPedido}
      className="flex flex-col items-center justify-center mt-5 gap-3 p-5 border rounded shadow-lg"
    >
      <fieldset>AÑADIR NUEVA PEDIDO</fieldset>
      <label className="flex items-center gap-2">
        <span>Fecha y Hora:</span>
        <input
          required
          className="border p-2 rounded w-full text-black"
          type="datetime-local"
          name="fechaHora"
          placeholder="Fecha y Hora"
          title="La fecha y hora del pedido"
        />
      </label>
      <input
        required
        className="border p-2 rounded w-full text-black"
        name="nombreCliente"
        placeholder="Nombre del cliente"
        title="El nombre del cliente"
      />
      <input
        required
        className="border p-2 rounded w-full text-black"
        name="direccionCliente"
        placeholder="Direccion del cliente"
        title="La direccion del cliente"
      />
      <label className="flex items-center gap-2">
        <span>Repartidor:</span>
        <select
          required
          className="border p-2 rounded w-full text-black"
          name="repartidorId"
        >
          <option value="">Seleccione un repartidor</option>
          {repartidores.map((repartidor) => (
            <option key={repartidor.id} value={repartidor.id}>
              {repartidor.nombre}
            </option>
          ))}
        </select>
      </label>
      <fieldset className="flex flex-wrap gap-2">
          <legend className="sr-only">Pizzas</legend>
          {pizzas.map((pizza) => (
            <label key={pizza.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                name={`pizza${pizza.id}`}
                value={pizza.id}
                className="border p-2 rounded text-black"
              />
              <span>{pizza.nombre}</span>
            </label>
          ))}
        </fieldset>

      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Insertar
      </button>
    </form>
  );
}

export default PedidoInsertar;
