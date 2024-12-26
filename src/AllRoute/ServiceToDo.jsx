import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../AllContext/Authcontext';
import axios from 'axios'; // Import Axios

const ServiceToDo = () => {
    const { currentUser } = useContext(Context);
    const [services, setServices] = useState([]);
    console.log(services)

    // Fetch services from the backend
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/servicetodo/${currentUser.email}`,{withCredentials:true});
                setServices(response.data);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchServices();
    }, [currentUser.email]);

    // Handle status change using PATCH
    const handleStatusChange = async (serviceId, newStatus) => {
        try {
            const response = await axios.patch(`http://localhost:3000/updateStatus/${serviceId}`, {
                serviceStatus: newStatus,
            });

            if (response.status === 200) {
                // Update the local state
                setServices((prevServices) =>
                    prevServices.map((service) =>
                        service._id === serviceId
                            ? { ...service, serviceStatus: newStatus }
                            : service
                    )
                );
            } else {
                console.error('Failed to update status');
            }
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };
    if(services.length===0)
    {
        return <div className='text-center font-bold text-3xl'> There is no Service to do</div>
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* Head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Service-Id</th>
                        <th>Booked User</th>
                        <th>Service-Name</th>
                        <th>Service-Price</th>
                        <th>Service-Status</th>
                    </tr>
                </thead>
                {services.map((data, index) => (
                    <tbody key={index}>
                        <tr>
                            <th>{index + 1}</th>
                            <td>{data.serviceId}</td>
                            <td>{data.currentUserEmail}</td>
                            <td>{data.serviceName}</td>
                            <td>{data.price}</td>
                            <td>
                                <select
                                    id="dropdown"
                                    value={data.serviceStatus}
                                    onChange={(e) => handleStatusChange(data._id, e.target.value)}
                                >
                                    <option value="pending">Pending</option>
                                    <option value="Working">Working</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
};

export default ServiceToDo;
