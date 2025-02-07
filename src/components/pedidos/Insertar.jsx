import { insertarPedido } from "@/lib/actions";

function PedidoInsertar() {
    return ( <form
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
       
       
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Insertar
        </button>
      </form> );
}

export default PedidoInsertar;
