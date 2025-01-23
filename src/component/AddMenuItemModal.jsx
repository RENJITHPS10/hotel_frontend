import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { serverUrl } from '../api';


const AddMenuItemModal = ({closeModal, setSelectedMenuId, selectedMenuId }) => {
  const [menus, setMenus] = useState([]);
  const [menuItem, setMenuItem] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  useEffect(() => {
    // Fetch the list of menus only when the modal opens
    const fetchMenusFromServer = async () => {
      try {
        const response = await axios.get(`${serverUrl}/menus`);
        setMenus(response.data);
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };

    fetchMenusFromServer();
  }, []);

  const handleAddMenuItem = async (e) => {
    e.preventDefault();

    if (!menuItem || !itemDescription || !itemPrice || !selectedMenuId) return;

    try {
      await axios.post(`${serverUrl}/menu-items`, {
        name: menuItem,
        description: itemDescription,  // Send description now
        price: itemPrice,
        menuId: selectedMenuId, // Send menuId to associate item with menu
      });

      
      closeModal();  // Close the modal
    } catch (error) {
      console.error('Error adding menu item:', error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-600 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Add Item to Menu</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Select Menu</label>
          <select
            value={selectedMenuId}
            onChange={(e) => setSelectedMenuId(e.target.value)}
            className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md"
            required
          >
            <option value="">-- Select a Menu --</option>
            {menus.map((menu) => (
              <option key={menu._id} value={menu._id}>
                {menu.name}
              </option>
            ))}
          </select>
        </div>

        {selectedMenuId && (
          <>
            <form onSubmit={handleAddMenuItem}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Menu Item Name</label>
                <input
                  type="text"
                  value={menuItem}
                  onChange={(e) => setMenuItem(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={itemDescription}
                  onChange={(e) => setItemDescription(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="number"
                  value={itemPrice}
                  onChange={(e) => setItemPrice(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-2 text-gray-500 font-medium rounded-md border border-gray-300 hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
                >
                  Add Item
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AddMenuItemModal;
