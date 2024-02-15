import React, { useState } from 'react';
import { RiDeleteBin6Line, RiCloseLine } from 'react-icons/ri';

function YourComponent({ imageUrl }) {
    const [isImageDeleted, setIsImageDeleted] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleDelete = () => {
        setIsImageDeleted(true);
        // Here you can also add additional logic to delete the image from the backend
    };

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    return (
        <div className="w-[218px] h-[100px] bg-[#F5F8FC] flex justify-end" style={{ border: '1px solid blue', borderRadius: '2px', position: 'relative' }}>
            {!isImageDeleted && (
                <>
                    <img src={imageUrl} alt="Documents will be Shown hear" style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }} onClick={toggleFullScreen} />
                    {!isFullScreen && (
                        <RiDeleteBin6Line
                            className='absolute top-0 right-0 m-1 cursor-pointer'
                            style={{ color: 'red' }}
                            onClick={handleDelete}
                        />
                    )}
                </>
            )}
            {isFullScreen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center " style={{ zIndex: 1234567 }}>
                    <div className="relative">
                        <img
                            src={imageUrl}
                            alt="Documents will be Shown here"
                            style={{ maxWidth: '1000px', maxHeight: '1000px' }}
                            onClick={toggleFullScreen}
                        />
                        <RiCloseLine
                            className='absolute top-0 right-0 m-4 cursor-pointer'
                            style={{ color: 'white', fontSize: '24px' }}
                            onClick={toggleFullScreen}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default YourComponent;
