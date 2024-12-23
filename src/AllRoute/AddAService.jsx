import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
import axios from 'axios';

const AddAService = () => {
  const [formData, setFormData] = useState({
    imageUrl: '',
    serviceName: '',
    price: '',
    serviceArea: '',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const auth = getAuth();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.imageUrl) {
      newErrors.imageUrl = 'Image URL is required.';
    } else if (!/(https?:\/\/.+\.(?:png|jpg|jpeg|gif|svg))/.test(formData.imageUrl)) {
      newErrors.imageUrl = 'Please provide a valid image URL.';
    }

    if (!formData.serviceName) newErrors.serviceName = 'Service Name is required.';
    if (!formData.price) newErrors.price = 'Price is required.';
    if (!formData.serviceArea) newErrors.serviceArea = 'Service Area is required.';
    if (!formData.description) newErrors.description = 'Description is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      return;
    }

    const serviceData = {
      ...formData,
      serviceProvider: {
        name: user.displayName || 'Anonymous',
        email: user.email,
        image: user.photoURL || '',
      },
    };
    console.log(serviceData)

    try {
      const response = await axios.post('http://localhost:3000/addAdata', serviceData);
      if (response.status === 200) {
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
      // console.log(response.status)
        navigate('/'); // Redirect to home or services page
      }
    }
  
     catch (error) {
      console.error('Error adding service:', error);
      toast.error('Failed to add service. Please try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add a New Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL of the Service</span>
          </label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Enter service image URL"
            className={`input input-bordered w-full ${errors.imageUrl ? 'input-error' : ''}`}
          />
          {errors.imageUrl && <span className="text-red-500 text-sm">{errors.imageUrl}</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input
            type="text"
            name="serviceName"
            value={formData.serviceName}
            onChange={handleChange}
            placeholder="Enter service name"
            className={`input input-bordered w-full ${errors.serviceName ? 'input-error' : ''}`}
          />
          {errors.serviceName && <span className="text-red-500 text-sm">{errors.serviceName}</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            className={`input input-bordered w-full ${errors.price ? 'input-error' : ''}`}
          />
          {errors.price && <span className="text-red-500 text-sm">{errors.price}</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Area</span>
          </label>
          <input
            type="text"
            name="serviceArea"
            value={formData.serviceArea}
            onChange={handleChange}
            placeholder="Enter service area"
            className={`input input-bordered w-full ${errors.serviceArea ? 'input-error' : ''}`}
          />
          {errors.serviceArea && <span className="text-red-500 text-sm">{errors.serviceArea}</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter service description"
            className={`textarea textarea-bordered w-full ${errors.description ? 'textarea-error' : ''}`}
          />
          {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddAService;
