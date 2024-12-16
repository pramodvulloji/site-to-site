import React from 'react';

const ViewCard = ({ phone, onReserve }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md h-fit ">
      <img src={phone.image} alt={phone.title} className="w-full h-64 object-cover rounded-md" />
      <h3 className="text-xl font-bold mt-4">{phone.title}</h3>
      <p className="text-gray-500">Accession No: {phone.accession}</p>
      <p className="mt-2 text-gray-600">{phone.category}</p>
      <button
        onClick={onReserve}
        className="bg-blue-600 text-white mt-4 px-4 py-2 rounded hover:bg-blue-700"
      >
        Request to Reserve
      </button>
    </div>
  );
};

export default ViewCard;
