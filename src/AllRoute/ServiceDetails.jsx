import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ServiceBookingModal from "../AllComponent/ServiceBookingModal";
import { Context } from "../AllContext/Authcontext";
import axios from "axios"; // Import Axios

const ServiceDetails = () => {
  const { currentUser } = useContext(Context);
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  useEffect(() => {
    // Fetch service details using Axios
    const fetchServiceDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/service/${id}`);
        setService(response.data);
      } catch (error) {
        console.error("Error fetching service details:", error);
      }
    };

    fetchServiceDetails();
  }, [id]);

  if (!service) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <div className="card w-full bg-base-100 shadow-md">
        <figure>
          <img
            src={service.imageUrl}
            alt={service.serviceName}
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <h1 className="text-2xl font-bold">{service.serviceName}</h1>
          <p className="text-sm text-gray-600">{service.description}</p>
          <p className="font-bold">Price: ${service.price}</p>
          <div className="flex items-center mt-4">
            <img
              src={service.serviceProvider.image}
              alt={service.serviceProvider.name}
              className="w-10 h-10 rounded-full mr-2"
            />
            <span>{service.serviceProvider.name}</span>
          </div>
          <p>Location: {service.serviceArea}</p>
          <button
            className="btn btn-primary mt-4"
            onClick={() => setShowModal(true)}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Modal for Booking */}
      {showModal && (
        <ServiceBookingModal
          serviceId={service._id}
          serviceName={service.serviceName}
          serviceImage={service.imageUrl}
          providerEmail={service.serviceProvider.email}
          providerName={service.serviceProvider.name}
          currentUserEmail={currentUser?.email || ""}
          currentUserName={currentUser?.displayName || ""}
          price={service.price}
          onClose={() => setShowModal(false)} // Close the modal
        />
      )}
    </div>
  );
};

export default ServiceDetails;
