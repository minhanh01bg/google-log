import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Table from '../pages/Table';
import Users from '../pages/Users';
import { useAuth } from '../contexts/AuthContext';
import Loading from '../components/Loading'
import Tracker from '../pages/Tracker'
const ProtectedRoutes = () => {
  const { isAdmin, loading } = useAuth();
  
  if (loading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path="tables" element={<Table />} />
      <Route path="users" element={isAdmin ? <Users />:<Navigate to="/home" />} />
      <Route path="tracker" element={<Tracker />} />
    </Routes>
  );
};

export default ProtectedRoutes;