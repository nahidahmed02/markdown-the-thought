import React from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

// show individual the services

const Service = ({ service }) => {
    const { photo, name, description, price } = service;

    const navigate = useNavigate(auth);

    return (
        <div className="col">
            <div className="card h-100">
                <img style={{ padding: '8px' }} src={photo} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">{description}</p>
                    <small>Price: {price}</small>
                    <br />
                    <div className='text-center mt-2'>
                        <button onClick={() => navigate('/checkout')} className='btn btn-outline-dark'>Proceed Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;