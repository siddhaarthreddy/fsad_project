import React from 'react';

export const topMeels = [
  {
    image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
    title: "Pizza"
  },
  {
    image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
    title: "Burger"
  },
  {
    image: "https://cdn.pixabay.com/photo/2019/04/08/18/35/sandwich-4112566_640.jpg",
    title: "Sandwich"
  },
  {
    image: "https://cdn.pixabay.com/photo/2015/10/01/14/26/fried-rice-967081_640.jpg",
    title: "Fried Rice"
  },
  {
    image: "https://cdn.pixabay.com/photo/2016/03/27/22/38/cake-1284548_640.jpg",
    title: "Cake"
  },
  {
    image: "https://cdn.pixabay.com/photo/2022/06/14/18/57/chicken-biryani-7262650_640.jpg",
    title: "Biryani"
  },
  {
    image: "https://cdn.pixabay.com/photo/2012/07/09/07/16/thali-51996_1280.jpg",
    title: "Thali"
  },
  {
    image: "https://images.pexels.com/photos/4331490/pexels-photo-4331490.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "North Indian Food"
  },
  {
    image: "https://cdn.pixabay.com/photo/2017/08/25/15/10/egg-roll-2680478_640.jpg",
    title: "Rolls"
  },
  {
    image: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Chiken"
  },
  {
    image: "https://images.pexels.com/photos/2764905/pexels-photo-2764905.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Noodles"
  },
  {
    image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Dosa"
  }
];

const Topmeals = () => {
    return (
      <div className="container text-center my-5">
        <h2 className="mb-4 text-dark fw-bold">Top Meals</h2>  {/* Improved visibility */}
        <div className="row justify-content-center">
          {topMeels.map((meal, index) => (
            <div className="col-6 col-sm-4 col-md-2 mb-4" key={index}>
              <img
                src={meal.image}
                alt={meal.title}
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '3px solid white',
                  boxShadow: '0 0 10px rgba(0,0,0,0.5)'
                }}
              />
              <p className="mt-2 fw-medium">{meal.title}</p>  {/* Slightly bolder text */}
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Topmeals;
