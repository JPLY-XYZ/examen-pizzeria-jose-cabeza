'use client' 
import { insertarPizza } from "@/lib/actions";
import { useActionState, useEffect, useId } from "react";
import { toast } from "sonner";

function PizzaInsertar() {

  
  const formId = useId();

  const [state, action, pending] = useActionState(insertarPizza, {});

  useEffect(() => {
    if (state.success) {
      toast.success(state.success);
      document.getElementById(formId).closest('dialog')?.close() 
    }
  }, [state]);

    return ( <form
        action={action} id={formId}	
        className="flex flex-col items-center justify-center mt-5 gap-3 p-5 border rounded shadow-lg"
      >
        <fieldset>AÑADIR NUEVA PIZZA</fieldset>
        <input
          required
          className="border p-2 rounded w-full text-black"
          name="nombre"
          placeholder="Nombre"
          title="El nombre de la pizza"
        />
        <input
          required
          className="border p-2 rounded w-full text-black"
          name="precio"
          placeholder="Precio"
          type="number"
          step="0.01"
          title="El precio de la pizza"
        />
       
        <button disabled={pending} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Insertar
        </button>
      </form> );
}

export default PizzaInsertar;
