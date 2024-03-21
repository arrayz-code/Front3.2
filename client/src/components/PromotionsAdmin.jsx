// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:3001/promotions'
// });

// function PromotionsAdmin() {
//   const [promotions, setPromotions] = useState([]);
//   const [promotion, setPromotion] = useState({ title: '', subtitle: '', startDate: '', endDate: '' });

//   useEffect(() => {
//     fetchPromotions();
//   }, []);

//   const fetchPromotions = async () => {
//     const response = await api.get('/');
//     setPromotions(response.data);
//   };

//   const createPromotion = async () => {
//     if (!promotion.title || !promotion.startDate || !promotion.endDate) {
//       alert('Por favor, rellena todos los campos requeridos.');
//       return;
//     }
//     const response = await api.post('/', promotion);
//     setPromotions([...promotions, response.data]);
//     setPromotion({ title: '', subtitle: '', startDate: '', endDate: '' });
//   };

//   const updatePromotion = async (id) => {
//     const response = await api.put('/' + id, promotion);
//     const { _id } = response.data;
//     setPromotions(promotions.map(item => item._id === _id ? response.data : item));
//     setPromotion({ title: '', subtitle: '', startDate: '', endDate: '' });
//   };

//   const deletePromotion = async (id) => {
//     await api.delete('/' + id);
//     setPromotions(promotions.filter(item => item._id !== id));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Lista de Promociones</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {promotions.map(promo => (
//           <div key={promo._id} className="bg-white shadow-md rounded-lg p-4 mb-4">
//             <h3 className="text-lg font-bold">{promo.title}</h3>
//             <p>{promo.subtitle}</p>
//             <button onClick={() => deletePromotion(promo._id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded mt-2">Eliminar</button>
//           </div>
//         ))}
//       </div>
//       <h2 className="text-2xl font-bold mb-4">{promotion._id ? 'Editar' : 'Crear'} Promoción</h2>
//       <form className="mb-8">
//         <input
//           type="text"
//           name="title"
//           value={promotion.title}
//           onChange={e => setPromotion({ ...promotion, title: e.target.value })}
//           placeholder="Título"
//           className="border p-2 mr-2"
//         />
//         <input
//           type="text"
//           name="subtitle"
//           value={promotion.subtitle}
//           onChange={e => setPromotion({ ...promotion, subtitle: e.target.value })}
//           placeholder="Subtítulo"
//           className="border p-2 mr-2"
//         />
//         <input
//           type="date"
//           name="startDate"
//           value={promotion.startDate}
//           onChange={e => setPromotion({ ...promotion, startDate: e.target.value })}
//           placeholder="Fecha de Inicio"
//           className="border p-2 mr-2"
//         />
//         <input
//           type="date"
//           name="endDate"
//           value={promotion.endDate}
//           onChange={e => setPromotion({ ...promotion, endDate: e.target.value })}
//           placeholder="Fecha de Fin"
//           className="border p-2 mr-2"
//         />
//         <button
//           onClick={() => promotion._id ? updatePromotion(promotion._id) : createPromotion()}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           {promotion._id ? 'Actualizar' : 'Agregar'}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default PromotionsAdmin;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/promotions'
});

function Promotions() {
  const [promotions, setPromotions] = useState([]);
  const [editingPromotion, setEditingPromotion] = useState({ title: '', subtitle: '', startDate: '', endDate: '' });

  useEffect(() => {
    fetchPromotions();
  }, []);

  const fetchPromotions = async () => {
    try {
      const response = await api.get('/');
      setPromotions(response.data);
    } catch (error) {
      console.error('Error al obtener las promociones:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingPromotion({ ...editingPromotion, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editingPromotion.title || !editingPromotion.startDate || !editingPromotion.endDate) {
      alert('Por favor, rellena todos los campos requeridos.');
      return;
    }

    if (editingPromotion._id) {
      await updatePromotion(editingPromotion._id);
    } else {
      await createPromotion();
    }
  };

  const createPromotion = async () => {
    try {
      const response = await api.post('/', editingPromotion);
      setPromotions([...promotions, response.data]);
      setEditingPromotion({ title: '', subtitle: '', startDate: '', endDate: '' });
    } catch (error) {
      console.error('Error al crear la promoción:', error);
    }
  };

  const updatePromotion = async (id) => {
    try {
      const response = await api.put('/' + id, editingPromotion);
      setPromotions(promotions.map(item => item._id === id ? response.data : item));
      setEditingPromotion({ title: '', subtitle: '', startDate: '', endDate: '' });
    } catch (error) {
      console.error('Error al actualizar la promoción:', error);
    }
  };

  const deletePromotion = async (id) => {
    try {
      await api.delete('/' + id);
      setPromotions(promotions.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error al eliminar la promoción:', error);
    }
  };

  return (
    
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-2xl font-bold mb-4">{editingPromotion._id ? 'Editar' : 'Agregar'} promoción</h2>
        <input
          type="text"
          name="title"
          value={editingPromotion.title || ''}
          onChange={handleInputChange}
          placeholder="Título"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="subtitle"
          value={editingPromotion.subtitle || ''}
          onChange={handleInputChange}
          placeholder="Subtítulo"
          className="border p-2 mr-2"
        />
        <input
          type="date"
          name="startDate"
          value={editingPromotion.startDate || ''}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="date"
          name="endDate"
          value={editingPromotion.endDate || ''}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {editingPromotion._id ? 'Actualizar' : 'Agregar'}
        </button>
      </form>
      <h2 className="text-2xl font-bold mb-4">Promociones</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {promotions.map(promo => (
          <div key={promo._id} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h3 className="text-lg font-bold">{promo.title}</h3>
            <p>{promo.subtitle}</p>
            <button onClick={() => setEditingPromotion(promo)} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded mt-2">Editar</button>
            <button onClick={() => deletePromotion(promo._id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded mt-2">Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Promotions;
