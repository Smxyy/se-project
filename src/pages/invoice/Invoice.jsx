import { FaPaypal } from "react-icons/fa";
import { IoPrintOutline } from "react-icons/io5";
import "./invoice.css"

export default function Invoice() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <section className="bg-white rounded-md p-8 w-full printable-content">
        <p className="text-xl font-semibold">My Invoices</p>
        <div className="contentbar pt-12">
            <div className="flex justify-center">
              <div className="w-full md:w-10/12 lg:w-10/12">
                <div className="card mb-8">
                  <div className="card-body">
                    <div className="invoice invoice-print">
                      <div className="invoice-head">
                        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                          <div className="col-span-4">
                            <div className="invoice-logo mb-4 flex items-center">
                              <img src="../../src/assets/logo.png" className="w-32" alt="Readoria-logo" />
                              <p className="text-tertiary font-bold text-xl">Readoria</p>
                            </div>
                            <h4>Readoria</h4>
                            <p className="text-[14px]">SE Group 2</p>
                            <p className="mb-0 text-[14px]">#219A, Russian Federation Boulevard, Teuk Laak 1, Toul Kork, Phnom Penh, Cambodia</p>
                          </div>
                          <div className="col-span-3 text-right">
                            <div className="invoice-name">
                              <h5 className="uppercase mb-3">Invoice</h5>
                              <p className="mb-1">No: #98765</p>
                              <p className="mb-0">25 Dec, 2024</p>
                              <h4 className="text-green-500 mt-3">$66.08</h4>
                            </div>
                          </div>
                        </div>
                      </div>
      
                      <div className="invoice-billing mt-8 text-[14px]">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="border p-5 rounded-md">
                            <h6 className="mb-3">Bill to</h6>
                            <h6 className="text-gray-600">Amy Adams</h6>
                            <ul className="list-none space-y-1">
                              <li>417 Redbud Drive, Manhattan Building, Whitestone, NY, New York-11357</li>
                              <li>+1-9876543210</li>
                              <li>amyadams@email.com</li>
                            </ul>
                          </div>
                          <div className="border p-5 rounded-md">
                            <h6 className="mb-3">Shipped to</h6>
                            <h6 className="text-gray-600">Amy Adams</h6>
                            <ul className="list-none space-y-1">
                              <li>417 Redbud Drive, Manhattan Building, Whitestone, NY, New York-11357</li>
                              <li>+1-9876543210</li>
                              <li>amyadams@email.com</li>
                            </ul>
                          </div>
                          <div className="p-5 rounded-md bg-blue-50 text-center flex flex-col gap-3 justify-center items-center">
                              <h6>Payment Method</h6>
                              <FaPaypal className="text-[50px] text-cyan-500" />
                              <p>via PayPal</p>
                          </div>
                        </div>
                      </div>
      
                      <div className="invoice-summary mt-8">
                        <table className="table-auto w-full border-collapse border border-gray-300">
                          <thead>
                            <tr>
                              <th className="border px-4 py-2">ID</th>
                              <th className="border px-4 py-2">Photo</th>
                              <th className="border px-4 py-2">Book Title</th>
                              <th className="border px-4 py-2">Qty</th>
                              <th className="border px-4 py-2">Price</th>
                              <th className="border px-4 py-2 text-right">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { id: 1, photo: '../../src/assets/bookday.png', product: 'Book Day', qty: 1, price: 10, total: 10 },
                              { id: 2, photo: '../../src/assets/playtime.png', product: 'Play Time', qty: 2, price: 8, total: 16 },
                              { id: 3, photo: '../../src/assets/silverlining.png', product: 'Silver Lining', qty: 3, price: 10, total: 30 },
                            ].map(item => (
                              <tr key={item.id}>
                                <td className="border px-4 py-2 text-center">{item.id}</td>
                                <td className="border px-4 py-2 place-items-center">
                                  <img src={item.photo} className="w-9" alt={item.product} />
                                </td>
                                <td className="border px-4 py-2">{item.product}</td>
                                <td className="border px-4 py-2 text-center">{item.qty}</td>
                                <td className="border px-4 py-2 text-center">${item.price}</td>
                                <td className="border px-4 py-2 text-right">${item.total}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
      
                      <div className="invoice-summary-total mt-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-cyan-500 bg-blue-50 font-medium inline p-1">This is a Free Shipping Order</p>
                            <h6 className="mt-3" >Special Note:</h6>
                            <p>Please pack with product air bags and handle with care.</p>
                          </div>
                          <div>
                            <table className="table-auto w-full text-right">
                              <tbody>
                                <tr>
                                  <td className="pr-4">Sub Total:</td>
                                  <td>$56.00</td>
                                </tr>
                                <tr>
                                  <td className="pr-4">Shipping Charges:</td>
                                  <td>$0.00</td>
                                </tr>
                                <tr>
                                  <td className="pr-4">Tax (18%):</td>
                                  <td>$10.08</td>
                                </tr>
                                <tr className="font-bold">
                                  <td className="pr-4">Amount Payable:</td>
                                  <td>$66.08</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <hr className="my-5" />
                      <div className="invoice-meta">
                        <div className="flex flex-wrap justify-between">
                          {/* Terms & Conditions Section */}
                          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-4">
                            <div className="invoice-meta-box">
                              <h6 className="mb-3 text-lg font-semibold">Terms & Conditions</h6>
                              <ul className="pl-3 list-disc space-y-2">
                                <li>Goods once sold will not be taken back.</li>
                                <li>We are responsible for Courier Damage.</li>
                                <li>Subject to NY Jurisdiction.</li>
                              </ul>
                            </div>
                          </div>

                          {/* Contact Us Section */}
                          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                            <div className="invoice-meta-box">
                              <h6 className="mb-3 text-lg font-semibold">Contact Us</h6>
                              <ul className="list-none space-y-2">
                                <li className="flex items-center">
                                  <i className="feather icon-mail"></i>readoria@gmail.com
                                </li>
                                <li className="flex items-center">
                                  <i className="feather icon-phone"></i>+855 (096) 456-7890
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Authorized Signatory Section */}
                          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 text-right">
                            <div className="invoice-meta-box">
                              <h6 className="mb-0 text-lg font-semibold">Authorized Signatory</h6>
                              <div className="flex justify-end"> {/* Added flex container */}
                                <img 
                                  src="../../src/assets/signature.png" 
                                  className="my-3 max-w-xs h-[50px]" 
                                  alt="signature" 
                                />
                              </div>
                              <p className="mb-0 me-1">SE Group2</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="invoice-footer mt-2">
                        <div className="flex justify-between items-center">
                          <p>Thank you for your business.</p>
                          <div>
                            <button
                              onClick={() => window.print()}
                              className="text-emerald-600 bg-green-100 px-4 py-2 rounded mr-2 hover:bg-primary  hover:text-white 00 flex gap-2 items-center"
                            >
                              <IoPrintOutline/>Print
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}
