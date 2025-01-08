// import React from 'react'
import { LuFile } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

export default function MyOrders() {
  const navigate = useNavigate();
  const orders = [
    {
      id: "#26598",
      total: 18,
      status: "Shipped",
      products: [
        { id: 1, photo: "../../src/assets/bookday.png", name: "Book Day", qty: 1, price: 10 },
        { id: 2, photo: "../../src/assets/playtime.png", name: "Play Time", qty: 2, price: 8 },
      ],
    },
    {
      id: "#26597",
      total: 5,
      status: "Delivered",
      products: [
        { id: 1, photo: "../../src/assets/silverlining.png", name: "Silver Lining", qty: 1, price: 5 },
      ],
    },
  ];

  const handleOnClick = ()=>{
    navigate("/account/invoice")
  }
  return (
    <div className="flex flex-col gap-8 w-full">
    <section className="bg-white rounded-md p-8 w-full">
      <p className="text-xl font-semibold">My Orders</p>
      <div className="flex flex-col gap-4 pt-10 lg:pt-16 w-full">
        {/* Orders */}
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white border border-gray-200 rounded-lg p-4 mb-6 shadow-sm w-full"
          >
            {/* Order Header */}
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <span className="text-lg font-medium text-gray-800">
                ID : <span className="font-semibold">{order.id}</span>
              </span>
              <span className="text-lg font-semibold text-gray-800">
                Total : ${order.total}
              </span>
            </div>
  
            {/* Product Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-600">
                <thead>
                  <tr className="border-b">
                    <th className="py-2">#</th>
                    <th className="py-2">Photo</th>
                    <th className="py-2">Product</th>
                    <th className="py-2">Qty</th>
                    <th className="py-2">Price</th>
                    <th className="py-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.products.map((product) => (
                    <tr key={product.id} className="border-b">
                      <td className="py-2">{product.id}</td>
                      <td className="py-2">
                        <img className="h-10" src={product.photo} alt={product.name} />
                      </td>
                      <td className="py-2">{product.name}</td>
                      <td className="py-2">{product.qty}</td>
                      <td className="py-2">${product.price}</td>
                      <td className="py-2">${product.price * product.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
  
            {/* Footer */}
            <div className="flex justify-between items-center mt-4">
              <div>
                <span className="font-medium text-gray-800">Status : </span>
                <span
                  className={`px-2 py-1 text-sm font-medium rounded ${
                    order.status === "Shipped"
                      ? "text-cyan-500 bg-cyan-50"
                      : "text-blue-600 bg-blue-100"
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <button onClick={()=> handleOnClick()} className="flex items-center font-medium bg-emerald-100 gap-2 text-green-800 px-4 py-2 rounded hover:bg-emerald-200">
                <LuFile className="text-green-600" /> Invoice
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
  
  )
}
