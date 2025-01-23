import React, { useState } from 'react';
import axios from 'axios';
import { serverUrl } from '../api';

const AddMenuModal = ({ fetchMenus, closeModal }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/menus`, { name, description });
 
      closeModal();
    } catch (error) {
      console.error('Error creating menu', error);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75">
      <div className="bg-gray-900 rounded-lg shadow-lg w-full max-w-lg p-8">
        <h2 className="text-2xl font-semibold text-white mb-6">Add Menu</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300" htmlFor="name">Menu Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
        
          <div>
            <label className="block text-gray-300" htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
        
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Create Menu
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="px-6 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMenuModal;