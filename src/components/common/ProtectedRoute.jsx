import PATH from '@/configs/paths/PATH';
import useAuth from '@/features/Auth/hooks/useAuth'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({children}) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to={PATH.LOGIN} state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;