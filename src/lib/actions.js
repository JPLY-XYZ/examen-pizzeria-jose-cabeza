'use server'

import { revalidatePath } from "next/cache";
import prisma from "./prisma";

// REPARTIDOR

async function insertarRepartidor(formData) {
    await prisma.repartidor.create({
        data: {
            nombre: formData.get('nombre'),
            telefono: formData.get('telefono')
        }
    });
    revalidatePath('/repartidores');
}

async function modificarRepartidor(formData) {
    await prisma.repartidor.update({
        where: { id: +formData.get('id') },
        data: {
            nombre: formData.get('nombre'),
            telefono: formData.get('telefono')
        }
    });
    revalidatePath('/repartidores');
}

async function eliminarRepartidor(formData) {
    await prisma.repartidor.delete({
        where: { id: +formData.get('id') }
    });
    revalidatePath('/repartidores');
}

// PEDIDO

async function insertarPedido(formData) {
    await prisma.pedido.create({
        data: {
            fechaHora: new Date(formData.get('fechaHora')),
            nombreCliente: formData.get('nombreCliente'),
            direccionCliente: formData.get('direccionCliente'),
            repartidorId: formData.get('repartidorId') ? +formData.get('repartidorId') : null
        }
    });
    revalidatePath('/pedidos');
}

async function modificarPedido(formData) {
    await prisma.pedido.update({
        where: { id: +formData.get('id') },
        data: {
            fechaHora: new Date(formData.get('fechaHora')),
            nombreCliente: formData.get('nombreCliente'),
            direccionCliente: formData.get('direccionCliente'),
            repartidorId: formData.get('repartidorId') ? +formData.get('repartidorId') : null
        }
    });
    revalidatePath('/pedidos');
}

async function eliminarPedido(formData) {
    await prisma.pedido.delete({
        where: { id: +formData.get('id') }
    });
    revalidatePath('/pedidos');
}

// PIZZA

async function insertarPizza(formData) {
    await prisma.pizza.create({
        data: {
            nombre: formData.get('nombre'),
            precio: parseFloat(formData.get('precio'))
        }
    });
    revalidatePath('/pizzas');
}

async function modificarPizza(formData) {
    await prisma.pizza.update({
        where: { id: +formData.get('id') },
        data: {
            nombre: formData.get('nombre'),
            precio: parseFloat(formData.get('precio'))
        }
    });
    revalidatePath('/pizzas');
}

async function eliminarPizza(formData) {
    await prisma.pizza.delete({
        where: { id: +formData.get('id') }
    });
    revalidatePath('/pizzas');
}

export {
    insertarRepartidor, modificarRepartidor, eliminarRepartidor,
    insertarPedido, modificarPedido, eliminarPedido,
    insertarPizza, modificarPizza, eliminarPizza
};
