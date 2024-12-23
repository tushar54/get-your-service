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
           <div className='grid lg:grid-cols-2 justify-around items-center gap-5'>
           {
            service.map((data)=><ServiceCard data={data} key={data._id}></ServiceCard>)
           }
           </div>

           <div>
            <Link to={'/allServices'}><button className='btn btn-error'>Show All Services</button></Link>
           </div>
        </div>
    );
};

export default PopularServices;