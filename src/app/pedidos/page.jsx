import Modal from "@/components/modal";
import PedidoInsertar from "@/components/pedidos/Insertar";
import ListaPedidos from "@/components/pedidos/Lista";
import { getAllPizzas, getAllRepartidores } from "@/lib/data";
import { Home, Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function Pedidos() {

    
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-5">
        <Link
          className="flex gap-3 m-auto text-blue-500 hover:text-blue-700 mb-10"
          href="/"
        >
          <Home /> <b>IR AL INICIO</b>
        </Link>
        <Modal openElement={
          <h1 className="flex gap-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">AGREGAR PEDIDO NUEVO <Plus /></h1>
          }>
           <PedidoInsertar />     
        </Modal>
        
        <Suspense
          fallback={
            <div className="skeleton h-60 mt-10 w-full text-center">
              CARGANDO DATOS DE LOS PEDIDOS
            </div>
          }
        >
          <ListaPedidos />
        </Suspense>
      </div>
    </>
  );
}

export default Pedidos;
