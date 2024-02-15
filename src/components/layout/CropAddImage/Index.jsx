import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import PrimaryButton from '../../inputs/PrimaryButton';

function ImageBackgroundWithDeleteButton({ imageUrl, onDelete }) {
    const backgroundStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
        borderRadius: '12px',
        border: '2px dashed blue',
        display: 'flex',
        justifyContent: 'end',
    };

    return (
        <div className="max-w-[500px] w-full  min-h-[333px]" style={backgroundStyle}>
            {imageUrl ? (
                <>
                    <PrimaryButton sx={{ width: '80px', height: '30px', margin: '5px', color: 'white', backgroundColor: 'red', opacity: 0.7 }}>
                        <h1 className="flex items-center" onClick={onDelete}>
                            <RiDeleteBin6Line className="mr-1" />
                            Delete
                        </h1>
                    </PrimaryButton>
                </>
            ) : null}
        </div>
    );
}

export default ImageBackgroundWithDeleteButton;
