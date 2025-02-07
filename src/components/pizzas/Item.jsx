import { getPizzaById } from "@/lib/data";

async function ItemPizza({ id }) {
  const pizza = await getPizzaById(id);

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 mt-4 max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Pizza con Id {pizza.id}
        </h1>
        <p className="text-lg text-gray-600 mb-2 text-center">
          <span className="font-semibold">Nombre:</span> {pizza.nombre}
        </p>
        <p className="text-lg text-gray-600 mb-2 text-center">
          <span className="font-semibold">Precio:</span> {pizza.precio}
        </p>
      </div>
      
    </>
  );
}

export default ItemPizza;