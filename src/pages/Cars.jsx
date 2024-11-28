import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Cars = () => {
  const { Model } = useParams();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchModel, setSearchModel] = useState(Model || "");
  const [filteredCars, setFilteredCars] = useState([]);

  const fetchCars = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/api/v1/cars');
      setCars(data);
      setFilteredCars(data);
    } catch (error) {
      console.error("Error fetching cars:", error);
      setCars([]);
      setFilteredCars([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle search
  const handleSearch = () => {
    const filtered = cars.filter(car => 
      car.model.toLowerCase().includes(searchModel.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  // Handle input change
  const handleInputChange = (event) => {
    setSearchModel(event.target.value);
  };

  const onSearchKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // Fetch cars on component mount
  useEffect(() => {
    fetchCars();
  }, []);

  // If there's an initial Model from params, filter on mount
  useEffect(() => {
    if (Model && cars.length > 0) {
      const filtered = cars.filter(car => 
        car.model.toLowerCase().includes(Model.toLowerCase())
      );
      setFilteredCars(filtered);
    }
  }, [Model, cars]);

  return (
    <div className="container mx-auto p-4">
      <div className="car__search mb-6">
        <Link to="/">
          <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
            ← Back
          </button>
        </Link>
        <div className="car__search--container mt-4 flex gap-2">
          <div className="flex flex-col flex-1">
            <label className="car__search--label mb-2">
              Search by car model
            </label>
            <input
              type="text"
              className="border p-2 rounded"
              value={searchModel}
              onChange={handleInputChange}
              onKeyPress={onSearchKeyPress}
              placeholder="Enter car model..."
            />
          </div>
          <button 
            onClick={handleSearch}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 self-end"
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          // Skeleton loading state
          [...Array(6)].map((_, index) => (
            <div key={index} className="border rounded-lg p-4 animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          ))
        ) : filteredCars.length > 0 ? (
          // Actual car data
          filteredCars.map((car) => (
            <div key={car.model} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{car.model}</h2>
              <p className="text-gray-600">Make: {car.make}</p>
              <p className="text-xl font-semibold mb-2">Price: {car.price}</p>
              <img src={car.image} alt={car.model} className="w-full h-48 object-cover rounded mb-2"/>
            </div>
          ))
        ) : (
          // No results state
          <div className="col-span-full text-center py-8 text-gray-500">
            No cars found matching your search.
          </div>
        )}
      </div>

     
    </div>
  );
};

export default Cars;