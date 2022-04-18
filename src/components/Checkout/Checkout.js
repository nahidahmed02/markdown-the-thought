import React from 'react';

const Checkout = () => {
    return (
        <div className='container my-3'>
            <h3 className='text-center my-3'>If you are eager to take my services then please fill the form below.</h3>
            <form className='w-50 mx-auto'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
                    <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Your Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                    <input type="address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                    <input type="phone" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>

                <div className='text-center mt-4 d-grid'>
                    <button type="submit" className="btn btn-outline-dark">Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;