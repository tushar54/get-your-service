import { useState, useEffect, useContext } from 'react';
import { Context } from '../AllContext/Authcontext';
import Swal from 'sweetalert2';

const ManageService = () => {
    const {currentUser}=useContext(Context)
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  // Fetch services added by the user
  useEffect(() => {
    fetch(`http://localhost:3000/services/${currentUser.email}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [currentUser.email]);

  // Handle delete service
  const handleDelete = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
                fetch(`http://localhost:3000/delete/${id}`, { method: 'DELETE' })
                  .then((res) => res.json())
                  .then(() => {
                    setServices((prev) => prev.filter((service) => service._id !== id));
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      })
                  });
        }
      });
    
  };

  // Handle update service
  const handleUpdate = (updatedService) => {
    fetch(`http://localhost:3000/services/${updatedService._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setServices((prev) =>
          prev.map((service) =>
            service._id === updatedService._id ? updatedService : service
          )
        );
        setShowEditModal(false);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <div key={service._id} className="card bg-base-100 shadow-md">
            <img src={service.imageUrl} alt={service.serviceName} className="w-full h-48 object-cover" />
            <div className="card-body">
              <h2 className="text-lg font-bold">{service.serviceName}</h2>
              <p className="text-sm">{service.description}</p>
              <div className="mt-4 flex gap-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setSelectedService(service);
                    setShowEditModal(true);
                  }}
                >
                  Edit
                </button>
                <button className="btn btn-error" onClick={() => handleDelete(service._id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center overflow-y-scroll">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Edit Service</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate(selectedService);
              }}
            >
              <div className="mb-4">
                <label className="block mb-2 font-bold">Service Name</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={selectedService.serviceName}
                  onChange={(e) =>
                    setSelectedService({ ...selectedService, serviceName: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold">Service price</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={selectedService.price}
                  onChange={(e) =>
                    setSelectedService({ ...selectedService, price: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold">Service Imgurl</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={selectedService.imageUrl}
                  onChange={(e) =>
                    setSelectedService({ ...selectedService, imageUrl: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold">Service serviceArea</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={selectedService.serviceArea}
                  onChange={(e) =>
                    setSelectedService({ ...selectedService, serviceArea: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold">Description</label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  value={selectedService.description}
                  onChange={(e) =>
                    setSelectedService({ ...selectedService, description: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="flex justify-end gap-2">
                <button type="button" className="btn" onClick={() => setShowEditModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageService;
