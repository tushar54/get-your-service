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
            const {data}=await axios.get('http://localhost:3000/sixData')
            // console.log(data)
            setService(data)
        }
        catch (error) {
            console.log(error)
        }
    }
    // console.log(service)
    return (
        <div className='mt-10'>
            <div className='text-center pb-6 '>
                <p className='text-4xl font-bold '>Populer Section</p>
            </div>
           <div className='grid lg:grid-cols-2 justify-around items-center gap-5'>
           {
            service.map((data)=><ServiceCard data={data} key={data._id}></ServiceCard>)
           }
           </div>

           <div>
            <Link to={'/allServices'}><button className='btn bg-green-600 mt-4 text-white'>Show All Services</button></Link>
           </div>
        </div>
    );
};

export default PopularServices;