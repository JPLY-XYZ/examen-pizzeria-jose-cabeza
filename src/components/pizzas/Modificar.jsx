import { modificarPizza } from "@/lib/actions";

function PizzaModificar({pizza}) {
    return ( <form
        action={modificarPizza} 
        className="flex flex-col items-center justify-center mt-5 gap-3 p-5 border rounded shadow-lg"
      >
        <fieldset>MODIFICAR PIZZA</fieldset>
        <input type="hidden" name="id" defaultValue={pizza.id} />
        <input
          required
          className="border p-2 rounded w-full text-black"
          name="nombre"
          defaultValue={pizza.nombre}
          placeholder="Nombre"
          title="El nombre de la pizza"
        />
        <input
          required
          className="border p-2 rounded w-full text-black"
          name="precio"
          defaultValue={pizza.precio}
          placeholder="Precio"
          type="number"
          step="0.01"
          title="El precio de la pizza"
        />
       
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Modificar
        </button>
      </form> );
}

export default PizzaModificar;
