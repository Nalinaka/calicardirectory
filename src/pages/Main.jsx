import React, { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const { data } = await  axios.get("/api/v1/cars");
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <main>
      <section id="car__info">
        <div className="car-list">
          {loading ? (
            <p>Loading...</p>
          ) : (
            cars.map((car) => (
              <div key={car.id} className="car-data">
                <h3>{car.name}</h3>
                <p>
                  <b>Year:</b> {car.year}
                </p>
                <p>
                  <b>Price:</b> ${car.price}
                </p>
                <p>
                  <b>Color:</b> {car.color}
                </p>
                <p className="description">
                  <b>Make:</b> {car.make}
                </p>
                <p className="car__model">
                  <b>Model:</b> {car.model}
                </p>
                <p className="car__image">
                  <b>Model:</b> {car.image}
                </p>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export default Main;