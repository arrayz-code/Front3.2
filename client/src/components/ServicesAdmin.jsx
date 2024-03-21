import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ name: '', description: '', image: null });
  const [editingService, setEditingService] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/services')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los servicios:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    setNewService({ ...newService, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setNewService({ ...newService, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', newService.name);
    formData.append('description', newService.description);
    formData.append('image', newService.image);

    axios.post('http://localhost:3001/services', formData)
      .then(response => {
        setServices([...services, response.data]);
        setNewService({ name: '', description: '', image: null });
      })
      .catch(error => {
        console.error('Error al agregar el servicio:', error);
      });
  };

  const handleEditChange = (e) => {
    setEditingService({ ...editingService, [e.target.name]: e.target.value });
  };

  const handleEditFileChange = (e) => {
    setEditingService({ ...editingService, image: e.target.files[0] });
  };

  const handleUpdate = (id, e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', editingService.name);
    formData.append('description', editingService.description);
    formData.append('image', editingService.image);

    axios.put(`http://localhost:3001/services/${id}`, formData)
      .then(response => {
        setServices(services.map(service => service._id === id ? response.data : service));
        setEditingService(null);
      })
      .catch(error => {
        console.error('Error al actualizar el servicio:', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/services/${id}`)
      .then(() => {
        setServices(services.filter(service => service._id !== id));
      })
      .catch(error => {
        console.error('Error al eliminar el servicio:', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Agregar servicio</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <input type="text" name="name" value={newService.name} onChange={handleInputChange} placeholder="Nombre del servicio" className="border p-2 mr-2" />
        <input type="text" name="description" value={newService.description} onChange={handleInputChange} placeholder="Descripción del servicio" className="border p-2 mr-2" />
        <input type="file" name="image" onChange={handleFileChange} className="border p-2 mr-2" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Agregar Servicio</button>
      </form>

      <h2 className="text-2xl font-bold mb-4">Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(service => (
          <div key={service._id} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h3 className="text-lg font-bold">{service.name}</h3>
            <p>{service.description}</p>
            {service.image && <img src={`http://localhost:3001/${service.image}`} alt={service.name} className="w-full h-auto mt-2" />}
            <button onClick={() => setEditingService(service)} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded mt-2">Editar</button>
            <button onClick={() => handleDelete(service._id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded mt-2">Eliminar</button>
          </div>
        ))}
      </div>

      {editingService && (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
          <h2 className="text-2xl font-bold mb-4">Editar servicio</h2>
          <form onSubmit={(e) => handleUpdate(editingService._id, e)} method="POST" enctype="multipart/form-data">
            <input type="text" name="name" value={editingService.name} onChange={handleEditChange} placeholder="Nombre del servicio" className="border p-2 mr-2" />
            <input type="text" name="description" value={editingService.description} onChange={handleEditChange} placeholder="Descripción del servicio" className="border p-2 mr-2" />
            <input type="file" name="image" onChange={handleEditFileChange} className="border p-2 mr-2" />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Actualizar Servicio</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Services;

