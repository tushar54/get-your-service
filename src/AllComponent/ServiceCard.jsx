import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ data ,uniq}) => {
    const { imageUrl,
        serviceName,
        _id,
        price,
        serviceProvider,
        description } = data || {}
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl ">
                <figure className='w-[260px] h-[194px]'>
                    <img className='w-full h-full'
                        src={imageUrl}
                        alt={serviceName} />
                </figure>
                <div className="card-body">
                    <div>{serviceName}</div>
                    <div className='flex  justify-center items-center gap-3'>
                        <img className='w-[50px] h-[50px] rounded-full' src={serviceProvider.image} alt={serviceProvider.name} />
                        <p>{serviceProvider.name}</p>
                        {
                            uniq?<p>{uniq}</p>:''
                        }

                    </div>
                    <p className="text-sm text-gray-500">
                        {description.length > 100
                            ? `${description.slice(0, 100)}...`
                            : description}
                         
                    </p>

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