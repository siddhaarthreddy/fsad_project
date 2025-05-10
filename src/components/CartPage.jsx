import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: '',
    address: '',
    city: 'Ahmedabad',
    state: 'Gujarat',
    zip: '',
    country: 'India'
  });
  const navigate = useNavigate();

  const [deliveryAddresses, setDeliveryAddresses] = useState(() => {
    const savedAddresses = localStorage.getItem('deliveryAddresses');
    return savedAddresses ? JSON.parse(savedAddresses) : [
      {
        id: 1,
        name: "Home",
        address: "123 Main St, Ambawadi",
        city: "Ahmedabad",
        state: "Gujarat",
        zip: "380015",
        country: "India"
      },
      {
        id: 2,
        name: "Work",
        address: "456 Business Park, Navrangpura",
        city: "Ahmedabad",
        state: "Gujarat",
        zip: "380009",
        country: "India"
      }
    ];
  });

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('deliveryAddresses', JSON.stringify(deliveryAddresses));
  }, [deliveryAddresses]);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = Number(item.price.replace(/[^0-9.-]+/g,""));
      return total + (price * item.quantity);
    }, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const deliveryFee = 21;
    const platformFee = 5;
    const taxes = 33;
    return subtotal + deliveryFee + platformFee + taxes;
  };

  const handleQuantityChange = (itemId, change) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item => {
        if (item.id === itemId) {
          const newQuantity = item.quantity + change;
          return newQuantity < 1 ? item : { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item.quantity > 0);
      
      localStorage.setItem('cart', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
  };

  const handleProceedToCheckout = () => {
    if (!selectedAddress) {
      alert("Please select a delivery address");
      return;
    }
    
    navigate('/checkout', { 
      state: { 
        deliveryAddress: selectedAddress,
        subtotal: calculateSubtotal(),
        deliveryFee: 21,
        platformFee: 5,
        taxes: 33,
        totalAmount: calculateTotal()
      } 
    });
  };

  const handleAddAddressClick = () => {
    setShowAddAddressForm(true);
  };

  const handleNewAddressChange = (e) => {
    const { name, value } = e.target;
    setNewAddress(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddNewAddress = (e) => {
    e.preventDefault();
    const newId = Math.max(...deliveryAddresses.map(a => a.id), 0) + 1;
    const addressToAdd = {
      ...newAddress,
      id: newId
    };
    
    setDeliveryAddresses(prev => [...prev, addressToAdd]);
    setSelectedAddress(addressToAdd);
    setShowAddAddressForm(false);
    setNewAddress({
      name: '',
      address: '',
      city: 'Ahmedabad',
      state: 'Gujarat',
      zip: '',
      country: 'India'
    });
  };

  return (
    <div style={{ backgroundColor: '#FFF5E5', minHeight: '100vh', padding: '20px' }}>
      <div className="container">
        <button 
          onClick={() => navigate(-1)} 
          className="btn mb-4"
          style={{ backgroundColor: '#B02A2A', color: 'white' }}
        >
          ← Back to Menu
        </button>
        
        <h1 style={{ color: '#B02A2A' }}>Your Cart</h1>
        
        <div className="row">
          <div className="col-md-8">
            <div className="card mb-4 border-0 shadow-sm">
              <div className="card-body">
                {cartItems.length === 0 ? (
                  <p>Your cart is empty</p>
                ) : (
                  <div>
                    {cartItems.map((item, index) => (
                      <div key={index} className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
                        <div>
                          <h5>{item.name}</h5>
                          <p className="text-muted mb-0">{item.restaurant}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="mx-3">₹{Number(item.price.replace(/[^0-9.-]+/g,"")) * item.quantity}</span>
                          <div className="quantity-control d-flex align-items-center">
                            <button 
                              className="btn btn-sm"
                              style={{ 
                                backgroundColor: '#B02A2A', 
                                color: 'white',
                                width: '30px'
                              }}
                              onClick={() => handleQuantityChange(item.id, -1)}
                            >
                              -
                            </button>
                            <span className="mx-2">{item.quantity}</span>
                            <button 
                              className="btn btn-sm"
                              style={{ 
                                backgroundColor: '#B02A2A', 
                                color: 'white',
                                width: '30px'
                              }}
                              onClick={() => handleQuantityChange(item.id, 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-4">Bill Details</h5>
                
                <div className="d-flex justify-content-between mb-2">
                  <span>Item Total</span>
                  <span>₹{calculateSubtotal()}</span>
                </div>
                
                <div className="d-flex justify-content-between mb-2">
                  <span>Delivery Fee</span>
                  <span>₹21</span>
                </div>
                
                <div className="d-flex justify-content-between mb-2">
                  <span>Platform Fee</span>
                  <span>₹5</span>
                </div>
                
                <div className="d-flex justify-content-between mb-3">
                  <span>GST and Restaurant Charges</span>
                  <span>₹33</span>
                </div>
                
                <div className="border-top pt-3">
                  <div className="d-flex justify-content-between fw-bold">
                    <span>Total</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                </div>
                
                <button 
                  className="btn w-100 mt-4"
                  style={{ 
                    backgroundColor: '#B02A2A', 
                    color: 'white'
                  }}
                  onClick={handleProceedToCheckout}
                  disabled={cartItems.length === 0}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 style={{ color: '#B02A2A' }}>Choose Delivery Address</h3>
            {!showAddAddressForm && (
              <button 
                className="btn btn-outline-danger"
                onClick={handleAddAddressClick}
              >
                + Add New Address
              </button>
            )}
          </div>
          
          {showAddAddressForm ? (
            <div className="card mb-4 border-danger">
              <div className="card-body">
                <h5 className="card-title">Add New Address</h5>
                <form onSubmit={handleAddNewAddress}>
                  <div className="mb-3">
                    <label className="form-label">Address Name (e.g., Home, Work)</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={newAddress.name}
                      onChange={handleNewAddressChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Full Address</label>
                    <textarea
                      className="form-control"
                      name="address"
                      value={newAddress.address}
                      onChange={handleNewAddressChange}
                      required
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">City</label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={newAddress.city}
                        onChange={handleNewAddressChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">State</label>
                      <input
                        type="text"
                        className="form-control"
                        name="state"
                        value={newAddress.state}
                        onChange={handleNewAddressChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">ZIP Code</label>
                      <input
                        type="text"
                        className="form-control"
                        name="zip"
                        value={newAddress.zip}
                        onChange={handleNewAddressChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        name="country"
                        value={newAddress.country}
                        onChange={handleNewAddressChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-outline-secondary me-2"
                      onClick={() => setShowAddAddressForm(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-danger"
                    >
                      Save Address
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {deliveryAddresses.map((address) => (
                <div key={address.id} className="col">
                  <div 
                    className={`card h-100 ${selectedAddress?.id === address.id ? 'border-danger' : ''}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleAddressSelect(address)}
                  >
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5>{address.name}</h5>
                        {selectedAddress?.id === address.id && (
                          <span className="badge bg-danger">Selected</span>
                        )}
                      </div>
                      <p className="mb-1">{address.address}</p>
                      <p className="mb-1">{address.city}, {address.state} - {address.zip}</p>
                      <p className="mb-0">{address.country}</p>
                    </div>
                    <div className="card-footer bg-white">
                      <button 
                        className="btn btn-sm w-100"
                        style={{ 
                          backgroundColor: selectedAddress?.id === address.id ? '#28a745' : '#B02A2A', 
                          color: 'white'
                        }}
                      >
                        {selectedAddress?.id === address.id ? 'Delivering Here' : 'SELECT'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;