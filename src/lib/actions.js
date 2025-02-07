'use server'

import { revalidatePath } from "next/cache";
import prisma from "./prisma";

// REPARTIDOR

async function insertarRepartidor(prevState,formData) {
    await prisma.repartidor.create({
        data: {
            nombre: formData.get('nombre'),
            telefono: formData.get('telefono')
        }
    });
    revalidatePath('/repartidores');
    return { success: 'El repartidor se inserto Correctamente' }
}

async function modificarRepartidor(prevState,formData) {
    await prisma.repartidor.update({
        where: { id: +formData.get('id') },
        data: {
            nombre: formData.get('nombre'),
            telefono: formData.get('telefono')
        }
    });
    revalidatePath('/repartidores');
    return { success: 'El repartidor se modifico Correctamente' }
}

async function eliminarRepartidor(prevState,formData) {
    await prisma.repartidor.delete({
        where: { id: +formData.get('id') }
    });
    return { success: 'El repartidor se elimino Correctamente' }
}

// PEDIDO

async function insertarPedido(prevState,formData) {

    const pizzasID = await prisma.pizza.findMany( {select: { id: true }} )
    const connect = pizzasID.filter(e => formData.get(`pizza${e.id}`) !== null)

    await prisma.pedido.create({
        data: {
            fechaHora: new Date(formData.get('fechaHora')),
            nombreCliente: formData.get('nombreCliente'),
            direccionCliente: formData.get('direccionCliente'),
            repartidorId: formData.get('repartidorId') ? +formData.get('repartidorId') : null,
            pizzas: { connect }
        }
    });
    revalidatePath('/pedidos');
    return { success: 'El pedido se inserto Correctamente' }
}

async function modificarPedido(prevState,formData) {

    const pizzasID = await prisma.pizza.findMany( {select: { id: true }} )

    const connect = pizzasID.filter(e => formData.get(`pizza${e.id}`) !== null)
    const disconnect = pizzasID.filter(e => formData.get(`pizza${e.id}`) === null)


    await prisma.pedido.update({
        where: { id: +formData.get('id') },
        data: {
            fechaHora: new Date(formData.get('fechaHora')),
            nombreCliente: formData.get('nombreCliente'),
            direccionCliente: formData.get('direccionCliente'),
            repartidorId: formData.get('repartidorId') ? +formData.get('repartidorId') : null,
            pizzas: { 
                connect,
                disconnect
             }
        }
    });
    revalidatePath('/pedidos');
    return { success: 'El pedido se modifico Correctamente' }
}

async function eliminarPedido(prevState,formData) {
    await prisma.pedido.delete({
        where: { id: +formData.get('id') }
    });
    return { success: 'El pedido se elimino Correctamente' }
}

// PIZZA

async function insertarPizza(prevState,formData) {
    await prisma.pizza.create({
        data: {
            nombre: formData.get('nombre'),
            precio: parseFloat(formData.get('precio'))
        }
    });
    revalidatePath('/pizzas');
    return { success: 'La pizza se inserto Correctamente' }
}

async function modificarPizza(prevState,formData) {
    await prisma.pizza.update({
        where: { id: +formData.get('id') },
        data: {
            nombre: formData.get('nombre'),
            precio: parseFloat(formData.get('precio'))
        }
    });
    revalidatePath('/pizzas');
    return { success: 'La pizza se modifico Correctamente' }
}

async function eliminarPizza(prevState,formData) {
    await prisma.pizza.delete({
        where: { id: +formData.get('id') }
    });
    return { success: 'La pizza se elimino Correctamente' }
}

export {
    insertarRepartidor, modificarRepartidor, eliminarRepartidor,
    insertarPedido, modificarPedido, eliminarPedido,
    insertarPizza, modificarPizza, eliminarPizza
};
