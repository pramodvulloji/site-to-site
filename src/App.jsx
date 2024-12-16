import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Details from '@/pages/Details';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div className="app">
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
