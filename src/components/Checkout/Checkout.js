import React from 'react';

const Checkout = () => {
    return (
        <div className='container my-3'>
            <h3 className='text-center my-3'>If you are eager to take my services then please fill the form below.</h3>
            <form className='w-50 mx-auto'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Your Name</label>
                    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Your Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Address</label>
                    <input type="address" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                    <input type="phone" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>

                <div className='text-center mt-4 d-grid'>
                    <button type="submit" class="btn btn-outline-dark">Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;