import { getRepartidorById } from "@/lib/data";

async function ItemRepartidor({ id }) {
  const repartidor = await getRepartidorById(id);

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 mt-4 max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Repartidor con Id {repartidor.id}
        </h1>
        <p className="text-lg text-gray-600 mb-2 text-center">
          <span className="font-semibold">Nombre:</span> {repartidor.nombre}
        </p>
        <p className="text-lg text-gray-600 mb-2 text-center">
          <span className="font-semibold">Telefono:</span> {repartidor.telefono}
        </p>
      </div>
      
    </>
  );
}

export default ItemRepartidor;