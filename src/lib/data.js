'use server'

import prisma from './prisma';

// Consultas para REPARTIDOR
async function getAllRepartidores() {
  return await prisma.repartidor.findMany();
}

async function getRepartidorById(id) {
  return await prisma.repartidor.findUnique({
    where: { id: Number(id) },
    include: { pedidos: true },
  });
}

// Consultas para PEDIDO
async function getAllPedidos() {
  return await prisma.pedido.findMany({
    include: {
      repartidor: true, 
      pizzas: true,     
    },
  });
}

async function getPedidoById(id) {
  return await prisma.pedido.findUnique({
    where: { id: Number(id) },
    include: {
      repartidor: true,
      pizzas: true,
    },
  });
}

// Consultas para PIZZA
async function getAllPizzas() {
  return await prisma.pizza.findMany();
}

async function getPizzaById(id) {
  return await prisma.pizza.findUnique({
    where: { id: Number(id) },
    include: { pedidos: true },
  });
}

export {
  getAllRepartidores,
  getRepartidorById,
  getAllPedidos,
  getPedidoById,
  getAllPizzas,
  getPizzaById,
};
