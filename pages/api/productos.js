import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { search } = req.query; // Recibe el parámetro de búsqueda
    try {
      let productos;
      if (search) {
        productos = await prisma.producto.findMany({
          where: {
            OR: [
              { codigo: { contains: search } },
              { descripcion: { contains: search } },
            ],
          },
        });
      } else {
        productos = await prisma.producto.findMany();
      }
      res.status(200).json(productos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los productos' });
    }
  } else if (req.method === 'POST') {
    const { codigo, descripcion, proveedor, fechaVencimiento, ubicacionFisica, existenciaMinima } = req.body;
    try {
      const nuevoProducto = await prisma.producto.create({
        data: {
          codigo,
          descripcion,
          proveedor,
          fechaVencimiento: new Date(fechaVencimiento),
          ubicacionFisica,
          existenciaMinima: parseInt(existenciaMinima, 10),
        },
      });
      res.status(201).json(nuevoProducto);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Error al crear el producto' });
    }
  } else if (req.method === 'PUT') {
    const { id, codigo, descripcion, proveedor, fechaVencimiento, ubicacionFisica, existenciaMinima } = req.body;
    try {
      const productoActualizado = await prisma.producto.update({
        where: { id: parseInt(id) },
        data: {
          codigo,
          descripcion,
          proveedor,
          fechaVencimiento: new Date(fechaVencimiento),
          ubicacionFisica,
          existenciaMinima: parseInt(existenciaMinima, 10),
        },
      });
      res.status(200).json(productoActualizado);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Error al actualizar el producto' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}

