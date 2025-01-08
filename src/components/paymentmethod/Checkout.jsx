import { useState } from "react";
import Select from "react-select";
import "./Checkout.css";
export default function CheckoutForm() {
  const [isEmailError, setIsEmailError] = useState(false);
  const [emailMsg, setEmailMsg] = useState("");
  const [isFullNameError, setIsFullNameError] = useState(false);
  const [fullnameMsg, setFullNamelMsg] = useState("");
  const [isnameError, setIsnameError] = useState(false);
  const [nameMsg, setnamelMsg] = useState("");
  const [isstateError, setIsstateError] = useState(false);
  const [stateMsg, setstatelMsg] = useState("");
  const [isZipcode, setIsZipcodeError] = useState(false);
  const [ZipcodeMsg, setZipcodelMsg] = useState("");
  const [isstate1, setIsstate1Error] = useState(false);
  const [state1Msg, setstate1Msg] = useState("");
  const [isCity, setIsCityError] = useState(false);
  const [City1Msg, setCityMsg] = useState("");
  const [isAdress, setIsAdressError] = useState(false);
  const [AdressMsg, setAdressMsg] = useState("");
  const [iscityselect, setIscityselectError] = useState(false);
  const [cityselectMsg, setcityselectMsg] = useState("");
  const [isCardNumberError, setIsCardNumberError] = useState(false);
  const [cardNumberMsg, setCardNumberMsg] = useState("");
  const [isExpirationError, setIsExpirationError] = useState(false);
  const [expirationMsg, setExpirationMsg] = useState("");
  const [isSecurityCodeError, setIsSecurityCodeError] = useState(false);
  const [securityCodeMsg, setSecurityCodeMsg] = useState("");
  const handleEmailValidation = (e) => {
    const email = e.target.value;

    if (!email) {
      console.log("name", email);
      setIsEmailError(true);
      setEmailMsg("Email is required.");
      return true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsEmailError(true);
      setEmailMsg("Please enter a valid email address.");
      e.preventDefault();
      return true;
    }

    setIsEmailError(false);
    setEmailMsg("");
    return false;
  };

  const handleFullName = (e) => {
    const fullName = e.target.value.trim(); // Trim to avoid empty spaces
    if (!fullName) {
      setIsFullNameError(true);
      setFullNamelMsg("Please Enter Full Name");
      return true; // Indicate there is an error
    } else {
      setIsFullNameError(false);
      setFullNamelMsg("");
      return false; // Indicate there is no error
    }
  };
  const handleName = (e) => {
    const name = e.target.value.trim(); // Trim to avoid empty spaces
    if (name === "") {
      setIsnameError(true);
      setnamelMsg("Please Enter Name");
      return; // Indicate there is an error
    } else {
      setIsnameError(false);
      setnamelMsg("");
      return false; // Indicate there is no error
    }
  };
  const handleState = (e) => {
    const state = e.target.value.trim();
    if (state === "") {
      setIsstateError(true);
      setstatelMsg("Please Enter State/Province");
      return true; // Indicate there is an error
    } else {
      setIsstateError(false);
      setstatelMsg("");
      return false; // Indicate there is no error
    }
  };
  const handleState1 = (e) => {
    const state1 = e.target.value.trim();
    if (state1 === "") {
      setIsstate1Error(true);
      setstate1Msg("Please Enter State/Province");
      return true; // Indicates there is an error
    } else {
      setIsstate1Error(false);
      setstate1Msg("");
      return false; // Indicates no error
    }
  };
  const handlezip = (e) => {
    const zip = e.target.value.trim(); // Trim to avoid empty spaces
    const zipRegex = /^[0-9]*$/; // Regular expression to allow only numeric values

    if (zip === "") {
      setIsZipcodeError(true);
      setZipcodelMsg("Please Enter ZipCode");
      return true; // Indicate there is an error
    } else if (!zipRegex.test(zip)) {
      setIsZipcodeError(true);
      setZipcodelMsg("Please enter a valid numeric ZIP code");
      return true; // Indicate there is an error
    } else {
      setIsZipcodeError(false);
      setZipcodelMsg("");
      return false; // Indicate there is no error
    }
  };

  const handleCity = (e) => {
    const city = e.target.value.trim();
    if (city === "") {
      setIsCityError(true);
      setCityMsg("Please Enter Your City");
      return true; // Indicates there is an error
    } else {
      setIsCityError(false);
      setCityMsg("");
      return false; // Indicates no error
    }
  };
  const handleAddress = (e) => {
    const address = e.target.value.trim();
    if (address === "") {
      setIsAdressError(true);
      setAdressMsg("Please Enter Your Street Address");
      return true; // Indicates there is an error
    } else {
      setIsAdressError(false);
      setAdressMsg("");
      return false; // Indicates no error
    }
  };
  // const handlecityselect = (city) => {
  //   if (!city) {
  //     setIscityselectError(true);
  //     setcityselectMsg("Please select a city.");
  //   } else {
  //     setIscityselectError(false);
  //     setcityselectMsg("");
  //   }
  // };
  const handlecityselect = (city) => {
    if (city == "") {
      setIscityselectError(true);
      setcityselectMsg("Please select a city.");
    } else {
      setIscityselectError(false);
      setcityselectMsg("");
    }
  };
  const handleCardNumber = (e) => {
    const cardNumber = e.target.value.trim();
    if (cardNumber === "") {
      setIsCardNumberError(true);
      setCardNumberMsg("Please enter your card number.");
      return true;
    } else if (cardNumber.length < 16) {
      setIsCardNumberError(true);
      setCardNumberMsg("Card Number must be 16 digits.");
      return true;
    } else {
      setIsCardNumberError(false);
      setCardNumberMsg("");
      return false;
    }
  };

  const handleExpirationDate = () => {
    const { expirationDate } = paymentData;

    // Check if input is empty
    if (expirationDate === "") {
      setIsExpirationError(true);
      setExpirationMsg("Please enter the card expiration date.");
      return true;
    }

    // Validate MM/YY format
    if (!/^\d{2}\/\d{2}$/.test(expirationDate)) {
      setIsExpirationError(true);
      setExpirationMsg("Expiration date must be in MM/YY format.");
      return true;
    }

    // Validate month and date
    const [month, year] = expirationDate.split("/").map(Number);
    if (month < 1 || month > 12) {
      setIsExpirationError(true);
      setExpirationMsg("Expiration month must be between 01 and 12.");
      return true;
    }

    // Check if the date is not in the past
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100; // Get the last two digits of the year
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-based

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      setIsExpirationError(true);
      setExpirationMsg("Expiration date cannot be in the past.");
      return true;
    }

    // If all checks pass
    setIsExpirationError(false);
    setExpirationMsg("");
    return false;
  };

  const handleSecurityCode = () => {
    const { securityCode } = paymentData;

    // Check if the security code is empty
    if (securityCode.trim() === "") {
      setIsSecurityCodeError(true);
      setSecurityCodeMsg("Please enter the security code.");
      return true;
    }

    // Check if the security code contains only digits
    if (!/^\d+$/.test(securityCode)) {
      setIsSecurityCodeError(true);
      setSecurityCodeMsg("Security code must contain only numeric digits.");
      return true;
    }

    // Check if the security code is exactly 3 digits long
    if (securityCode.length !== 3) {
      setIsSecurityCodeError(true);
      setSecurityCodeMsg("Security Code must be exactly 3 digits.");
      return true;
    }

    // If all checks pass
    setIsSecurityCodeError(false);
    setSecurityCodeMsg("");
    return false;
  };

  const [billingData, setBillingData] = useState({
    email: "",
    name: "",
    streetAddress: "",
    city: "",
    cityselect: "",
    state: "",
    zip: "",
  });

  const [shippingData, setShippingData] = useState({
    fullName: "",
    streetAddress: "",
    city: "",
    cityselect: "",
    state: "",
    zip: "",
  });

  const [orderSummary] = useState([
    { item: "Book A", price: 15.99 },
    { item: "Book B", price: 20.49 },
    { item: "Book C", price: 12.75 },
  ]);

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
  });

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingData({ ...billingData, [name]: value });
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingData({ ...shippingData, [name]: value });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Billing Data:", billingData);
  //   console.log("Shipping Data:", shippingData);
  //   console.log("Payment Data:", paymentData);
  // };

  const calculateSubtotal = () =>
    orderSummary.reduce((total, item) => total + item.price, 0);

  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const cityOptions = [
    { value: "", label: "Please select a city" }, // Default option
    { value: "Phnom-Penh", label: "Phnom Penh" },
    { value: "Saigon", label: "Saigon" },
    { value: "Bangkok", label: "Bangkok" },
    { value: "Singapore", label: "Singapore" },
    { value: "Manila", label: "Manila" },
  ];

  const handleSelectChange = (selectedOption) => {
    const selectedCity = selectedOption ? selectedOption.value : "";
    setShippingData((prevState) => ({ ...prevState, city: selectedCity }));
    handleCitySelect(selectedCity); // Trigger validation
  };

  const validateWithTAB = (e) => {
    let isError = null;
    if (e.type === "keydown" && e.keyCode === 9 && e.shiftKey !== true) {
      if (e.target.id === "email") isError = handleEmailValidation(e);
      if (e.target.id === "fullName") isError = handleFullName(e);
      if (e.target.id === "name") isError = handleName(e);
      if (e.target.id === "state") isError = handleState(e);
      if (e.target.id === "state1") isError = handleState1(e);
      if (e.target.id === "zip") isError = handlezip(e);
      if (e.target.id === "city") isError = handleCity(e);
      if (e.target.id === "shippingStreetAddress") isError = handleAddress(e);
      // if(e.target.id === 'cityselect') isError = handlecityselect(e);
      if (e.target.id === "cardNumber") isError = handleCardNumber(e);
      if (e.target.id === "expirationDate") isError = handleExpirationDate(e);
      if (e.target.id === "securityCode") isError = handleSecurityCode(e);
      if (e.target.value === "" || isError) e.preventDefault();
    }
  };
  const validateSelect = (e) => {
    if (
      e.type === "keydown" &&
      e.keyCode === 9 &&
      e.target.id === "cityselect"
    ) {
      const cityselect = shippingData.cityselect; // Get the selected city from the state
      const error = handleCitySelect(cityselect); // Pass the city to validation
      if (!cityselect || error) {
        e.preventDefault(); // Prevent tabbing if validation fails
      }
    }
  };

  const handleCitySelect = (cityselect) => {
    if (cityselect === "") {
      setIscityselectError(true);
      setcityselectMsg("Please select a city.");
      return true; // Return error
    } else {
      setIscityselectError(false);
      setcityselectMsg("");
      return false; // No error
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!billingData.cityselect) {
      setIscityselectError(true);
      setcityselectMsg("Please select a city.");
      return;
    }
    alert("Form submitted successfully!");
  };

  return (
    <div className="w-full p-6 bg-gray-50 pb-10">
      <h1 className="max-w-7xl mx-auto text-black text-2xl font-bold mb-6">Checkout</h1>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section: Checkout and Billing Details */}
        <div>
          {/* Billing Details Section */}
          <div className="bg-white p-6 rounded shadow-md mb-6">
            <h2 className="text-lg text-black font-semibold mb-4">Billing Details</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="custom-label block text-sm font-small"
                >
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={billingData.email}
                  onChange={handleBillingChange}
                  onBlur={handleEmailValidation}
                  onKeyDown={validateWithTAB}
                  className={`w-full p-2 border shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-primary rounded-md ${
                    isEmailError ? "border-primary" : "border-primary"
                  }`}
                  required
                />
                {isEmailError && (
                  <span className="text-red-600 text-sm">{emailMsg}</span>
                )}
              </div>

              <div>
                <label
                  htmlFor="cityselect"
                  className="custom-label block text-sm "
                >
                  City<span className="text-red-600">*</span>
                </label>
                <Select
                  id="cityselect"
                  name="city"
                  options={cityOptions}
                  onChange={handleSelectChange}
                  onBlur={() => handlecityselect(billingData.cityselect)}
                  onKeyDown={(e) => validateSelect(e)}
                  value={cityOptions.find(
                    (option) => option.value === shippingData.cityselect
                  )}
                  placeholder="Select a city"
                  // className={`border rounded-md shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:border-primary focus:ring-primary  ${iscityselect ? "border-primary" : "border-primary"}`}
                  className={`border rounded-md shadow-sm focus:border-none focus:outline-none focus:ring-2 
                    ${iscityselect ? "border-primary" : "border-primary"} 
                    ${shippingData.cityselect ? "bg-primary text-white" : ""}`}
         
                  required
                />
                {iscityselect && (
                  <span className="text-red-600 text-sm">{cityselectMsg}</span>
                )}
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="name" className="custom-label block text-sm ">
                    Name<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={billingData.name}
                    onChange={handleBillingChange}
                    onBlur={handleName}
                    onKeyDown={validateWithTAB}
                    className={`w-full p-2 border shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-primary rounded-md ${
                      isnameError ? "border-primary" : "border-primary"
                    }`}
                    required
                  />
                  {isnameError && (
                    <span className="text-red-600 text-sm">{nameMsg}</span>
                  )}
                </div>

                {/* State/Province Field */}
                <div className="w-1/2">
                  <label
                    htmlFor="state1"
                    className="custom-label block text-sm "
                  >
                    State/Province<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="state1"
                    name="state"
                    value={billingData.state}
                    onChange={handleBillingChange}
                    onBlur={handleState1}
                    onKeyDown={validateWithTAB}
                    className={`w-full p-2 border shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-primary rounded-md ${
                      isstate1 ? "border-primary" : "border-primary"
                    }`}
                    required
                  />
                  {isstate1 && (
                    <span className="text-red-600 text-sm">{state1Msg}</span>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* Shipping Address Section */}
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg text-black font-semibold mb-4">Shipping Address</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="custom-label block text-sm"
                >
                  Full Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={shippingData.fullName}
                  onChange={handleShippingChange}
                  onBlur={handleFullName}
                  onKeyDown={validateWithTAB}
                  className={`w-full p-2 border shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-primary rounded-md ${
                    isFullNameError ? "border-primary" : "border-primary"
                  }`}
                  required
                />
                {isFullNameError && (
                  <span className="text-red-600 text-sm">{fullnameMsg}</span>
                )}
              </div>

              <div>
                <label
                  htmlFor="shippingStreetAddress"
                  className="custom-label block text-sm "
                >
                  Street Address<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="shippingStreetAddress"
                  name="streetAddress"
                  value={shippingData.streetAddress}
                  onChange={handleShippingChange}
                  onBlur={handleAddress}
                  onKeyDown={validateWithTAB}
                  className={`w-full p-2 border shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-primary rounded-md ${
                    isAdress ? "border-primary" : "border-primary"
                  }`}
                  required
                />
                {isAdress && (
                  <span className="text-red-600 text-sm">{AdressMsg}</span>
                )}
              </div>
              <div className="flex gap-4">
                <div className="w-1/3">
                  <label htmlFor="city" className="custom-label block text-sm ">
                    City<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={shippingData.city}
                    onChange={handleShippingChange}
                    onKeyDown={validateWithTAB}
                    onBlur={handleCity}
                    className={`w-full p-2 border shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-primary rounded-md ${
                      isCity ? "border-primary" : "border-primary"
                    }`}
                    required
                  />
                  {isCity && (
                    <span className="text-red-600 text-sm">{City1Msg}</span>
                  )}
                </div>
                <div className="w-1/3">
                  <label
                    htmlFor="state"
                    className="custom-label block text-sm "
                  >
                    State/Province<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={shippingData.state}
                    onChange={handleShippingChange}
                    onBlur={handleState}
                    onKeyDown={validateWithTAB}
                    className={`w-full p-2 border shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-primary rounded-md ${
                      isstateError ? "border-primary" : "border-primary"
                    }`}
                    required
                  />
                  {isstateError && (
                    <span className="text-red-600 text-sm">{stateMsg}</span>
                  )}
                </div>
                <div className="w-1/3">
                  <label htmlFor="zip" className="custom-label block text-sm ">
                    ZIP/Postal Code<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={shippingData.zip}
                    onBlur={handlezip}
                    maxLength={5}
                    onChange={handleShippingChange}
                    onKeyDown={validateWithTAB}
                    className={`w-full p-2 border shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-primary rounded-md ${
                      isZipcode ? "border-primary" : "border-primary"
                    }`}
                    required
                  />
                  {isZipcode && (
                    <span className="text-red-600 text-sm">{ZipcodeMsg}</span>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section: Your Order */}
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-lg text-black font-semibold mb-4">Your Order</h2>
          <div className="space-y-4">
            {orderSummary.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-2"
              >
                <span>{item.item}</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax (10%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-black font-semibold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div>
            <div
              style={{ marginTop: "80px" }}
              className="bg-gray-50 p-4 rounded shadow-md"
            >
              <h2 className="text-lg text-black font-semibold mb-4">Payment Details</h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="cardNumber"
                    className="custom-label block text-sm "
                  >
                    Card Number<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentData.cardNumber}
                    onChange={(e) => {
                      const sanitizedValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                      handlePaymentChange({
                        target: { name: e.target.name, value: sanitizedValue },
                      });
                    }}
                    onBlur={handleCardNumber}
                    onKeyDown={validateWithTAB}
                    maxLength="16"
                    placeholder="1234 5678 9876 5432"
                    className={`w-full p-2 border shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-primary rounded-md ${
                      isCardNumberError ? "border-primary" : "border-primary"
                    }`}
                    required
                  />
                  {isCardNumberError && (
                    <span className="text-red-600 text-sm">
                      {cardNumberMsg}
                    </span>
                  )}
                </div>

                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label
                      htmlFor="expirationDate"
                      className="custom-label block text-sm "
                    >
                      Expiration Date<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="expirationDate"
                      name="expirationDate"
                      value={paymentData.expirationDate}
                      onChange={handlePaymentChange}
                      onBlur={handleExpirationDate}
                      onKeyDown={validateWithTAB}
                      placeholder="MM/YY"
                      maxLength="5"
                      className={`w-full p-2 border shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-primary rounded-md ${
                        isExpirationError ? "border-primary" : "border-primary"
                      }`}
                      required
                    />
                    {isExpirationError && (
                      <span className="text-red-600 text-sm">
                        {expirationMsg}
                      </span>
                    )}
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="securityCode"
                      className="custom-label block text-sm "
                    >
                      Security Code<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="securityCode"
                      name="securityCode"
                      value={paymentData.securityCode}
                      onChange={(e) => {
                        // Allow only numeric input
                        const sanitizedValue = e.target.value.replace(
                          /\D/g,
                          ""
                        );
                        handlePaymentChange({
                          target: {
                            name: e.target.name,
                            value: sanitizedValue,
                          },
                        });
                      }}
                      onKeyDown={validateWithTAB}
                      maxLength="3"
                      placeholder="123"
                      className={`w-full p-2 border shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-primary rounded-md ${
                        isSecurityCodeError ? "border-primary" : "border-primary"
                      }`}
                      required
                    />
                    {isSecurityCodeError && (
                      <span className="text-red-600 text-sm">
                        {securityCodeMsg}
                      </span>
                    )}
                  </div>
                </div>
              </form>
            </div>
            <button
              onClick={handleSubmit}
              className="mt-6 w-full p-3 bg-primary text-tertiary font-semibold rounded hover:bg-secondary hover:text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
