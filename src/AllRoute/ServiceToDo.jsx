import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../AllContext/Authcontext';

const ServiceToDo = () => {
    const { currentUser } = useContext(Context);
    const [services, setServices] = useState([]);

    // Fetch services from the backend
    useEffect(() => {
        fetch(`http://localhost:3000/servicetodo/${currentUser.email}`)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [currentUser.email]);
// console.log(services[0]._id)
    // Handle status change using PATCH
    const handleStatusChange = async (serviceId, newStatus) => {
        try {
            // Send a PATCH request to update the status
            const response = await fetch(`http://localhost:3000/updateStatus/${serviceId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ serviceStatus: newStatus }),
            });

            if (response.ok) {
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

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
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
                            <th>{data.currentUserEmail}</th>
                            <td>{data.serviceName}</td>
                            <td>{data.price}</td>
                            <td>
                                <select
                                    id="dropdown"
                                    value={data.serviceStatus}
                                    onChange={(e) => handleStatusChange(data._id, e.target.value)}
                                >
                                    <option value="pending">pending</option>
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
