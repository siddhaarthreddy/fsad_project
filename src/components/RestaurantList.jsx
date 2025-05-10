import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const restaurants = [
  {
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
    "name": "Pizza Hut",
    "rating": "4.7",
    "city": "Mumbai",
    "description": "Pizzas",
    "type": "italian"
  },
  {
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wnqlcvowxdy0afkimvfs",
    "name": "Amritsar dhaba",
    "rating": "4.9",
    "city": "Mumbai",
    "description": "Biryani",
    "type": "north-indian"
  },
  {
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hqrwnitwicuslnroafmo",
    "name": "Farm Villa Restaurant",
    "rating": "4.7",
    "city": "Mumbai",
    "description": "Pastas, Chinese, North Indian",
    "type": "multi-cuisine"
  },
  {
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/u74ybd9c5tdygvjnusf8",
    "name": "Kitchen 213",
    "rating": "4.9",
    "city": "Mumbai",
    "description": "Chinese, Biryani",
    "type": "chinese"
  },
  {
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ewqufp0i3gcr14kw165o",
    "name": "Dosa Plaza",
    "rating": "5.0",
    "city": "Mumbai",
    "description": "South Indian",
    "type": "south-indian"
  },
  {
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ewqcshylqbj9urqid8gw",
    "name": "The Belgian Waffle Co.",
    "rating": "4.8",
    "city": "Mumbai",
    "description": "Waffles, Desserts",
    "type": "desserts"
  },
  {
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ifznwbhinqkdtg3xhsbo",
    "name": "Brown Burger Co.",
    "rating": "4.1",
    "city": "Mumbai",
    "description": "Gourmet Burgers",
    "type": "american"
  },
  {
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/82d66b90554a59d340159fe81d882069",
    "name": "Dalmia Fastfood",
    "rating": "3.8",
    "city": "Mumbai",
    "description": "Street Food, Snacks",
    "type": "street-food"
  },
  {
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85ccae4e3576f9330af102c46ca85395",
    "name": "Baskin Robbins",
    "rating": "4.5",
    "city": "Mumbai",
    "description": "Ice Cream Desserts",
    "type": "ice-cream"
  },
  {
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wx6tdtmvrfwvpyctv170",
    "name": "Cafe Coffee Day",
    "rating": "4.4",
    "city": "Mumbai",
    "description": "Coffee & Beverages",
    "type": "cafe"
  },
  {
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e87a90ce3406b8c147706cfdf2f1253",
    "name": "Apna Fal",
    "rating": "4.2",
    "city": "Mumbai",
    "description": "Fresh Juices & Smoothies",
    "type": "healthy"
  },
  {
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/022819ea1cc0d6e807a57881d99a181a",
    "name": "N K Omlette",
    "rating": "4.0",
    "city": "Mumbai",
    "description": "Egg Specialties",
    "type": "breakfast"
  },
  {
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/7226b308697a1d977967b0a5090f5404",
    "name": "Saawariya Pavbhaji",
    "rating": "4.3",
    "city": "Mumbai",
    "description": "Mumbai Street Food",
    "type": "local"
  },
  {
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5e1592cfee5b4f0a349b6bc1be2b5994",
    "name": "Burger Station",
    "rating": "4.0",
    "city": "Mumbai",
    "description": "Classic Burgers",
    "type": "fast-food"
  }
];

const RestaurantList = () => {
  const [selected, setSelected] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const handleClose = () => setSelected(null);
  const getCartCount = () => cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleCardClick = (restaurant) => {
    navigate(`/menu/${restaurant.name.replace(/\s+/g, '-').toLowerCase()}`);
  };

  return (
    <>
      {/* Navigation Bar with Home Icon */}
      <nav className="navbar custom-navbar">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white d-flex align-items-center">
            <span className="material-symbols-outlined me-2">home</span>
            Click2Eat
          </Link>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light me-2" type="submit">
              Search
            </button>
            <Link to="/restaurants" className="btn btn-danger me-2">
              Restaurants
            </Link>
           
            <div style={{ position: 'relative', marginLeft: '8px' }}>
              <Link to="/cart" className="btn btn-link text-white p-0">
                <span style={{
                  fontFamily: '"Material Symbols Outlined"',
                  fontSize: '28px',
                  WebkitFontSmoothing: 'antialiased'
                }}>
                  shopping_cart
                </span>
                {getCartCount() > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-5px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px'
                  }}>
                    {getCartCount()}
                  </span>
                )}
              </Link>
            </div>
          </form>
        </div>
      </nav>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      {/* Restaurant List Content */}
      <div style={{ backgroundColor: '#B02A2A', minHeight: '100vh', padding: '40px 0' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-4" style={{ color: '#FFF5E5' }}>
            Restaurants
          </h2>
          <div className="row g-4">
            {restaurants.map((restaurant, index) => (
              <div className="col-12 col-sm-6 col-md-4" key={index}>
                <div
                  className="card h-100 shadow-sm"
                  onClick={() => handleCardClick(restaurant)}
                  style={{ cursor: 'pointer', borderRadius: '12px' }}
                >
                  <img
                    src={restaurant.imageUrl}
                    alt={restaurant.name}
                    className="card-img-top"
                    style={{ height: '180px', objectFit: 'cover' }}
                  />
                  <div className="card-body" style={{ backgroundColor: '#FFF5E5' }}>
                    <h5 className="card-title">{restaurant.name}</h5>
                    <p className="card-text text-muted">{restaurant.city}</p>
                    <p className="text-warning">⭐ {restaurant.rating}</p>
                    <p className="card-text">{restaurant.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Restaurant Details */}
        {selected && (
          <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" style={{ color: '#FFF5E5' }}>
                    {selected.name}
                  </h5>
                  <button type="button" className="btn-close" onClick={handleClose}></button>
                </div>
                <div className="modal-body">
                  <img
                    src={selected.imageUrl}
                    alt={selected.name}
                    className="img-fluid mb-3"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <p><strong>City:</strong> {selected.city}</p>
                  <p><strong>Rating:</strong> {selected.rating}</p>
                  <p>{selected.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RestaurantList;