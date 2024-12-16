import React from 'react';

const Card = ({ phone }) => {
  return (
    <div className="card bg-white p-4 rounded-lg shadow">
      <img src={phone.image} alt={phone.name} className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-xl font-semibold">{phone.name}</h3>
      <p className="text-gray-500">{phone.brand}</p>
      <p>{phone.id}</p>
      <p className="font-bold">${phone.price}</p>
    </div>
  );
};

export default Card;
