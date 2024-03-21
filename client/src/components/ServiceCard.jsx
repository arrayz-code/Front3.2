import React from 'react';

const ServiceCard = ({ serviceName, serviceDescription, serviceImage }) => {
  return (
    <div className="bg-white shadow p-4 rounded-lg">
      <h3 className="font-semibold text-gray-900 mb-2">{serviceName}</h3>
      <p className=" mb-4">{serviceDescription}</p>
      {/* La imagen se muestra aquí */}
      <img src={serviceImage} className="w-full object-cover h-32 rounded-lg" />
    </div>
  );
};

export default ServiceCard;
