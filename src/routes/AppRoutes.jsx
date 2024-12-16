import Details from '@/pages/Details';
import Home from '@/pages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/auth" element={<Auth />}>
        <Route path="/auth" element={<Navigate to="/auth/login" replace />} />
        <Route index path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route> */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/product/:id" element={<Details />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}
