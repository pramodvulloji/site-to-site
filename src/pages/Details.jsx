import React, { useEffect, useState } from 'react';
import apiInstance from '@/utils/axios'; // Make sure axios is correctly imported
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    const fetchPhoneDetails = async () => {
      try {
        const response = await apiInstance.get(`/product/${id}`);
        setPhone(response.data);
      } catch (error) {
        console.error('Error fetching phone details', error);
      }
    };
    fetchPhoneDetails();
  }, [id]);

  if (!phone) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{phone.name}</h2>
      <p>{phone.description}</p>
      <p><strong>Price:</strong> ${phone.price}</p>
      <p><strong>Brand:</strong> {phone.brand}</p>
      {/* Display other phone details */}
    </div>
  );
};

export default Details;
