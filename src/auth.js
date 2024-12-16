// src/auth.js

export const getToken = () => {
  return localStorage.getItem('auth_token') || null;
};

export const login = (token) => {
  localStorage.setItem('auth_token', token);
};

export const logout = () => {
  localStorage.removeItem('auth_token');
};
