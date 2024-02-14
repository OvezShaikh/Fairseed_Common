import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

function YourComponent({ imageUrl }) {
    const [isImageDeleted, setIsImageDeleted] = useState(false);

    const handleDelete = () => {
        setIsImageDeleted(true);
        // Here you can also add additional logic to delete the image from the backend
    };

    return (
        <div className="w-[218px] h-[100px] bg-[#F5F8FC] flex justify-end" style={{ border: '1px solid blue', borderRadius: '2px', position: 'relative' }}>
            {!isImageDeleted && (
                <>
                    <img src={imageUrl} alt="Documents will be Shown hear" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <RiDeleteBin6Line className='m-1' style={{ cursor: 'pointer', position: 'absolute', top: 0, right: 0, color: 'red' }} onClick={handleDelete} />
                </>
            )}
        </div>
    );
}

export default YourComponent;
