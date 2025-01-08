import { useState } from "react";
import { GoTrash } from "react-icons/go";
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Hollow Port",
      description: "Awesome yellow t-shirt",
      price: "$39.11",
      stockStatus: "In Stock",
      image: "https://via.placeholder.com/50", // Replace with your image URLs
      isInStock: true,
    },
    {
      id: 2,
      name: "Circular Sienna",
      description: "Awesome white t-shirt",
      price: "$24.89",
      stockStatus: "In Stock",
      image: "https://via.placeholder.com/50", // Replace with your image URLs
      isInStock: true,
    },
    {
      id: 3,
      name: "Realm Bone",
      description: "Awesome black t-shirt",
      price: "$22.00",
      stockStatus: "Stock Out",
      image: "https://via.placeholder.com/50", // Replace with your image URLs
      isInStock: false,
    },
  ]);

  const handleRemove = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    // <div className="p-6 bg-gray-50 min-h-screen">
    <div className='bg-white rounded-md px-4 pt-2 pb-5 font-OpenSans'>
      <div className="mx-auto max-w-screen-xl">
            <div className="m-5">
                 
        <h2 className="text-xl font-semibold pt-5">Your Wishlist Items</h2>
      <p className="text-gray-600 mb-4">
        There are {wishlist.length} products in this list
      </p>
      <div className="overflow-x-auto pt-5">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-secondary text-white text-left">
              <th className="p-4 font-semibold">Product</th>
              <th className="p-4 font-semibold">Price</th>
              <th className="p-4 font-semibold">Stock Status</th>
              <th className="py-4 px-6 font-semibold">Action</th>
              <th className="p-4 font-semibold">Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item) => (
              <tr key={item.id} className="border-b hover:bg-orange-50">
                <td className="p-4 flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-md mr-4"
                  />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                </td>
                <td className="p-4">{item.price}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.isInStock
                        ? "bg-green-100 text-green-400"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {item.stockStatus}
                  </span>
                </td>
                <td className="p-4">
                  {item.isInStock ? (
                    <button className="bg-primary text-tertiary hover:text-white px-4 py-2 rounded-md hover:bg-orange-400">
                      Add to Cart
                    </button>
                  ) : (
                    <Link to="/contact">
                    <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-tertiary">
                      Contact Us
                    </button>
                    </Link>
                  )}
                </td>
                <td className="p-4">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="px-4 text-gray-600 hover:text-red-600"
                  >
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg> */}
                    <GoTrash/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
        </div>
    </div>
  );
};

export default Wishlist;
