import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../AllComponent/ServiceCard';

const AllService = () => {
    const [service,setService]=useState([])
    const [search, setSearch] = useState("");

    useEffect(() => {
        Fetchdata(search); // Pass the search value here
    }, [search]);
    


    const Fetchdata = async (searchQuery) => {
        try {
            const { data } = await axios.get('http://localhost:3000/allService', {
                params: { searchParams: searchQuery } // Add search query as a parameter
            });
            // console.log(data)
            setService(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    


    return (
        <div>
               <div className="flex flex-col justify-center items-center mb-4">
                <label className="label">
                    <span className="label-text font-bold text-xl">Search</span>
                </label>
                <input
                    onChange={(e) => setSearch(e.target.value)} 
                    type="text"
                    name="search"
                    placeholder="Search by Title"
                    className="input input-bordered w-2/4 "
                />
            </div>
           <div className='grid lg:grid-cols-2 justify-around items-center gap-5'>
           {
            service.map((data)=><ServiceCard data={data} key={data._id} uniq={data.serviceArea}></ServiceCard>)
           }
           </div>
        </div>
    );
};

export default AllService;