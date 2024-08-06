// src/components/Header/Header.jsx

import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Simulate sign out
    navigate('/');
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Sign Out
        </button>
      </div>
    </header>
  );
};

export default Header;
