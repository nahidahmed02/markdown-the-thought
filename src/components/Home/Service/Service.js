import React from 'react';

const Service = ({ service }) => {
    const { photo, name, description, price } = service;
    return (
        <div className="col">
            <div className="card h-100">
                <img style={{ padding: '8px' }} src={photo} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">{description}</p>
                    <small>Price: {price}</small>
                </div>
            </div>
        </div>
    );
};

export default Service;