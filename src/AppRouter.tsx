import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Login from "./screens/pages/auth/login";
import { useState } from "react";

function ProtectedRoute({ isLoggedIn }: { isLoggedIn?: boolean }) {
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    
    return <Outlet />;
}

function Home() {
    return (
        <div className="flex items-center justify-center h-screen">
            <h1 className="text-3xl font-bold">Home Page</h1>
        </div>
    );
}

export default function AppRouter() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<Login />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
        <Route path="/" element={<Home />} />
        {/* add more protected routes here */}
      </Route>
    </Routes>
  );
}