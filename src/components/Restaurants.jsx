import React from 'react';

export const topRestaurants = [
  {
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
    "name": "Pizza Hut",
    "rating": "4.7",
    "city": "Mumbai",
    "description": "Pizzas"
  },
  {
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wnqlcvowxdy0afkimvfs",
    "name": "Amritsar dhaba",
    "rating": "4.9",
    "city": "Mumbai",
    "description": "Biryani"
  },
  {
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hqrwnitwicuslnroafmo",
    "name": "Farm Villa Restaurant",
    "rating": "4.7",
    "city": "Mumbai",
    "description": "Pastas, Chinese, North Indian"
  },
  {
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/u74ybd9c5tdygvjnusf8",
    "name": "Kitchen 213",
    "rating": "4.9",
    "city": "Mumbai",
    "description": "Chinese, Biryani"
  },
  {
    "imageUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ewqufp0i3gcr14kw165o",
    "name": "Dosa Plaza",
    "rating": "5.0",
    "city": "Mumbai",
    "description": "South Indian"
  }
];

const Restaurants = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="mb-4 text-dark fw-bold">Top Restaurants</h2>
      <div className="row justify-content-center">
        {topRestaurants.map((restaurant, index) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4" key={index}>
            <div
              className="card shadow"
              style={{
                height: '100%',
                borderRadius: '20px 0 20px 0', // unique curved corners
                overflow: 'hidden'
              }}
            >
              <img
                src={restaurant.imageUrl}
                alt={restaurant.name}
                style={{
                  height: '150px',
                  objectFit: 'cover',
                  width: '100%',
                }}
              />
              <div className="card-body d-flex flex-column justify-content-between" style={{ height: '150px' }}>
                <div>
                  <h6 className="card-title fw-bold mb-1">{restaurant.name}</h6>
                  <p className="card-text text-muted mb-1" style={{ fontSize: '0.85rem' }}>{restaurant.description}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">{restaurant.city}</small>
                  <span className="badge bg-warning text-dark">⭐ {restaurant.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
