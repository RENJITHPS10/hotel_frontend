import React, { useState } from 'react';
import AddMenuModal from '../component/AddMenuModal';
import AddMenuItemModal from '../component/AddMenuItemModal';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showAddMenuModal, setShowAddMenuModal] = useState(false);
  const [showAddMenuItemModal, setShowAddMenuItemModal] = useState(false);
  const [selectedMenuId, setSelectedMenuId] = useState(null);

  const handleAddMenu = () => setShowAddMenuModal(true);
  const handleCloseMenuModal = () => setShowAddMenuModal(false);

  const handleAddMenuItem = () => {
    setShowAddMenuItemModal(true); 
  };

  const handleCloseMenuItemModal = () => setShowAddMenuItemModal(false);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Menu Management
        </h1>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={handleAddMenu}
            className="px-6 py-3 bg-indigo-500 text-white font-medium rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Add Menu
          </button>

          <button
            onClick={handleAddMenuItem}
            className="px-6 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Add Menu Item
          </button>
        </div>

        <Link
          to="/menu"
          className="block text-center text-white bg-blue-500 hover:bg-blue-700 rounded-md py-3 px-6"
        >
          Go To Menu Page
        </Link>
      </div>

      {/* Add Menu Modal */}
      {showAddMenuModal && (
        <AddMenuModal closeModal={handleCloseMenuModal} />
      )}

      {/* Add Menu Item Modal */}
      {showAddMenuItemModal && (
        <AddMenuItemModal
          closeModal={handleCloseMenuItemModal}
          setSelectedMenuId={setSelectedMenuId}
          selectedMenuId={selectedMenuId}
        />
      )}
    </div>
  );
};

export default Home;