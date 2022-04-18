import React from 'react';

const Toast = () => {
    return (
        <div>
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <img src="..." className="rounded me-2" alt="..." />
                    <strong className="me-auto">Markdown The Thought</strong>
                    <small>Just Now</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    Email sent
                </div>
            </div>
        </div>
    );
};

export default Toast;