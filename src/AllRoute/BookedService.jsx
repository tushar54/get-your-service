import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../AllContext/Authcontext';
import axios from 'axios';

const BookedService = () => {
    const { currentUser } = useContext(Context)
    const [services, setServices] = useState([]);
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get(`https://assignment-11-server-side-mocha.vercel.app/booked/${currentUser.email}`,{withCredentials:true});
                setServices(response.data);
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        };

        fetchServices();
    }, [currentUser.email]);
   

    if(services.length===0){
        return  <div className='font-bold text-3xl h-[500px] flex justify-center items-center'> There is no Service to do</div>
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Service-Id</th>
                        <th>Service-Name</th>
                        <th>Service-Price</th>
                        <th>Service-Status</th>
                    </tr>
                </thead>
               {services.map((data,index)=> <tbody key={index}>
                    <tr>
                        <th>{index+1}</th>
                        <td>{data.serviceId}</td>
                        <td> {data.serviceName}</td>
                        <td>{data.price}</td>
                        <td>{data.serviceStatus}</td>
                    </tr>
                </tbody>)}
            </table>
        </div>
    );
};

export default BookedService;