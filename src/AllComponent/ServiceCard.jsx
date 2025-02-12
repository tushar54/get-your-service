import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"; 
import { Link } from 'react-router-dom';

const ServiceCard = ({ data, uniq }) => {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          offset: 50,     // Offset (in px) from the original trigger point
          easing: "ease-in-out", // Animation easing function
          once: false,     // Whether animation should happen only once
        });
      }, []);

    const { imageUrl,
        serviceName,
        _id,
        price,
        serviceProvider,
        description } = data || {}
    return (
        <div>
            <div  data-aos="fade-left"  className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row ">
                <figure className='flex-none'>
                <div className='w-[300px] h-[250px]'>
                    <img className='md:w-full md:h-full  rounded-md md: rounded-l-md'
                        src={imageUrl}
                        alt={serviceName} />
                </div>
                </figure>
                <div className="card-body">
                    <div className='text-lg font-bold'>{serviceName}  {
                            uniq ? <p className='text-sm font-semibold'> Service Area: {uniq}</p> : ''
                        }</div>
                    <p className=" grow min-h-[72px] font-bold text-gray-500">
                        {description.length > 100
                            ? `${description.slice(0, 100)}...`
                            : description}

                    </p>
                    <div className='flex  justify-center items-center gap-3'>
                        <img className='w-[30px] h-[30px] rounded-full' src={serviceProvider.image} alt={serviceProvider.name} />
                        <p className='text-sm font-bold'>{serviceProvider.name} (Provider)</p>
                       

                    </div>


                    <div className="card-actions justify-end items-center">
                        <p className='border-2 text-center rounded-lg font-bold'>Price : {price}</p>
                        <Link to={`/service/${_id}`}><button className="btn">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;