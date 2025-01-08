import { useState } from "react";
import {  Dropdown, MegaMenu, Navbar, Drawer } from "flowbite-react";
import { BsBell, BsFillTrash3Fill, BsCart3 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import CardPage from "../../components/card/CardPage";

export default function NavbarPage() {

  const [isOpen, setIsOpen] = useState();

  const handleClose = () => setIsOpen(false);

  // const [wishlistComponent, setWishListComponent] = useState([]);

  const [wishlist, setWishList] = useState([
    {
      id: 1,
      title: "The Raze night book",
      price: 18.0,
      stock: "In stock",
      quantity: 2,
      image: "src/assets/image.png", // Replace with actual image URL
    },
  ]);

  // Handle quantity change
  const handleQuantityChange = (id, action) => {
    setWishList((prevWishlist) =>
          prevWishlist.map((item) =>
              item.id === id
                  ? {
                        ...item,
                        quantity: action === "increase" ? item.quantity + 1 : Math.max(item.quantity - 1, 0),
                    }
                  : item
          ).filter((item) => item.quantity > 0) // Remove items with quantity 0
      );
  };

  // Handle remove item
  const handleRemove = (id) => {
    setWishList((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  };

  const notifications = [
    {
      img: "../../src/assets/image1.png",
      title: "New customer is left",
    },
    {
      img: "../../src/assets/image2.png",
      title: "New customer is left",
    },
    {
      img: "../../src/assets/book.png",
      title: "New customer is left",
    },
  ];

  const wishlists = [
    {
      img:"../../src/assets/playtime.png",
      title: "Play Time"
    },
    {
      img: "../../src/assets/bookday.png",
      title: "Book Day"
    }
  ]

  const listItem = [
    "Apple", "Banana", "Orange", "Pineapple", "Mango", "Peach", "Grapes", "Strawberry", "Blueberry", "Watermelon"
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  
  const filteredItems = listItem.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <section>
        <Drawer open={isOpen} onClose={handleClose} position="right" className="fixed top-0 right-0 z-[100] w-1/4">
          <Drawer.Header title={<div className="text-h3 text-black font-OpenSans mt-4">Your Card</div>} titleIcon={() => <></>} />
          <Drawer.Items>
            <div className="w-full h-[1px] bg-gray-200 mx-auto mt-2 mb-4"></div>

            {wishlist.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <div className="bg-slate-100 h-full flex items-center justify-center py-4">
                  <img
                      src={item.image} 
                      alt={item.title}
                      className="h-28 w-28 object-contain transition-opacity"
                  />
                </div>
                <div className="flex-1 px-4">
                  <h3 className="font-semibold text-lg font-OpenSans">{item.title}</h3>
                  <p className="text-gray-500">${item.price.toFixed(2)} USD</p>
                  <div className="flex flex-row mt-2">
  
                    <div className="flex items-center space-x-2">
                      <button
                          onClick={() => handleQuantityChange(item.id, "decrease")}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                          -
                      </button>
                      <span className="px-3 py-1 border rounded">{item.quantity}</span>
                      <button
                          onClick={() => handleQuantityChange(item.id, "increase")}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                          +
                      </button>
                  </div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="w-[40px] p-3 ml-2 text-gray-500 rounded-sm"
                    >
                        <BsFillTrash3Fill />
                    </button>
                  </div>
                </div>
              </div>
            ))}

          <div className="w-full h-[1px] bg-gray-200 mx-auto mt-2 mb-4"></div>
          <div className="flex justify-between items-center mt-4 mb-4">
            <h3 className="text-h4 font-OpenSans font-body text-black">Subtotal:</h3>
            <p className="text-lg font-body text-gray-800 ml-2">
              ${wishlist.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
            </p>
          </div>
             <button
                    type="button"
                    className="w-full px-4 py-2 text-white text-base bg-secondary hover:bg-orange-500 rounded"
                    onClick={() => setIsOpen(false)}
                >
                <a href="/Checkout" className="text-white w-full block text-center">
                    CHECKOUT
                </a>
            </button>
          </Drawer.Items>
        </Drawer>
      </section>

      <section className="w-full fixed top-0 left-0 z-50">
        <nav className="bg-white border-gray-300 shadow-sm">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a
              href="/"
              className="flex items-center space-x-0 rtl:space-x-reverse"
            >
              <img
                src="../../src/assets/logo.png"
                className="h-24"
                alt="Readoria Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Readoria
              </span>
            </a>

            <MegaMenu>
              <div className="flex flex-wrap items-center justify-between font-OpenSans">
                <Navbar.Toggle />
                <Navbar.Collapse>
                  <Navbar.Link href="/">{<div className="text-base text-black hover:text-tertiary">Home</div>}</Navbar.Link>
                  <Navbar.Link>
                    <MegaMenu.Dropdown toggle={<div className="text-base text-black hover:text-tertiary">Categories</div>}>
                      <Dropdown.Header>
                        <h1 className="py-2 text-h3 text-black font-Poppins uppercase font-semibold">Book Categories</h1>
                      </Dropdown.Header>
                      <ul className="grid gap-5 grid-cols-3 font-Poppins">
                        <div className="space-y-4 p-4 px-4">
                          <li>
                            <a
                            href="/shop/kid"
                            className="text-base text-black hover:text-secondary">
                              Kid
                            </a>
                          </li>
                          <li>
                            <a 
                            href="/shop/documentary"
                            className="text-base text-black hover:text-secondary">
                              Documentary
                            </a>
                          </li>
                          <li>
                            <a href="/shop/mystery" className="text-base text-black hover:text-secondary">
                              Mystery
                            </a>
                          </li>
                          <li>
                            <a 
                            href="/shop/thriller"
                            className="text-base text-black hover:text-secondary">
                              Thriller
                            </a>
                          </li>
                        </div>
                        <div className="space-y-4 p-4 px-4">
                          <li>
                            <a href="/shop/romance" className="text-base text-black hover:text-secondary">
                              Romance
                            </a>
                          </li>
                          <li>
                            <a href="/shop/fantasy" className="text-base text-black hover:text-secondary">
                              Fantasy
                            </a>
                          </li>
                          <li>
                            <a href="/shop/textbook" className="text-base text-black hover:text-secondary">
                              Textbook
                            </a>
                          </li>
                          <li>
                            <a href="/shop/fiction" className="text-base text-black hover:text-secondary">
                              Fiction
                            </a>
                          </li>
                        </div>
                        <div className="space-y-4 p-4">
                          <div className="bg-slate-100 h-full flex items-center justify-center">
                            <img
                                src="../../src/assets/image.png"
                                alt="Image"
                                className="h-28 w-28 object-contain transition-opacity"
                            />
                          </div>
                        </div>
                      </ul>
                    </MegaMenu.Dropdown>
                  </Navbar.Link>
                  <Navbar.Link href="/shop">{<div className="text-base text-black hover:text-tertiary">Shop</div>}</Navbar.Link>
                  <Navbar.Link href="/contact">{<div className="text-base text-black hover:text-tertiary">Contact</div>}</Navbar.Link>
                </Navbar.Collapse>
              </div>
            </MegaMenu>

            <form className="w-1/4">   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    onFocus={()=>setIsDropdownVisible(true)}
                    onBlur={() => setTimeout(() => setIsDropdownVisible(false), 100)}
                    type="text" 
                    id="default-search" className="block w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-300 focus:border-gray-300" placeholder="Search for books for keywords..." required />
                    {isDropdownVisible && searchTerm && (
                      <ul className="mt-2 max-h-48 overflow-auto border border-none rounded-sm bg-white shadow-sm absolute w-full">
                        {filteredItems.length > 0 ? (
                          filteredItems.map((listItems, index) => (
                            <li
                              key={index}
                              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                            >
                              {listItems}
                            </li>
                          ))
                        ) : (
                          <li className="px-4 py-2 text-gray-500">No listItems found</li>
                        )}
                      </ul>
                    )}
                </div>
            </form>

            <div className="flex items-center space-x-6 rtl:space-x-reverse">

            <Dropdown label={<div className="text-xl hover:text-tertiary pl-4">
                <GoHeart/>
              </div>} inline arrowIcon={false}>
                <Dropdown.Header>
                  <p className="block text-black text-base">My Wishlist</p>
                </Dropdown.Header>
                {wishlists.map((wishlist,item) =>(
                  <Dropdown.Item key={item}>
                    <img className="h-12" src={wishlist.img} alt={`${wishlist.title}`} />
                    <p className="text-black text-base ml-4">{wishlist.title}</p>
                  </Dropdown.Item>
                ))}
            </Dropdown>

            <Dropdown label={<div className="text-xl hover:text-tertiary">
                <BsBell />
              </div>} inline arrowIcon={false}>
                <Dropdown.Header>
                  <p className="block text-black text-base">All Notifications</p>
                </Dropdown.Header>
                {notifications.map((notifications, item) =>(
                  <Dropdown.Item key={item}>
                    <img className="w-12 h-12 rounded-full" src={notifications.img} alt="" />
                    <p className="text-black text-base ml-4">{notifications.title}</p>
                  </Dropdown.Item>
                ))}
                
            </Dropdown>
              
            <button
              type="button"
              className="text-xl hover:text-tertiary cursor-pointer relative"
              data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example"
              onClick={() => setIsOpen(true)}
            >
              <BsCart3 />
              {wishlist.length > 0 && (
                <div className="-top-4 absolute left-2">
                  <p className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {wishlist.length}
                  </p>
                </div>
              )}
            </button>
              
              <a
                href="/signin"
              >
                <button type="button" className="text-tertiary bg-primary hover:bg-secondary hover:text-white focus:ring-0 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Sign In</button>
              </a>
            </div>
          </div>
        </nav>
      </section>
      
    </section>
  );
}
