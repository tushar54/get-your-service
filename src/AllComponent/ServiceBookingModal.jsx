import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
const ServiceBookingModal = ({
  serviceId,
  serviceName,
  serviceImage,
  providerEmail,
  providerName,
  currentUserEmail,
  currentUserName,
  price,
  onClose,
}) => {
  const [serviceDate, setServiceDate] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");

  const handlePurchase = async () => {
    const bookingData = {
      serviceId,
      serviceName,
      serviceImage,
      providerEmail,
      providerName,
      currentUserEmail,
      currentUserName,
      serviceDate,
      specialInstructions,
      price,
      serviceStatus: "pending",
    };

    if (providerEmail === currentUserEmail) {
     return toast("Error Author can't book");
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/service/bookings",
        bookingData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("Booking successful!");
        onClose(); // Close the modal
      } else {
        alert("Failed to book the service. Please try again.");
      }
    } catch (error) {
      console.error("Error booking service:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="fixed inset-0 z-40 bg-gray-800 bg-opacity-75 flex justify-center items-start overflow-y-auto pt-10 pb-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Book Service</h2>
        <form >
          <div className="grid md:grid-cols-3 gap-4 ">
          <div className="mb-2">
            <label className="block font-medium">Service ID</label>
            <input
              type="text"
              value={serviceId}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-2">
            <label className="block font-medium">Service Name</label>
            <input
              type="text"
              value={serviceName}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-2">
            <label className="block font-medium">Provider Email</label>
            <input
              type="email"
              value={providerEmail}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-2">
            <label className="block font-medium">Provider Name</label>
            <input
              type="text"
              value={providerName}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-2">
            <label className="block font-medium">Current User Email</label>
            <input
              type="email"
              value={currentUserEmail}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-2">
            <label className="block font-medium">Current User Name</label>
            <input
              type="text"
              value={currentUserName}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-2">
            <label className="block font-medium">Service Taking Date</label>
            <input
              type="date"
              value={serviceDate}
              onChange={(e) => setServiceDate(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-2">
            <label className="block font-medium">Special Instructions</label>
            <textarea
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="Enter any instructions..."
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>
          <div className="mb-2">
            <label className="block font-medium">Price</label>
            <input
              type="text"
              value={`$${price}`}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          </div>
        <div className="flex justify-center items-center">
        <button
            type="button"
            onClick={handlePurchase}
            className="btn btn-primary w-3/4 mt-4 "
          >
            Purchase
          </button>
        </div>
        </form>
        <button
          className="btn btn-secondary w-full mt-2"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ServiceBookingModal;
