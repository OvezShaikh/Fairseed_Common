import React, { useState } from 'react';
import { RiDeleteBin6Line, RiCloseLine, RiDownload2Line } from 'react-icons/ri';
import images from '../../../constants/images';
import { useDownloadFile } from '../../../Hooks/useDownloadFile';
import SecondaryButton from '../../inputs/secondaryButton';
import { Button } from 'react-bootstrap';

function YourComponent({ imageUrl ,id }) {
    const [isImageDeleted, setIsImageDeleted] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);

    const handleDelete = () => {
        setShowDeleteConfirmation(true);
    };

    const confirmDelete = () => {
        // Simulate deletion by setting isImageDeleted to true
        setIsImageDeleted(true);
        setDeleteSuccess(true); // Set delete success to true
    };

    const cancelDelete = () => {
        setShowDeleteConfirmation(false);
    };
    const toggleFullScreen = () => {
        // Check if the element with the class 'small-screen' exists
        const isSmallScreen = document.documentElement.classList.contains('small-screen');

        // Toggle full screen based on screen size
        if (isSmallScreen) {
            setIsFullScreen(!isFullScreen);
        } else {    
            // Handle full screen toggling for large screens as before
            // For example:
            // setIsFullScreen(!isFullScreen);
            setIsFullScreen(!isFullScreen);

        }
    };

    const url = `/admin-dashboard/campaign/${id}`;
    
    const { refetch:Filerefetch , isFetching:Fileloading } = useDownloadFile(
      url,
        {
            download: true,
        },
        () => {

          console.log('File download successful');
        }
      );


    // const downloadDocument = () => {
    //     // Create a temporary anchor element
    //     const downloadLink = document.createElement('a');
    //     downloadLink.href = imageUrl;
    
    //     // Extract the filename from the URL
    //     const urlParts = imageUrl.split('/');
    //     const filename = urlParts[urlParts.length - 1];
    
    //     // Set the download attribute to specify the filename
    //     downloadLink.download = filename;
    
    //     // Append the anchor to the body
    //     document.body.appendChild(downloadLink);
    
    //     // Trigger a click event to start the download
    //     downloadLink.click();
    
    //     // Clean up: remove the anchor from the body
    //     document.body.removeChild(downloadLink);       
    // };
        

    const handleOk = () => {
        setDeleteSuccess(false);
        setIsImageDeleted(true); // Actually delete the image
        setShowDeleteConfirmation(false); // Close the confirmation dialog
    };

    return (
        <>
            {!isImageDeleted && (
                <div className="w-[218px] h-[100px] bg-[#F5F8FC] flex justify-end" style={{ border: '1px solid blue', borderRadius: '2px', position: 'relative' }}>
                    <img src={imageUrl} alt="Documents" style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }} onClick={toggleFullScreen} />
                    {!isFullScreen && (
                        <RiDeleteBin6Line
                            className='absolute top-0 right-0 m-1 cursor-pointer'
                            style={{ color: 'white' }}
                            onClick={handleDelete}
                        />
                    )}
                </div>
            )}
            {isFullScreen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center " style={{ zIndex: 1234567 }}>
                    <div className="relative">
                        <img
                            src={imageUrl}
                            alt="Documents "
                            style={{ maxWidth: '1000px', maxHeight: '1000px' }}
                            onClick={toggleFullScreen}
                        />
                        <div className="absolute top-0 right-0 m-4 flex flex-col items-center">
                            <RiCloseLine
                                className='cursor-pointer text-white'
                                style={{ fontSize: '24px' }}
                                onClick={toggleFullScreen}
                            />
                            <Button
                            onClick={() => Filerefetch()} isLoading={Fileloading}
                            color='#40444C'
                            >
                         
                            Download
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            {showDeleteConfirmation && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center " style={{ zIndex: 12344 }}>
                    <div className="bg-white p-4 rounded shadow-md flex flex-col items-center justify-center text-center">
                        {!deleteSuccess ? (
                            <>
                                <img src={images.Vector} className='w-[50px] h-[50px] mb-2' alt="" />

                                <h1 className='pb-2 text-[30px] font-[satoshi] font-black '>Are you sure?</h1>
                                <p className='text-black/40 text-[20px] font-[satoshi] font-medium'>Once deleted, you will not be able to recover this document.</p>
                                <div className="mt-4">
                                    <button onClick={cancelDelete} className="bg-gray-300 px-4 py-2  text-[20px] mr-2 font-[satoshi] font-medium rounded">No, cancel!</button>
                                    <button onClick={confirmDelete} className="bg-green-500 text-white text-[20px] font-[satoshi] font-medium px-4 py-2  rounded">Yes, delete it!</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <img src={images.done} alt="" />
                                <h1 className='text-green-400 pb-2 text-[30px] font-[satoshi] font-black '>Success!</h1>
                                <p className='text-[18px] text-black/40 font-medium font-[satoshi]'>Document deleted successfully.</p>
                                <div className="mt-4">
                                    <button onClick={handleOk} className="bg-green-500 text-white text-[20px] font-[satoshi] font-medium px-4 py-2  rounded">OK</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default YourComponent;




