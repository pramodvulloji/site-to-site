import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Login</h2>
      <button onClick={handleLogin} className="bg-blue-600 text-white py-2 px-4 rounded mt-4">
        Login
      </button>
    </div>
  );
};

export default Login;
