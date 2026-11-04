import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

function GuestComponent() {
  const user = localStorage.getItem("user");

  return user ? <Navigate to="/" replace /> : <Outlet />;
}

export default GuestComponent