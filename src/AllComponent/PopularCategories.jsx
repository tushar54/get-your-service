import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/bannarphoto/housecleaning.jpg'
import img1 from '../assets/bannarphoto/electric.jpg'
import img2 from '../assets/bannarphoto/furniture.jpg'
import img3 from '../assets/bannarphoto/machanic.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

const PopularCategories = () => {
   useEffect(() => {
              AOS.init({
                duration: 1000, // Animation duration in milliseconds
                offset: 50,     // Offset (in px) from the original trigger point
                easing: "ease-in-out", // Animation easing function
                once: false,     // Whether animation should happen only once
              });
            }, []);

  const categories = [
    { id: 1, name: "House Cleaning", providers: "4,982 Providers", image: img },
    { id: 2, name: "Electricity Services", providers: "4,982 Providers", image: img1 },
    { id: 3, name: "Furniture Replace", providers: "4,982 Providers", image: img2 },
    { id: 4, name: "Mechanic Zone", providers: "4,982 Providers", image: img3 },
    { id: 5, name: "House Cleaning", providers: "4,982 Providers", image: img },
    { id: 6, name: "Electricity Services", providers: "4,982 Providers", image: img1 },
    { id: 7, name: "Furniture Replace", providers: "4,982 Providers", image: img2 },
    { id: 8, name: "Mechanic Zone", providers: "4,982 Providers", image: img3 },
    
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Popular Categories</h2>
          <Link to={'/allServices'} className="btn bg-green-500 text-white ">Explore More</Link>
        </div>
        <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div data-aos="fade-right"
              key={category.id}
              className="card shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-base-100 border border-gray-200"
            >
              <figure className="p-4">
                <img src={category.image} alt={category.name} className="w-20 h-20 mx-auto rounded-md" />
              </figure>
              <div className="card-body text-center">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="text-gray-500 text-sm">{category.providers}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
