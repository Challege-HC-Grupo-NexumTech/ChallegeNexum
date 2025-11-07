import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import { useNavigate, useParams } from "react-router-dom";


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="container mx-auto p-4">
        <AppRoutes />
      </main>
    </div>
  );
};

export default App;
