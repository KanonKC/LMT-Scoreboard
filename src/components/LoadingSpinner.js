import React from 'react'

const LoadingSpinner = () => {

    return (
        <>
        <div className="loading-background">
            <div className="loading-spinner spinner-border text-light" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            
        </div>
        </>
    )
}

export default LoadingSpinner