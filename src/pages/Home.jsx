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
    setShowAddMenuItemModal(true); // Show modal to add menu item
  };

  const handleCloseMenuItemModal = () => setShowAddMenuItemModal(false);

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-white">Menu Management</h1>
        </div>

        <div className="mb-6 flex justify-center items-center space-x-4">
          <button
            onClick={handleAddMenu}
            className="px-6 py-2 bg-indigo-500 text-white font-medium rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Add Menu
          </button>

          <button
            onClick={handleAddMenuItem}
            className="px-6 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Add Menu Item
          </button>
        </div>

        <div className="flex justify-center items-center  ">
          <Link
            to="/menu"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Go To Menu Page
          </Link>
        </div>
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
