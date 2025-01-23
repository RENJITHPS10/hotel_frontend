import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { serverUrl } from '../api';

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);

  // Fetch menus from the backend
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res = await axios.get(`${serverUrl}/menus`);
        setMenus(res.data);
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };

    fetchMenus();
  }, []);

  const handleMenuClick = (menuId) => {
    setSelectedMenu(menuId === selectedMenu ? null : menuId); // Toggle the selected menu
  };

  return (
    <>
      <div
        className="bg-cover bg-center flex flex-col items-center justify-start w-full lg:h-96"
        style={{ backgroundImage: 'url(/cover.png)' }}
      >
        <div className="text-center py-6 px-4 w-full">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">MENU</h1>
          <p className="text-sm md:text-lg mb-6 text-white drop-shadow-md leading-relaxed">
            Please take a look at our menu featuring food, drinks, and brunch. If you'd like <br /> to place an order, use the "Order Online" button located below the menu.
          </p>
        </div>
      </div>
      <div className="shadow-lg text-white w-full py-6 px-4" style={{ backgroundImage: 'url(/frame1.png)' }}>
        <div className="flex justify-center space-x-4 overflow-x-auto scrollbar-hide px-2">
          {menus.map((menu) => (
            <div
              key={menu._id}
              className="flex-shrink-0 w-28 sm:w-32 md:w-48 text-white p-2 sm:p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <button
                onClick={() => handleMenuClick(menu._id)}
                className="w-full text-sm sm:text-lg md:text-xl bg-black font-semibold text-white hover:bg-blue-600 hover:text-white py-2 px-4 rounded-md focus:outline-none transition-colors duration-200 border-2 border-blue-700"
              >
                {menu.name}
              </button>
            </div>
          ))}
        </div>

        {/* Show the menu details below */}
        {selectedMenu && (
          <div className="mt-4 sm:mt-6 space-y-4 bg-black p-4 sm:p-6 mx-2 sm:mx-4 md:mx-32 rounded-lg border-2 overflow-hidden" style={{ backgroundImage: 'url(/frame2.png)' }}>
            <h4 className="text-xl sm:text-2xl md:text-4xl font-semibold text-center text-white mb-2">
              {menus.find((menu) => menu._id === selectedMenu)?.name} Items
            </h4>
            {menus.find((menu) => menu._id === selectedMenu)?.items?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {menus.find((menu) => menu._id === selectedMenu).items.map((item) => (
                  <div
                    key={item._id}
                    className="flex flex-col justify-between items-start p-4 rounded-lg shadow-md  transition-colors duration-200"
                  >
                    <div className="flex justify-between w-full mb-1">
                      <p className="text-sm sm:text-lg md:text-xl font-medium text-white">{item.name}</p>
                      <p className="text-sm sm:text-lg md:text-xl font-semibold text-white">${item.price}</p>
                    </div>
                    <p className="text-xs sm:text-sm md:text-md text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs sm:text-sm text-gray-300 text-center">No items available for this menu.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
