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
  console.log(service)

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
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className=" lg:w-1/3 w-full flex-none">
          <img className="rounded-md"
            src={service.imageUrl}
            alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service.
            serviceName}</h2>
          <p className="font-bold">Service Details:</p>
          <p className="font-semibold text-sm">{service.description}</p>
          <p className="font-semibold"><span className="font-bold">Service Area:</span> {service.serviceArea}</p>
          <p className="font-bold">Price: <span className="border-2 px-4 py-1 rounded-md">{service.price}</span></p>
          <div className="flex justify-center items-center gap-4"><img src={service.serviceProvider.image} className="w-[30px] h-[30px] rounded-full" alt="" />
           <p className="font-semibold">{service.serviceProvider.email}</p>
           <p className="font-semibold">(Provider information)</p>
           
           </div>


          <div className="card-actions justify-end ">
            <button
              className="btn  bg-green-500 mt-4 w-3/5"
              onClick={() => setShowModal(true)}
            >
              Book Now
            </button>
          </div>
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
