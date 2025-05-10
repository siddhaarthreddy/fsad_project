import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { restaurantMenus } from './restaurantData';
import { FaShoppingCart } from 'react-icons/fa';

const MenuPage = () => {
  const { restaurantName } = useParams();
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState({});
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const formattedName = restaurantName
    .replace(/-/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const findMenu = (name) => {
    if (restaurantMenus[name]) return restaurantMenus[name];
    
    const variations = [
      name.replace("'s", ""),
      name.replace(" Dhaba", " dhaba"),
      name + "s",
      name.replace(" ", "")
    ];
    
    for (const variation of variations) {
      if (restaurantMenus[variation]) {
        return restaurantMenus[variation];
      }
    }
    
    return null;
  };

  const menu = findMenu(formattedName);

  const handleQuantityChange = (itemId, change) => {
    setQuantities(prev => {
      const currentQuantity = prev[itemId] || 0;
      const newQuantity = currentQuantity + change;
      
      if (newQuantity < 0) return prev;
      
      return {
        ...prev,
        [itemId]: newQuantity
      };
    });
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 1;
    
    if (quantity > 0) {
      setCartItems(prevItems => {
        const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
        
        let newItems;
        if (existingItem) {
          newItems = prevItems.map(cartItem =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + quantity }
              : cartItem
          );
        } else {
          newItems = [
            ...prevItems,
            {
              ...item,
              quantity: quantity,
              restaurant: formattedName
            }
          ];
        }
        
        localStorage.setItem('cart', JSON.stringify(newItems));
        return newItems;
      });
      
      setQuantities(prev => ({ ...prev, [item.id]: 0 }));
    }
  };

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  if (!menu) {
    return (
      <div style={{ backgroundColor: '#FFF5E5', minHeight: '100vh', padding: '20px' }}>
        <div className="container">
          <button 
            onClick={() => navigate(-1)} 
            className="btn btn-secondary mb-4"
            style={{ backgroundColor: '#B02A2A', borderColor: '#B02A2A' }}
          >
            ← Back to Restaurants
          </button>
          <div className="alert alert-danger">
            <h2>Menu not found for: {formattedName}</h2>
            <p className="mt-3">Available restaurants:</p>
            <ul>
              {Object.keys(restaurantMenus).map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#FFF5E5', minHeight: '100vh', padding: '20px 0' }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <button 
            onClick={() => navigate(-1)} 
            className="btn"
            style={{ backgroundColor: '#B02A2A', color: 'white' }}
          >
            ← Back to Restaurants
          </button>
          
          <button 
            onClick={() => navigate('/cart')} 
            className="btn position-relative"
            style={{ backgroundColor: '#B02A2A', color: 'white' }}
          >
            <FaShoppingCart />
            {totalCartItems > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalCartItems}
              </span>
            )}
          </button>
        </div>
        
        {/* Restaurant Header with Larger Image */}
        <div className="card mb-4 border-0 shadow-sm overflow-hidden">
          <div className="row g-0">
            {menu.restaurantImage && (
              <div className="col-md-4">
                <img 
                  src={menu.restaurantImage} 
                  alt={formattedName}
                  className="img-fluid h-100"
                  style={{ 
                    objectFit: 'cover', 
                    minHeight: '300px',
                    maxHeight: '400px'
                  }}
                />
              </div>
            )}
            <div className={menu.restaurantImage ? "col-md-8" : "col-12"}>
              <div className="card-body p-4">
                <h1 className="mb-3" style={{ color: '#B02A2A' }}>{formattedName}</h1>
                <div className="d-flex flex-wrap gap-3">
                  <span className="badge bg-secondary">⭐ {menu.avgRating || '4.5+'}</span>
                  <span className="badge bg-light text-dark">🕒 30-45 mins</span>
                  <span className="badge bg-light text-dark">💵 Cash/Card</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="list-group sticky-top" style={{ top: '20px' }}>
              {menu.categories.map((category, index) => (
                <a 
                  key={index} 
                  href={`#${category.name.replace(/\s+/g, '-').toLowerCase()}`}
                  className="list-group-item list-group-item-action"
                  style={{ 
                    backgroundColor: '#FFF5E5',
                    borderColor: '#B02A2A',
                    color: '#B02A2A'
                  }}
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-md-9">
            {menu.categories.map((category, index) => (
              <section 
                key={index} 
                id={category.name.replace(/\s+/g, '-').toLowerCase()}
                className="mb-5"
              >
                <h2 className="mb-4 pb-2 border-bottom" style={{ color: '#B02A2A' }}>
                  {category.name}
                </h2>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  {menu.items[category.name].map((item) => (
                    <div key={item.id} className="col">
                      <div className="card h-100 shadow-sm border-0">
                        {/* Larger Item Image */}
                        {item.image && (
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="card-img-top"
                            style={{ 
                              height: '250px',
                              objectFit: 'cover',
                              borderTopLeftRadius: '0.375rem',
                              borderTopRightRadius: '0.375rem'
                            }}
                          />
                        )}
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text text-success fw-bold mb-0">{item.price}</p>
                          </div>
                          {item.originalPrice && (
                            <p className="card-text text-muted text-decoration-line-through mb-1">
                              {item.originalPrice}
                            </p>
                          )}
                          <p className="card-text text-muted">{item.description}</p>
                        </div>
                        <div className="card-footer bg-white border-0 pt-0">
                          <div className="d-flex align-items-center justify-content-between">
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
                              <span className="mx-2">{quantities[item.id] || 0}</span>
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
                            <button 
                              className="btn btn-sm"
                              style={{ 
                                backgroundColor: '#B02A2A', 
                                color: 'white',
                                minWidth: '100px'
                              }}
                              onClick={() => handleAddToCart(item)}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;