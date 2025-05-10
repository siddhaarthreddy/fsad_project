import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCreditCard, FaMoneyBillWave, FaMobileAlt, FaQrcode, FaMapMarkerAlt, FaMotorcycle, FaBoxOpen, FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { 
    deliveryAddress,
    subtotal = 0,
    deliveryFee = 0,
    platformFee = 0,
    taxes = 0,
    totalAmount = 0
  } = location.state || {};

  const [email, setEmail] = useState('');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: ''
  });
  const [cardholderName, setCardholderName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [upiId, setUpiId] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [trackingStatus, setTrackingStatus] = useState('preparing');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (trackingStatus === 'dispatched') {
      setProgress(50);
    } else if (trackingStatus === 'delivered') {
      setProgress(100);
    }
  }, [trackingStatus]);

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  const handlePayment = async () => {
    if (paymentMethod === 'card') {
      if (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvc || !cardholderName) {
        alert('Please fill all card details');
        return;
      }
    } else if (paymentMethod === 'upi') {
      if (!upiId && !showQR) {
        alert('Please enter UPI ID or scan QR code');
        return;
      }
    }

    // Generate random order ID
    const newOrderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newOrderId);
    
    // Simulate payment processing
    setTimeout(() => {
      setOrderSuccess(true);
      setProgress(0);
      
      // Animate progress to 33% (preparing)
      setTimeout(() => setProgress(33), 500);
      
      // Update to dispatched after 3 seconds
      setTimeout(() => {
        setTrackingStatus('dispatched');
        // Animate progress to 66%
        setTimeout(() => setProgress(66), 500);
      }, 3000);
      
      // Update to delivered after 5 more seconds
      setTimeout(() => {
        setTrackingStatus('delivered');
        // Animate progress to 100%
        setTimeout(() => setProgress(100), 500);
      }, 8000);
    }, 1500);
  };

  if (orderSuccess) {
    return (
      <div className="container py-5" style={{ minHeight: '70vh' }}>
        <div className="text-center mb-5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              background: '#4CAF50',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              color: 'white'
            }}
          >
            <FaCheck size={40} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ color: '#4CAF50' }}
            className="mt-4"
          >
            Order Successful!
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="lead"
          >
            Thank you for your order
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-muted"
          >
            Order ID: {orderId}
          </motion.p>
        </div>

        {/* Order Tracking Section */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title mb-4">Order Tracking</h5>
            
            <div className="tracking-steps">
              {/* Step 1: Preparing */}
              <div className="step">
                <motion.div
                  className="step-icon"
                  initial={{ backgroundColor: '#e9ecef', color: '#6c757d' }}
                  animate={{ 
                    backgroundColor: trackingStatus === 'preparing' ? '#B02A2A' : 
                                  trackingStatus === 'dispatched' || trackingStatus === 'delivered' ? '#4CAF50' : '#e9ecef',
                    color: 'white'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FaBoxOpen />
                </motion.div>
                <motion.div
                  className="step-label"
                  initial={{ color: '#6c757d' }}
                  animate={{ 
                    color: trackingStatus === 'preparing' ? '#B02A2A' : 
                          trackingStatus === 'dispatched' || trackingStatus === 'delivered' ? '#4CAF50' : '#6c757d',
                    fontWeight: trackingStatus === 'preparing' ? 'bold' : 'normal'
                  }}
                >
                  Preparing
                </motion.div>
              </div>
              
              {/* Progress Line */}
              <div className="progress-line-container">
                <motion.div 
                  className="progress-line"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              
              {/* Step 2: On the way */}
              <div className="step">
                <motion.div
                  className="step-icon"
                  initial={{ backgroundColor: '#e9ecef', color: '#6c757d' }}
                  animate={{ 
                    backgroundColor: trackingStatus === 'dispatched' ? '#B02A2A' : 
                                  trackingStatus === 'delivered' ? '#4CAF50' : '#e9ecef',
                    color: trackingStatus === 'dispatched' || trackingStatus === 'delivered' ? 'white' : '#6c757d'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FaMotorcycle />
                </motion.div>
                <motion.div
                  className="step-label"
                  initial={{ color: '#6c757d' }}
                  animate={{ 
                    color: trackingStatus === 'dispatched' ? '#B02A2A' : 
                          trackingStatus === 'delivered' ? '#4CAF50' : '#6c757d',
                    fontWeight: trackingStatus === 'dispatched' ? 'bold' : 'normal'
                  }}
                >
                  On the way
                </motion.div>
              </div>
              
              {/* Progress Line */}
              <div className="progress-line-container">
                <motion.div 
                  className="progress-line"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress > 50 ? progress - 50 : 0}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              
              {/* Step 3: Delivered */}
              <div className="step">
                <motion.div
                  className="step-icon"
                  initial={{ backgroundColor: '#e9ecef', color: '#6c757d' }}
                  animate={{ 
                    backgroundColor: trackingStatus === 'delivered' ? '#4CAF50' : '#e9ecef',
                    color: trackingStatus === 'delivered' ? 'white' : '#6c757d'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FaCheck />
                </motion.div>
                <motion.div
                  className="step-label"
                  initial={{ color: '#6c757d' }}
                  animate={{ 
                    color: trackingStatus === 'delivered' ? '#4CAF50' : '#6c757d',
                    fontWeight: trackingStatus === 'delivered' ? 'bold' : 'normal'
                  }}
                >
                  Delivered
                </motion.div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {trackingStatus === 'preparing' && (
                <div className="alert alert-info mt-3">
                  Your order is being prepared. Estimated delivery time: 30-45 minutes.
                </div>
              )}
              
              {trackingStatus === 'dispatched' && (
                <div className="alert alert-warning mt-3">
                  Your order is on the way! Our delivery partner will arrive soon.
                </div>
              )}
              
              {trackingStatus === 'delivered' && (
                <div className="alert alert-success mt-3">
                  Your order has been delivered. Enjoy your meal!
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Delivery Details */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title mb-3">Delivery Details</h5>
            <div className="d-flex align-items-start">
              <FaMapMarkerAlt className="me-3 mt-1" style={{ color: '#B02A2A' }} />
              <div>
                <p className="mb-1"><strong>{deliveryAddress?.name}</strong></p>
                <p className="mb-1">{deliveryAddress?.address}</p>
                <p className="mb-1">{deliveryAddress?.city}, {deliveryAddress?.state} - {deliveryAddress?.zip}</p>
                <p className="mb-0">{deliveryAddress?.country}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <button 
            onClick={() => navigate('/orders')}
            className="btn btn-outline-secondary"
          >
            View All Orders
          </button>
          <button 
            onClick={() => navigate('/')}
            className="btn"
            style={{ backgroundColor: '#B02A2A', color: 'white' }}
          >
            Back to Home
          </button>
        </div>

        <style jsx>{`
          .tracking-steps {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            margin-bottom: 20px;
          }
          
          .step {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            z-index: 1;
            width: 33%;
          }
          
          .step-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 8px;
            font-size: 18px;
          }
          
          .step-label {
            font-size: 0.9rem;
            text-align: center;
          }
          
          .progress-line-container {
            flex: 1;
            height: 4px;
            background-color: #e9ecef;
            position: relative;
            margin: 0 -10px;
          }
          
          .progress-line {
            height: 100%;
            background-color: #4CAF50;
            position: absolute;
            left: 0;
            top: 0;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="container py-5" style={{ maxWidth: '600px' }}>
      <div className="card mb-4 border-0 shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-3">Order Summary</h5>
          
          <div className="d-flex justify-content-between mb-2">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          
          <div className="d-flex justify-content-between mb-2">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee}</span>
          </div>
          
          <div className="d-flex justify-content-between mb-2">
            <span>Platform Fee</span>
            <span>₹{platformFee}</span>
          </div>
          
          <div className="d-flex justify-content-between mb-3">
            <span>Taxes</span>
            <span>₹{taxes}</span>
          </div>
          
          <div className="border-top pt-3">
            <div className="d-flex justify-content-between fw-bold">
              <span>Total Amount</span>
              <span>₹{totalAmount}</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mb-4" style={{ color: '#B02A2A' }}>₹{totalAmount}</h2>
      <hr className="mb-4" />

      <div className="mb-4">
        <h4 className="mb-3">Payment Method</h4>
        <div className="btn-group w-100" role="group">
          <button
            type="button"
            className={`btn ${paymentMethod === 'card' ? 'btn-danger' : 'btn-outline-danger'}`}
            onClick={() => {
              setPaymentMethod('card');
              setShowQR(false);
            }}
          >
            <FaCreditCard className="me-2" /> Card
          </button>
          <button
            type="button"
            className={`btn ${paymentMethod === 'upi' ? 'btn-danger' : 'btn-outline-danger'}`}
            onClick={() => {
              setPaymentMethod('upi');
              setShowQR(false);
            }}
          >
            <FaMobileAlt className="me-2" /> UPI
          </button>
          <button
            type="button"
            className={`btn ${paymentMethod === 'cod' ? 'btn-danger' : 'btn-outline-danger'}`}
            onClick={() => {
              setPaymentMethod('cod');
              setShowQR(false);
            }}
          >
            <FaMoneyBillWave className="me-2" /> Cash on Delivery
          </button>
        </div>
      </div>

      <div className="mb-4">
        <h5 className="mb-3">Email</h5>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {paymentMethod === 'card' && (
        <>
          <div className="mb-4">
            <h5 className="mb-3">Card Information</h5>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Card Number"
              name="number"
              value={cardDetails.number}
              onChange={handleCardChange}
              maxLength="16"
            />
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="MM/YY"
                  name="expiry"
                  value={cardDetails.expiry}
                  onChange={handleCardChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="CVC"
                  name="cvc"
                  value={cardDetails.cvc}
                  onChange={handleCardChange}
                  maxLength="3"
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h5 className="mb-3">Cardholder Name</h5>
            <input
              type="text"
              className="form-control"
              placeholder="Full name on card"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
            />
          </div>
        </>
      )}

      {paymentMethod === 'upi' && (
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">UPI Payment</h5>
            <button
              className={`btn btn-sm ${showQR ? 'btn-danger' : 'btn-outline-danger'}`}
              onClick={() => setShowQR(!showQR)}
            >
              <FaQrcode className="me-1" /> {showQR ? 'Hide QR' : 'Show QR'}
            </button>
          </div>
          
          {showQR ? (
            <div className="text-center">
              <div className="card p-3 mb-3">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=foodapp@razorpay&pn=FoodApp&am=${totalAmount}&cu=INR" 
                  alt="UPI QR Code" 
                  className="img-fluid mb-2"
                  style={{ maxWidth: '200px', margin: '0 auto' }}
                />
                <p className="mb-1">Scan this QR code with any UPI app</p>
                <p className="text-muted small">Amount: ₹{totalAmount}</p>
              </div>
              <button 
                className="btn btn-outline-secondary w-100"
                onClick={() => setShowQR(false)}
              >
                Enter UPI ID Instead
              </button>
            </div>
          ) : (
            <>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="yourname@upi"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
              <small className="text-muted">e.g. yourname@oksbi, yourname@ybl</small>
              <button 
                className="btn btn-outline-secondary w-100 mt-2"
                onClick={() => setShowQR(true)}
              >
                <FaQrcode className="me-1" /> Pay with QR Code Instead
              </button>
            </>
          )}
        </div>
      )}

      {paymentMethod === 'cod' && (
        <div className="alert alert-info">
          <FaMoneyBillWave className="me-2" />
          Pay cash when your order arrives
        </div>
      )}

      {deliveryAddress && (
        <div className="mb-4">
          <h5 className="mb-3">Delivery Address</h5>
          <div className="card p-3">
            <p className="mb-1"><strong>{deliveryAddress.name}</strong></p>
            <p className="mb-1">{deliveryAddress.address}</p>
            <p className="mb-1">{deliveryAddress.city}, {deliveryAddress.state} - {deliveryAddress.zip}</p>
            <p className="mb-0">{deliveryAddress.country}</p>
          </div>
        </div>
      )}

      <button
        className="btn w-100 py-3 mb-3"
        style={{ backgroundColor: '#B02A2A', color: 'white' }}
        onClick={handlePayment}
      >
        {paymentMethod === 'cod' ? `Confirm Order` : `Pay ₹${totalAmount}`}
      </button>

      <div className="text-center text-muted small">
        <p>Powered by <strong>Razorpay</strong></p>
        <p className="mb-0">Terms • Privacy</p>
      </div>
    </div>
  );
};

export default CheckoutPage;