const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Crea un nuevo producto
  const nuevoProducto = await prisma.producto.create({
    data: {
      codigo: 'P001',
      descripcion: 'Producto de prueba',
      proveedor: 'Proveedor A',
      fechaVencimiento: new Date('2024-12-31'),
      ubicacionFisica: 'Bodega A',
      existenciaMinima: 10,
    },
  });

  console.log('Nuevo producto creado:', nuevoProducto);

  // Lista todos los productos
  const productos = await prisma.producto.findMany();
  console.log('Lista de productos:', productos);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
