import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PricesAdmin = () => {
  const [rooms, setRooms] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    images: [],
    price: 0,
    people: 0,
    reviews: []
  });
  const [editingRoom, setEditingRoom] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await axios.get('http://localhost:3001/rooms');
      setRooms(response.data);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const imageUrls = e.target.value.split(',');
    setFormData({ ...formData, images: imageUrls });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingRoom) {
        await axios.patch(`http://localhost:3001/rooms/${editingRoom}`, formData);
        setEditingRoom(null);
      } else {
        await axios.post('http://localhost:3001/rooms', formData);
      }
      setFormData({
        name: '',
        description: '',
        images: [],
        price: 0,
        people: 0,
        reviews: [],
      });
      fetchRooms();
    } catch (error) {
      console.error('Error creating/updating room:', error);
    }
  };

  const handleEdit = (room) => {
    setFormData({
      name: room.name,
      description: room.description,
      images: room.images,
      price: room.price,
      people: room.people,
      reviews: room.reviews,
    });
    setEditingRoom(room._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta habitación?')) {
      try {
        setIsDeleting(true);
        await axios.delete(`http://localhost:3001/rooms/${id}`);
        fetchRooms();
      } catch (error) {
        console.error('Error deleting room:', error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Agregar haitación</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="input input-bordered w-full mb-2"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
          className="input input-bordered w-full mb-2"
        />
        <input
          type="text"
          name="images"
          placeholder="Image URLs (comma-separated)"
          value={formData.images.join(',')}
          onChange={handleImageChange}
          className="input input-bordered w-full mb-2"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
          className="input input-bordered w-full mb-2"
        />
        <input
          type="number"
          name="people"
          placeholder="People"
          value={formData.people}
          onChange={handleInputChange}
          className="input input-bordered w-full mb-2"
        />
        <button type="submit" className="btn btn-primary w-full">
          {editingRoom ? 'Actualizar' : 'Crear'}
        </button>
      </form>
      <ul className="list-none">
        {rooms.map((room) => (
          <li key={room._id} className="mb-4 p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">{room.name}</h2>
            <p className="mb-2">{room.description}</p>
            <p className="mb-2">Precio: {room.price}</p>
            <p className="mb-2">Personas: {room.people}</p>
            <div className="flex flex-wrap gap-2">
              {room.images.map((image, index) => (
                <img key={index} src={image} alt={`Room ${index}`} className="w-32 h-20 object-cover" />
              ))}
            </div>
            <button onClick={() => handleEdit(room)} className="btn btn-secondary mr-2">
              Editar
            </button>
            <button onClick={() => handleDelete(room._id)} disabled={isDeleting} className="btn btn-error">
              {isDeleting ? 'Eliminando...' : 'Eliminar'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricesAdmin;
