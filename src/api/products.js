// src/api/products.js

import apiInstance from '@/utils/axios';  // Import the axios instance you created

// Function to fetch all products
// export const getProducts = async () => {
//   try {
//     const response = await apiInstance.get('/products');  // Assuming your backend endpoint is /products
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching products', error);
//     throw error;
//   }
// };
export const getProducts = async (params = {}) => {
  try {
    const response = await apiInstance.get('/products', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching products', error);
    throw error;
  }
};
// Function to fetch a specific product by ID
export const getProductById = async (id) => {
  try {
    const response = await apiInstance.get(`/products/${id}`);  // Assuming your backend endpoint is /product/:id
    return response.data;
  } catch (error) {
    console.error('Error fetching product by ID', error);
    throw error;
  }
};
