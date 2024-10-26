import { useState, useEffect } from 'react';

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [form, setForm] = useState({
    id: '',
    codigo: '',
    descripcion: '',
    proveedor: '',
    fechaVencimiento: '',
    ubicacionFisica: '',
    existenciaMinima: '',
  });
  const [search, setSearch] = useState('');

  // Obtener productos (con búsqueda)
  useEffect(() => {
    fetch(`/api/productos?search=${search}`)
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, [search]);

  // Manejar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = form.id ? 'PUT' : 'POST'; // Si hay id, es actualización, sino es creación
    const res = await fetch('/api/productos', {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: form.id, // Incluye id solo si se está actualizando
        codigo: form.codigo,
        descripcion: form.descripcion,
        proveedor: form.proveedor,
        fechaVencimiento: form.fechaVencimiento,
        ubicacionFisica: form.ubicacionFisica,
        existenciaMinima: parseInt(form.existenciaMinima, 10),
      }),
    });

    if (res.ok) {
      const producto = await res.json();

      if (form.id) {
        setProductos(productos.map(p => (p.id === producto.id ? producto : p)));
      } else {
        setProductos([...productos, producto]);
      }

      setForm({
        id: '',
        codigo: '',
        descripcion: '',
        proveedor: '',
        fechaVencimiento: '',
        ubicacionFisica: '',
        existenciaMinima: '',
      });
    } else {
      console.error('Error al crear o actualizar el producto');
    }
  };

  // Cargar datos del producto seleccionado en el formulario
  const cargarProducto = (producto) => {
    setForm({
      id: producto.id,
      codigo: producto.codigo,
      descripcion: producto.descripcion,
      proveedor: producto.proveedor,
      fechaVencimiento: producto.fechaVencimiento.split('T')[0], // Formato de fecha
      ubicacionFisica: producto.ubicacionFisica,
      existenciaMinima: producto.existenciaMinima,
    });
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      <input
        type="text"
        placeholder="Buscar por código o descripción"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {productos.length > 0 ? productos.map((producto) => (
          <li key={producto.id} onClick={() => cargarProducto(producto)}>
            {producto.descripcion} - {producto.codigo}
          </li>
        )) : <li>No se encontraron productos</li>}
      </ul>

      <h2>{form.id ? 'Actualizar Producto' : 'Crear Producto'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Código"
          value={form.codigo}
          onChange={(e) => setForm({ ...form, codigo: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={form.descripcion}
          onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
        />
        <input
          type="text"
          placeholder="Proveedor"
          value={form.proveedor}
          onChange={(e) => setForm({ ...form, proveedor: e.target.value })}
        />
        <input
          type="date"
          placeholder="Fecha de Vencimiento"
          value={form.fechaVencimiento}
          onChange={(e) => setForm({ ...form, fechaVencimiento: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ubicación Física"
          value={form.ubicacionFisica}
          onChange={(e) => setForm({ ...form, ubicacionFisica: e.target.value })}
        />
        <input
          type="number"
          placeholder="Existencia Mínima"
          value={form.existenciaMinima}
          onChange={(e) => setForm({ ...form, existenciaMinima: e.target.value })}
        />
        <button type="submit">{form.id ? 'Actualizar Producto' : 'Crear Producto'}</button>
      </form>
    </div>
  );
}
