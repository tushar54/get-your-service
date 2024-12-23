import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../AllComponent/ServiceCard';

const AllService = () => {
    const [service,setService]=useState([])

    useEffect(() => {
       Fetchdata()
    }, [])


    const Fetchdata = async () => {
        try {
            const {data}=await axios.get('http://localhost:3000/allService')
            // console.log(data)
            setService(data)
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
           <div className='grid lg:grid-cols-2 justify-around items-center gap-5'>
           {
            service.map((data)=><ServiceCard data={data} key={data._id} uniq={data.serviceArea}></ServiceCard>)
           }
           </div>
        </div>
    );
};

export default AllService;