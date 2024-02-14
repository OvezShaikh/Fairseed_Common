import React, { useState } from 'react';

function YourComponent({ imageUrl }) {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    return (
        <div className="w-[100%]">
            {!isFullScreen && (
                <div className="max-w-[400px] w-full min-h-[600px]" style={{ border: "2px dashed blue", borderRadius: '12px', backgroundColor: imageUrl ? 'transparent' : '#F7FAFF', position: 'relative' }}>
                    {imageUrl ? (
                        <img src={imageUrl} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, cursor: 'pointer' }} onClick={toggleFullScreen} />
                    ) : null}
                </div>
            )}
            {isFullScreen && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#000', zIndex: 999 }}>
                    <img src={imageUrl} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} onClick={toggleFullScreen} />
                </div>
            )}
        </div>
    );
}

export default YourComponent;   