import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { GoTrash } from "react-icons/go";
import { IoAdd } from "react-icons/io5";

export default function MyAddresses()  {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Amy Adams",
      phone: "+1 9876543210",
      address: "4209 Public Work Drive, 24th Street, Near Oklahoma Building, Cleveland, Tennessee, USA.",
      email: "demo@example.com",
      isDefault: true,
    },
    {
      id: 2,
      name: "John Doe",
      phone: "+1 1234567890",
      address: "1234 Maple Street, Springfield, Illinois, USA.",
      email: "johndoe@example.com",
      isDefault: false,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false); // For editing address modal
  const [selectedAddress, setSelectedAddress] = useState(null); // Address to edit
  const [newAddress, setNewAddress] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    isDefault: false,
  });

  // Handle Add New Address
  const handleAddNewAddress = () => {
    setAddresses([
      ...addresses,
      { id: Date.now(), ...newAddress },
    ]);
    setNewAddress({
      name: "",
      phone: "",
      address: "",
      email: "",
      isDefault: false,
    });
    resetForm(); // Reset form data after adding address
    setIsModalOpen(false);
  };

  // Handle Edit Address
  const handleEditAddress = (address) => {
    setSelectedAddress(address);
    setNewAddress({
      name: address.name,
      phone: address.phone,
      address: address.address,
      email: address.email,
      isDefault: address.isDefault,
    });
    setIsModalOpen(true);
  };

  // Handle Delete Address
  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter(address => address.id !== id));
  };

  // Handle Save Edited Address
  const handleSaveEditedAddress = () => {
    setAddresses(
      addresses.map(address =>
        address.id === selectedAddress.id
          ? { ...address, ...newAddress }
          : address
      )
    );
    resetForm(); // Reset form data after saving changes
    setIsModalOpen(false);
    setSelectedAddress(null); // Reset the selected address after save
  };

  // Reset the form when modal is closed or when switching to Add New Address
  const resetForm = () => {
    setNewAddress({
      name: "",
      phone: "",
      address: "",
      email: "",
      isDefault: false,
    });
  };

  // Reset the form when modal is closed or when switching to Add New Address
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAddress(null); // Reset selectedAddress when closing modal
    setNewAddress({
      name: "",
      phone: "",
      address: "",
      email: "",
      isDefault: false,
    });
    resetForm(); // Clear form data
  };

  return (
    <div className="flex flex-col gap-8">
      <section className="bg-white rounded-md p-8">
        <p className="text-xl font-semibold">My Addresses</p>
        <div className="flex flex-col items-center gap-4 pt-10 lg:pt-16">
          {/* Add New Address */}
          <div className="flex justify-center items-center bg-white rounded-lg p-6 mb-6">
            <button
              className="flex flex-col items-center"
              onClick={() => {
                setSelectedAddress(null); // Reset selectedAddress to null when adding new address
                setIsModalOpen(true); // Open modal for adding address
              }}
            >
              <div className="flex justify-center items-center bg-green-100 text-green-600 rounded-full w-10 h-10">
                <IoAdd />
              </div>
              <span className="mt-2 text-gray-700 font-medium">Add New Address</span>
            </button>
          </div>

          {/* Address Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Single Address Card */}
            {addresses.map((address) => (
              <div
                key={address.id}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-gray-800">{address.name}</h2>
                <p className="text-gray-600 text-sm mt-1">{address.phone}</p>
                <p className="text-gray-600 text-sm mt-1">{address.address}</p>
                <p className="text-gray-600 text-sm mt-1">{address.email}</p>

                {/* Action Buttons */}
                <div className="flex items-center mt-4 gap-2">
                  {/* Edit */}
                  <button
                    className="bg-green-100 text-green-600 rounded-full p-2 hover:bg-green-200"
                    onClick={() => handleEditAddress(address)}
                  >
                    <CiEdit />
                  </button>

                  {/* Delete */}
                  <button className="bg-red-100 text-red-600 rounded-full p-2 hover:bg-red-200" onClick={() => handleDeleteAddress(address.id)}>
                    <GoTrash />
                  </button>

                  {/* Default / Make Default */}
                  {address.isDefault ? (
                    <button className="bg-blue-100 text-blue-600 rounded px-4 py-1 text-sm">
                      Default
                    </button>
                  ) : (
                    <button className="bg-gray-100 text-gray-500 rounded px-4 py-1 text-sm">
                      Make Default
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for adding/editing address */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-1/3">
            <h2 className="text-xl font-semibold mb-4">{selectedAddress ? "Edit Address" : "Add New Address"}</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                selectedAddress ? handleSaveEditedAddress() : handleAddNewAddress();
              }}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  value={newAddress.name}
                  onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  value={newAddress.phone}
                  onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  value={newAddress.address}
                  onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  value={newAddress.email}
                  onChange={(e) => setNewAddress({ ...newAddress, email: e.target.value })}
                />
              </div>
              <div className="flex justify-end gap-4">
                <button type="button"
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                  onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="submit"
                  className="px-4 py-2 bg-primary text-black rounded-md hover:text-white hover:bg-emerald-500">
                  {selectedAddress ? "Save Changes" : "Add Address"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

