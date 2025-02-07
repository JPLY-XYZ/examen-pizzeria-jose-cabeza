import { modificarRepartidor } from "@/lib/actions";

function RepartidorModificar({repartidor}) {
  return (
    <form
      action={modificarRepartidor}
      className="flex flex-col items-center justify-center mt-5 gap-3 p-5 border rounded shadow-lg"
    >
      <fieldset>MODIFICAR REPARTIDOR</fieldset>
      <input type="hidden" name="id" defaultValue={repartidor.id} />
      <input
        required
        className="border p-2 rounded w-full text-black"
        name="nombre"
        defaultValue={repartidor.nombre}
        placeholder="Nombre"
        pattern="[A-Za-z ]{3,}"
        title="El nombre debe tener al menos 3 letras"
      />
      <input
        required
        className="border p-2 rounded w-full text-black"
        name="telefono"
        defaultValue={repartidor.telefono}
        placeholder="Telefono"
        pattern="[0-9]{9}"
        title="El telefono debe tener 9 numeros"
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Modificar
      </button>
    </form>
  );
}

export default RepartidorModificar;
