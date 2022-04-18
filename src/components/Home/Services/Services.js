import React from 'react';
import { useEffect, useState } from "react"
import Service from '../Service/Service';
import './Services.css'

// to get all the services
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container'>
            <h3 className='services-title text-center mt-5 fw-bold'>My Services</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;