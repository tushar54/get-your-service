import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../AllContext/Authcontext';
import Swal from 'sweetalert2';

const ManageService = () => {
  const { currentUser } = useContext(Context);
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  // Fetch services added by the user
  useEffect(() => {
    axios
      .get(`http://localhost:3000/services/${currentUser.email}`,{withCredentials:true})
      .then((res) => setServices(res.data))
      .catch((error) => console.error("Error fetching services:", error));
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
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/delete/${id}`)
          .then(() => {
            setServices((prev) => prev.filter((service) => service._id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => console.error("Error deleting service:", error));
      }
    });
  };

  // Handle update service
  const handleUpdate = (updatedService) => {
    axios
      .put(`http://localhost:3000/services/${updatedService._id}`, updatedService)
      .then((res) => {
        console.log(res.data);
        setServices((prev) =>
          prev.map((service) =>
            service._id === updatedService._id ? updatedService : service
          )
        );
        setShowEditModal(false);
      })
      .catch((error) => console.error("Error updating service:", error));
  };
  if(services.length===0){
    return  <div className='text-center font-bold text-3xl'> There is no manage to do</div>
}

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center ">Manage Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <div key={service._id} className="card bg-base-100 shadow-md">
            <img src={service.imageUrl} alt={service.serviceName} className="w-full h-48 object-cover" />
            <div className="card-body">
              <p className='font-bold'>Service Id: {service._id}</p>
              <h2 className="text-lg font-bold">{service.serviceName}</h2>
              <p className="text-sm">{service.description}</p>
              <div className="mt-4 flex gap-2">
                <button
                  className="bg-green-500 border-2 text-white font-bold rounded-md px-5 py-2"
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
       <div className="fixed inset-0 z-40 bg-gray-800 bg-opacity-75 flex justify-center items-start overflow-y-auto pt-10 pb-10">
       <div className="bg-white p-6 rounded-lg w-full max-w-3xl">
         <h2 className="text-xl font-bold mb-4">Edit Service</h2>
         <form
           onSubmit={(e) => {
             e.preventDefault();
             handleUpdate(selectedService);
           }}
         >
           <div className="grid md:grid-cols-3 gap-4">
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
               <label className="block mb-2 font-bold">Service Price</label>
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
               <label className="block mb-2 font-bold">Service Image URL</label>
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
               <label className="block mb-2 font-bold">Service Area</label>
               <input
                 type="text"
                 className="input input-bordered w-full"
                 value={selectedService.serviceArea}
                 onChange={(e) =>
                   setSelectedService({ ...selectedService, serviceArea: e.target.value })
                 }
               />
             </div>
             <div className="mb-4 md:col-span-3">
               <label className="block mb-2 font-bold">Description</label>
               <textarea
                 className="textarea textarea-bordered w-full"
                 value={selectedService.description}
                 onChange={(e) =>
                   setSelectedService({ ...selectedService, description: e.target.value })
                 }
               ></textarea>
             </div>
           </div>
           <div className="flex justify-end gap-4">
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
