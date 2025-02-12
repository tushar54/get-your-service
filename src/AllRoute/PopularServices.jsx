import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../AllComponent/ServiceCard';
import { Link } from 'react-router-dom';

const PopularServices = () => {
    const [service,setService]=useState([])

    useEffect(() => {
       Fetchdata()
    }, [])


    const Fetchdata = async () => {
        try {
            const {data}=await axios.get('https://assignment-11-server-side-mocha.vercel.app/sixData')
            // console.log(data)
            setService(data)
        }
        catch (error) {
            console.log(error)
        }
    }
    // console.log(service)
    return (
        <div className='mt-5'>
            <div className='text-center pb-6 '>
                <p className='text-4xl font-bold '>Populer Section</p>
            </div>
           <div className=' container mx-auto justify-items-center grid lg:grid-cols-2 justify-around items-center gap-5'>
           {
            service.map((data)=><ServiceCard data={data} key={data._id}></ServiceCard>)
           }
           </div>

           <div className='ml-10'>
            <Link to={'/allServices'}><button className='btn bg-green-600 mt-4 text-white'>Show All Services</button></Link>
           </div>
        </div>
    );
};

export default PopularServices;